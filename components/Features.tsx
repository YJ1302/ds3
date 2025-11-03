
import React from 'react';
import { Feature } from '../types';

interface FeaturesProps {
    features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Diseñado para Empresas en Crecimiento</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Características potentes, fáciles de gestionar, seguras y listas para escalar.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};