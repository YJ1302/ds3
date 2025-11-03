
import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, description, imageUrl }) => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wide">{subtitle}</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">{description}</p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <a href="#specs" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                            Ver Especificaciones
                        </a>
                        <a href="#gallery" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 border border-gray-300 shadow-lg">
                            Ver Galería
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={imageUrl} alt={title} className="rounded-lg object-contain h-auto w-full max-w-2xl mx-auto animate-float"/>
                </div>
            </div>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};