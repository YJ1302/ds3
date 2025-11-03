
import React from 'react';

interface HeaderProps {
    productName: string;
}

export const Header: React.FC<HeaderProps> = ({ productName }) => {
    return (
        <header className="sticky top-0 insert-x-0 z-50 h-16 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <svg className="w-8 h-8 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                    <h1 className="text-xl font-bold text-gray-800">{productName}</h1>
                </div>
                <nav className="flex items-center space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Características</a>
                    <a href="#specs" className="text-gray-600 hover:text-orange-500 transition-colors">Especificaciones</a>
                    <a href="#assistant" className="text-gray-600 hover:text-orange-500 transition-colors">Asistente</a>
                    <a href="#" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-105">
                        Comprar Ahora
                    </a>
                </nav>
            </div>
        </header>
    );
};