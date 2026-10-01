export type NavItem = { href: string; label: string };

export type DepartmentContact = { name: string; phone: string };

export type Department = {
  id: string;
  emails: string[];
  contacts?: DepartmentContact[];
};

export type MaterialGrade = { code: string; brand?: string };

export type MaterialCategory = {
  id: "amorphous" | "semicrystalline";
  grades: MaterialGrade[];
};

export type MaterialGroup = {
  id: string;
  name: string;
  range: string;
  categories: MaterialCategory[];
  chips?: string[];
};

export type Brand = {
  id: string;
  name: string;
  monogram: string;
  description: string;
};

export const materialGroups: MaterialGroup[] = [
  {
    id: "advanced",
    name: "Polímeros de ingeniería avanzados",
    range: "A partir de 230 °C",
    categories: [
      {
        id: "semicrystalline",
        grades: [{ code: "PEEK" }, { code: "PK" }],
      },
    ],
  },
  {
    id: "engineering",
    name: "Polímeros de ingeniería",
    range: "De 120 °C a 230 °C",
    categories: [
      {
        id: "amorphous",
        grades: [{ code: "PC", brand: "Infino" }],
      },
      {
        id: "semicrystalline",
        grades: [
          { code: "PPA" },
          { code: "PBT", brand: "Kepex" },
          { code: "PA 66", brand: "Domamid-DOMO" },
          { code: "PA 66", brand: "Econamid-DOMO" },
          { code: "PA 6", brand: "Domamid-DOMO" },
          { code: "PA 6", brand: "Econamid-DOMO" },
          { code: "POM", brand: "Kepital" },
        ],
      },
    ],
  },
  {
    id: "standard",
    name: "Polímeros estándar",
    range: "De 65 °C a 120 °C",
    categories: [
      {
        id: "amorphous",
        grades: [
          { code: "ABS", brand: "Starex" },
          { code: "SAN", brand: "Starex" },
          { code: "ASA", brand: "Starex" },
        ],
      },
      {
        id: "semicrystalline",
        grades: [
          { code: "PP + fibra de vidrio", brand: "Starex" },
          { code: "PP con talco", brand: "Starex" },
          { code: "PP", brand: "Petroquim" },
        ],
      },
    ],
  },
  {
    id: "specialties",
    name: "Especialidades y aditivos",
    range: "Cauchos termoplásticos y masterbatch",
    categories: [],
    chips: ["Cauchos termoplásticos", "Masterbatch"],
  },
];

export const brands: Brand[] = [
  {
    id: "domo",
    name: "DOMO",
    monogram: "DOMO",
    description:
      "Poliamidas PA 6 y PA 66 de alta resistencia mecánica y térmica.",
  },
  {
    id: "kepital",
    name: "Kepital",
    monogram: "KEPITAL",
    description: "Resinas acétalicas POM homo y copolímero de precisión.",
  },
  {
    id: "kepex",
    name: "Kepex",
    monogram: "KEPEX",
    description: "PBT de ingeniería para piezas técnicas y containers.",
  },
  {
    id: "starex",
    name: "Starex",
    monogram: "STAREX",
    description:
      "ABS, SAN, ASA y polipropileno reforzado con fibra de vidrio.",
  },
  {
    id: "infino",
    name: "Infino",
    monogram: "INFINO",
    description: "Policarbonato de alta claridad y resistencia al impacto.",
  },
  {
    id: "petroquim",
    name: "Petroquim",
    monogram: "PETROQUIM",
    description: "Grados de polipropileno para inyección y extrusión.",
  },
];

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