import React from "react";
import HeaderBrand from "../components/HeaderBrand";
import ScrollyProduct from "../components/ScrollyProduct";
import BrandMarquee from "../components/BrandMarquee";
import FooterFancy from "../components/FooterFancy";
import RelatedProducts from "../components/RelatedProducts";
import { alsoAvailable } from "../constants";
import { productData, features, galleryImages, brandLogos } from "../constants";



export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <HeaderBrand />

      {/* header is taller now */}
      <main className="mt-20 md:mt-24 scroll-smooth">
        <ScrollyProduct
          productName={productData.name}
          model={productData.model}
          overview={productData.overview}
          images={galleryImages}
          features={features}          
        />
        {/* @ts-ignore: RelatedProducts props type currently expects only items; passing title intentionally */}
        <RelatedProducts title="También Disponible" items={alsoAvailable} />

        <BrandMarquee title="Nuestras marcas" logos={brandLogos} speedSec={26} />

      </main>

      <FooterFancy />
    </div>
  );
}
