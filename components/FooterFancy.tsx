import React from "react";
import { Facebook, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "#" },
  { label: "HPE", href: "#" },
  { label: "Cisco", href: "#" },
  { label: "Realizar Pedido", href: "#" },
];

const supportLinks = [
  { label: "Soporte Técnico", href: "#" },
  { label: "Acerca de Nosotros", href: "#" },
];

export default function FooterFancy() {
  return (
    <footer className="mt-16 text-white">
      <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none" aria-hidden>
        <path fill="#0f7896" d="M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32V120H0Z" />
      </svg>

      <div className="bg-[#0f7896]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold">Redes Sociales</h4>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><Facebook size={18} /></a>
                <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><MessageSquare size={18} /></a>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold">Correo</h4>
                <a href="mailto:netperu100@hotmail.com" className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <Mail size={16} /> netperu100@hotmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
              <ul className="mt-3 space-y-2">{quickLinks.map(l => (<li key={l.label}><a href={l.href} className="text-white/90 hover:text-white">{l.label}</a></li>))}</ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Soporte</h4>
              <ul className="mt-3 space-y-2">{supportLinks.map(l => (<li key={l.label}><a href={l.href} className="text-white/90 hover:text-white">{l.label}</a></li>))}</ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Contacto</h4>
              <div className="mt-3 space-y-3 text-white/90">
                <div className="flex items-center gap-2"><Phone size={16} /> 533-4339 / 994-428-965</div>
                <div className="flex items-center gap-2"><Phone size={16} /> 99653-3223 / 937-514-867</div>
                <div className="flex items-center gap-2"><MapPin size={16} /> Lima, Perú</div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 text-center text-white/90">
            © {new Date().getFullYear()} DS3 Comunicaciones EIRL. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
