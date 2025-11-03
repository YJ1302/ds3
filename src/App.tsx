import React from "react";
import HeaderBrand from "../components/HeaderBrand";
import ScrollyProduct from "../components/ScrollyProduct";
import BrandMarquee from "../components/BrandMarquee";
import FooterFancy from "../components/FooterFancy";
import RelatedProducts from "../components/RelatedProducts";
import { alsoAvailable } from "../constants";
import { productData, features, galleryImages, brandLogos } from "../constants";
import MobileAppShell from "../components/MobileAppShell";

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header (logo + search + buttons) on ALL screens */}
      <HeaderBrand />

      {/* Offset for sticky header */}
      <main className="mt-20 md:mt-24 scroll-smooth">
        {/* MOBILE: app-like experience */}
        <div className="block lg:hidden">
          <MobileAppShell />
        </div>

        {/* DESKTOP: original full site (unchanged) */}
        <div className="hidden lg:block">
          <ScrollyProduct
            productName={productData.name}
            model={productData.model}
            overview={productData.overview}
            images={galleryImages}
            features={features}
          />
          {/* Primero “También Disponible”… */}
          {/* @ts-ignore: allowing title prop */}
          <RelatedProducts title="También Disponible" items={alsoAvailable} />
          {/* …y luego “Nuestras marcas” */}
          <BrandMarquee title="Nuestras marcas" logos={brandLogos} speedSec={26} />
        </div>
      </main>

      {/* Footer on ALL screens */}
      <FooterFancy />
    </div>
  );
}
