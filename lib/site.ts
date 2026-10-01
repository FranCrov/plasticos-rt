export type NavItem = { href: string; label: string };

export type DepartmentContact = { name: string; phone: string };

export type Department = {
  id: string;
  emails: string[];
  contacts?: DepartmentContact[];
};

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
  email: "info@plasticosrt.com.ar",
  phone: "+54 341 462-6885",
  address: "Av. Battle y Ordóñez 5061",
  city: "Rosario, Santa Fe, Argentina",
  latitude: -33.0102629,
  longitude: -60.6910865,
  mapZoom: 17,
};

const coordinates = `${contactInfo.latitude},${contactInfo.longitude}`;

export const mapsEmbedUrl = (lang: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    coordinates,
  )}&hl=${encodeURIComponent(lang)}&z=${contactInfo.mapZoom}&output=embed`;

export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    coordinates,
  )}`;

export const telHref = (phone: string) => `tel:${phone.replace(/\D/g, "")}`;

export const departments: Department[] = [
  {
    id: "sales",
    emails: [
      "ventas@plasticosrt.com.ar",
      "federico@plasticosrt.com.ar",
      "marilina@plasticosrt.com.ar",
    ],
    contacts: [
      { name: "Federico Tahan", phone: "+54 341 306-9195" },
      { name: "Marilina Muñoz", phone: "+54 341 253-6888" },
    ],
  },
  {
    id: "administration",
    emails: [
      "administracion@plasticosrt.com.ar",
      "facturacion@plasticosrt.com.ar",
      "contaduria@plasticosrt.com.ar",
    ],
  },
  {
    id: "technical",
    emails: ["asesoria@plasticosrt.com.ar"],
  },
  {
    id: "purchasing",
    emails: ["compras@plasticosrt.com.ar"],
  },
  {
    id: "logistics",
    emails: ["logistica@plasticosrt.com.ar"],
  },
];

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;