export type NavItem = { href: string; label: string };

export const siteConfig = {
  name: "Plasticos RT",
  tagline: "Materia prima plástica",
  description:
    "Plasticos RT distribuye polímeros y resinas plásticas de alta calidad con logística confiable y asesoramiento técnico especializado para la industria.",
  whatsappNumber: "15551234567",
  whatsappMessage:
    "Hola, me gustaría recibir más información sobre sus productos y servicios.",
};

export const contactInfo = {
  email: "ventas@plasticosrt.com",
  phone: "+54 11 5555-1234",
  address: "Av. Industrial 1234, Parque Industrial",
  city: "Buenos Aires, Argentina",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/materiales", label: "Materiales" },
  { href: "/productos", label: "Productos" },
  { href: "/informacion", label: "Información" },
  { href: "/contacto", label: "Contacto" },
];

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;