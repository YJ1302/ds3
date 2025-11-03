
import React from 'react';
import { Specification } from '../types';

interface SpecificationsProps {
    specs: Specification[];
}

export const Specifications: React.FC<SpecificationsProps> = ({ specs }) => {
    return (
        <section id="specs" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Especificaciones Técnicas</h2>
                    <p className="mt-4 text-lg text-gray-600">Todos los detalles que necesitas sobre el Aruba Instant On 1960 JL806A.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {specs.map((specCategory, index) => (
                        <div key={index} className="mb-8 last:mb-0">
                            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2 mb-4">{specCategory.category}</h3>
                            <ul className="space-y-3">
                                {specCategory.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex flex-col sm:flex-row justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-700">{detail.name}</span>
                                        <span className="text-gray-600 text-left sm:text-right">{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};