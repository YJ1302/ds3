
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="font-bold text-lg">Switch Aruba Instant On 1960</p>
                        <p className="text-gray-400">© {new Date().getFullYear()} Hewlett Packard Enterprise Development LP.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentación</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Comunidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};