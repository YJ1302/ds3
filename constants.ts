
import React from 'react';
import { Feature, GalleryImage, Specification } from './types';
import { StackingIcon, TenGbeIcon, CloudIcon, SecurityIcon } from './components/Icons';


export const productData = {
    name: "Switch Aruba Instant On 1960",
    model: "24G 2XGT 2SFP+ (JL806A)",
    overview: "Switches Gigabit apilables, avanzados y de gestión inteligente, diseñados para pequeñas y medianas empresas en crecimiento. Fáciles de implementar, seguros y asequibles, escalan a medida que tu negocio crece.",
    price: 767,                 // numeric for formatting
  currencyLabel: "U$",        // matches the DS3 page
};

export const features: Feature[] = [
    {
        icon: React.createElement(TenGbeIcon),
        title: "Red 10GbE de Alto Nivel",
        description: "Incluye cuatro conexiones 10GbE para conectividad de alta velocidad a servidores y almacenamiento en red, eliminando cuellos de botella."
    },
    {
        icon: React.createElement(CloudIcon),
        title: "Apilamiento Gestionado en la Nube",
        description: "Apila hasta cuatro switches 1960 y gestiónalos como una sola entidad a través de la app móvil Instant On o el portal web."
    },
    {
        icon: React.createElement(StackingIcon),
        title: "Implementación Simplificada",
        description: "Usa la app móvil Instant On para una configuración guiada o la GUI web local. Una etiqueta extraíble con código QR simplifica la incorporación."
    },
    {
        icon: React.createElement(SecurityIcon),
        title: "Seguridad Robusta",
        description: "Protege tu red con funciones como VLAN, listas de control de acceso, 802.1X con servidor RADIUS y protección automática contra DoS."
    }
];

export const brandLogos: { src: string; alt: string }[] = [
  { src: "/images/marcas/airlive.jpg",                 alt: "AirLive" },
  { src: "/images/marcas/ALFA.jpg",                    alt: "ALFA" },
  { src: "/images/marcas/amp.jpg",                     alt: "AMP" },
  { src: "/images/marcas/amphenol.jpg",                alt: "Amphenol" },
  { src: "/images/marcas/andrew.jpg",                  alt: "Andrew" },
  { src: "/images/marcas/Belden.jpg",                  alt: "Belden" },
  { src: "/images/marcas/cisco.jpg",                   alt: "Cisco" },
  { src: "/images/marcas/D-Link_Logo-100x26.jpg",      alt: "D-Link" },
  { src: "/images/marcas/dahua.jpg",                   alt: "Dahua" },
  { src: "/images/marcas/dixon_logo-100x19.jpg",       alt: "Dixon" },
  { src: "/images/marcas/edimax_logo2-100x28.jpg",      alt: "Edimax" },
  { src: "/images/marcas/energit_logo.jpg",            alt: "Energit" },
  { src: "/images/marcas/engenius_logo-100x30.jpg",    alt: "EnGenius" },
  { src: "/images/marcas/lanpro_logo.jpg",             alt: "LanPro" },
  { src: "/images/marcas/Icom_logo-100x23.jpg",        alt: "Icom" },
  { src: "/images/marcas/lenovo_bar-100x18.jpg",       alt: "Lenovo" },
  { src: "/images/marcas/logo_fibrefab.jpg",           alt: "Fibrefab" },
  { src: "/images/marcas/logo_Teldor1.jpg",            alt: "Teldor" },
  { src: "/images/marcas/mikrotik_logo-100x24.jpg",    alt: "MikroTik" },
  { src: "/images/marcas/panduit_logo.jpg",            alt: "Panduit" },
  { src: "/images/marcas/tp-link_logo-100x13.jpg",     alt: "TP-Link" },
  { src: "/images/marcas/trendnet_logo-100x20.jpg",    alt: "TRENDnet" },
  { src: "/images/marcas/ubnt_logo-100x47.jpg",        alt: "Ubiquiti" },
  { src: "/images/marcas/vertical_logo1.jpg",          alt: "Vertical" },
];

export const galleryImages: GalleryImage[] = [
  // HERO (big, clear image on the main page)
  { id: 1, src: "/images/JL806A_front.jpg",        alt: "Switch Aruba 1960 - Vista Frontal" },

  // Thumbnails below (three only)
  { id: 2, src: "/images/JL806A_front.jpg",   alt: "Switch Aruba 1960 - Vista en Perspectiva" },
  { id: 3, src: "/images/JL806A_side.jpg",    alt: "Switch Aruba 1960 - Vista Lateral" },
  { id: 4, src: "/images/JL806A_back.jpg",    alt: "Switch Aruba 1960 - Vista Trasera" },
];

export const specsCompact = {
  basics: [
    { name: "Modelo", value: "JL806A" },
    { name: "Tipo de Producto", value: "Switch de red" },
    { name: "Marca", value: "HPE Networking Instant On" },
  ],
  performance: [
    { metric: "Puertos de Cobre", value: "24 x 1 Gbps" },
    { metric: "Puertos de 10G", value: "2 x 10GBASE-T" },
    { metric: "Puertos de Fibra", value: "2 x SFP+" },
    { metric: "Capacidad de Switching", value: "128 Gbps" },
    { metric: "Gestión", value: "Aruba Instant On Cloud" },
  ],
};

// Optional: convenience exports so the UI is trivial
export const heroImage = galleryImages[0];
export const galleryThumbs = galleryImages.slice(1);

export const specifications:
 Specification[] = [
    {
        category: "Especificaciones Clave",
        details: [
            { name: "Número de Producto", value: "JL806A" },
            { name: "Puertos", value: "24 puertos RJ-45 10/100/1000, 2 puertos SFP+ 10GbE, 2 puertos 10GBASE-T" },
            { name: "Rendimiento", value: "95 Mpps" },
            { name: "Capacidad de conmutación", value: "128 Gbps" },
            { name: "Capacidades de apilamiento", value: "Altura 4H, hasta 4 switches" },
        ]
    },
    {
        category: "Hardware",
        details: [
            { name: "Memoria y procesador", value: "Single Core ARMv7 Cortex-A9 @800MHz" },
            { name: "Dimensiones del producto (métricas)", value: "35.05 x 44.25 x 4.4 cm" },
            { name: "Peso", value: "3.9 kg" },
        ]
    },
    {
        category: "Energía y Ambiente",
        details: [
            { name: "Voltaje de entrada", value: "100 - 240 VCA" },
            { name: "Consumo de energía", value: "Máximo: 60W (100-127V), 80W (200-220V) | Inactivo: 30W (100-127V), 40W (200-220V)" },
            { name: "Temperatura de funcionamiento", value: "0-40°C, 0-10,000 ft" },
        ]
    },
    {
        category: "Gestión",
        details: [
            { name: "Características", value: "Aruba Instant On Cloud; Navegador web; Administrador SNMP" },
        ]
    }
];

// Also Available (También Disponible)
export const alsoAvailable = [
  {
    sku: "JL808A",
    name: "JL808A",
    image: "/images/JL808A_front.jpg",
    blurb:
      "Switch 48 puertos Gigabit, 2 10GBASE-T, 2 SFP+. Gestión en la nube.",
    href: "https://www.ds3comunicaciones.com/hp/aruba/switch_instantOn/JL808A.html", // change to real URL if you have it
  },
  {
    sku: "JL809A",
    name: "JL809A",
    image: "/images/JL809A_front.jpg",
    blurb:
      "Switch 48 puertos Gigabit PoE, 2 10GBASE-T, 2 SFP+, PoE 600W.",
    href: "https://www.ds3comunicaciones.com/hp/aruba/switch_instantOn/JL809A.html",
  },
  {
    sku: "S0G34A",
    name: "S0G34A",
    image: "/images/S0G34A_front.jpg",
    blurb:
      "Gateway de seguridad, 5 puertos SmartRate 2.5G PoE+, gestión en la nube.",
    href: "https://www.ds3comunicaciones.com/hp/aruba/switch_instantOn/S0G34A.html",
  },
  {
    sku: "R8R47A",
    name: "R8R47A",
    image: "/images/R8R47A_front.jpg",
    blurb:
      "Switch Aruba 1960, 24 puertos Gigabit, 2 SFP+ 10G, apilamiento virtual.",
    href: "https://www.ds3comunicaciones.com/hp/aruba/switch_instantOn/R8R47A.html",
  },
];

export const DOCUMENTATION_CONTEXT = `
Ficha técnica del Switch Aruba Instant On 1960 24G 2XGT 2SFP+ (JL806A).
Descripción general:
Los switches Aruba Instant On 1960 son switches apilables Gigabit de configuración fija, avanzados y de gestión inteligente, diseñados para pequeñas y medianas empresas en crecimiento que son fáciles de implementar y asequibles. Estos switches están diseñados para escalar a medida que el negocio crece, simplificando la adición de más empleados, dispositivos y aplicaciones. Manejan aplicaciones de gran ancho de banda como voz y videoconferencias. Opciones de gestión flexibles: GUI web local o aplicación móvil Instant On y portal web basado en la nube.

Novedades:
- Simplifica la gestión de la red apilando hasta (cuatro) 4 switches Aruba Instant On 1960 y gestionándolos a través de una única dirección IP.
- Serie de switches de acceso Ethernet de capa 2+ con gestión inteligente.
- Modelos disponibles con y sin PoE.

Características:
- Red Gigabit de alto nivel con 10GbE: Cada modelo incluye cuatro conexiones 10GbE. Dos conexiones de 10GBASE-T ofrecen 10GbE sobre cableado de cobre de Categoría 5/6a hasta 100 metros.
- Modelos PoE: Hasta 30W PoE (Clase 4) para dispositivos como puntos de acceso y cámaras, y hasta 60W PoE (Clase 6) para dispositivos como cámaras pan-tilt-zoom.
- Implementación y gestión de red simplificadas: Un portafolio completo con modelos de 24 y 48 puertos en configuraciones PoE y no PoE.
- Modos de gestión: Gestión en la nube Instant On (a través de la aplicación móvil/portal web) o GUI web local.
- Incorporación: Cada switch tiene una "etiqueta de equipaje" extraíble con un código QR que contiene información de identificación del switch (SKU, número de serie, dirección MAC) para una fácil incorporación.
- Apilamiento gestionado en la nube: Apila hasta cuatro switches 1960 y gestiónalos como una sola entidad. La aplicación móvil detecta automáticamente a los miembros para una configuración sencilla.
- Seguridad robusta: Utiliza VLANs y Listas de Control de Acceso (ACLs). Aprovecha 802.1X con un servidor RADIUS. Soporta monitores automáticos de denegación de servicio (DOS).

Especificaciones técnicas para JL806A:
- Número de producto: JL806A
- Diferenciador: Switch apilable de alto rendimiento y gestión inteligente para pequeñas y medianas empresas en crecimiento. Apila hasta cuatro switches 1960.
- Puertos: 24 puertos RJ-45 10/100/1000, 2 puertos SFP+ 10GbE, 2 puertos 10GBASE-T
- Memoria y procesador: Single Core ARMv7 Cortex-A9 @800MHz
- Rendimiento: 95 Mpps
- Capacidad de conmutación: 128 Gbps
- Capacidades de apilamiento: altura 4H
- Características de gestión: Aruba Instant On Cloud, Navegador web, Administrador SNMP
- Voltaje de entrada: 100 - 240 VCA
- Temperatura de funcionamiento: 0-40°C, 0-10,000 pies
- Consumo de energía: Máximo: 100-127V: 60W, 200-220V: 80W. Inactivo: 100-127V: 30W, 200-220V: 40W.
- Dimensiones del producto (métricas): 35.05 x 44.25 x 4.4 cm
- Peso: 3.9 kg

Resolución de problemas y LEDs:
- LED de estado global (Verde fijo): El switch pasó la autoprueba y está encendido normalmente.
- LED de estado global (Naranja intermitente lento): Ha ocurrido un fallo o un error en la autoprueba.
- Restablecimiento del switch: Presiona y suelta el botón de reinicio para borrar errores temporales y ejecutar una autoprueba.
- Restauración de fábrica: Mantén presionado el botón de reinicio durante más de 5 segundos. El LED UID parpadeará. Esto restaura la IP predeterminada 192.168.1.1 si DHCP no está disponible.
`;