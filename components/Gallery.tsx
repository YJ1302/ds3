
import React, { useState } from 'react';
import { GalleryImage } from '../types';

interface GalleryProps {
    images: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[1]);

    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Explora Cada Ángulo</h2>
                    <p className="mt-4 text-lg text-gray-600">Haz clic en una miniatura para ver vistas detalladas del Switch Aruba 1960.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-8 p-4 bg-white rounded-lg shadow-2xl w-full max-w-4xl h-96 flex items-center justify-center">
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt} 
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                            key={selectedImage.id} // Add key to trigger re-render on change
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <button
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                className={`p-2 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${selectedImage.id === image.id ? 'ring-2 ring-orange-500' : ''}`}
                            >
                                <img src={image.src} alt={image.alt} className="w-full h-auto object-contain rounded-md" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};