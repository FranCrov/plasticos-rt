export type NavItem = { href: string; label: string };

export const siteConfig = {
  name: "Plasticos RT",
  tagline: "Plastic raw materials, fabrics, films and caps",
  description:
    "Plasticos RT supplies polymer raw materials, plastic fabrics, films and caps to industry with reliable logistics and specialized technical support.",
  whatsappNumber: "15551234567",
  whatsappMessage:
    "Hello, I would like more information about your products and services.",
};

export const contactInfo = {
  email: "sales@plasticosrt.com",
  phone: "+54 11 5555-1234",
  address: "Av. Industrial 1234, Parque Industrial",
  city: "Buenos Aires, Argentina",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;