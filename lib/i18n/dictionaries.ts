

const en = {
  nav: {
    home: "Home",
    about: "About",
    materials: "Materials",
    products: "Products",
    information: "Information",
    contact: "Contact",
  },
  meta: {
    home: {
      title: "Plastic raw materials, fabrics, films and caps",
      description:
        "Plasticos RT distributes polymer raw materials, plastic fabrics, films and caps nationwide and internationally.",
    },
    about: {
      title: "About us",
      description:
        "Who we are at Plasticos RT: commitment to quality, service and technical proximity with the industry.",
    },
    materials: {
      title: "Materials",
      description:
        "Catalogs of polymer raw materials with processing temperature parameters for every grade.",
    },
    products: {
      title: "Products",
      description:
        "Plastic raw materials, woven plastic fabrics, films and caps for every industry.",
    },
    information: {
      title: "Technical information",
      description:
        "Technical data, logistics and quality certifications that support every shipment.",
    },
    contact: {
      title: "Contact",
      description:
        "Contact form and location of Plasticos RT. Write to us with any inquiry.",
    },
  },
  footer: {
    description:
      "Plasticos RT supplies plastic raw materials, plastic fabrics, films and caps to industry and trade across the country and abroad.",
    sections: "Sections",
    contact: "Contact",
    departments: "Departments",
    rights: "All rights reserved.",
  },
  departments: {
    sales: "Sales",
    administration: "Administration",
    technical: "Technical service",
    purchasing: "Purchasing",
    logistics: "Logistics",
  },
  home: {
    explore: "Explore",
    hero: {
      ctas: [
        { href: "/materials", label: "View materials", primary: true },
        { href: "/contact", label: "Request a quote", primary: false },
      ],
      slides: [
        {
          image: "/hero/pellets.svg",
          alt: "Polymer pellets",
          eyebrow: "Raw materials",
          title: "Polymer feedstock for every process",
          description:
            "Injection, blow molding, extrusion and thermoforming grades with consistent quality lot after lot.",
        },
        {
          image: "/hero/film.svg",
          alt: "Plastic film rolls",
          eyebrow: "Films and sheets",
          title: "Films for packaging and industry",
          description:
            "Sheets, rolls and laminated films for packaging, agriculture and protection.",
        },
        {
          image: "/hero/fabric.svg",
          alt: "Woven plastic fabric",
          eyebrow: "Plastic fabrics",
          title: "Woven plastic fabrics",
          description:
            "Covers, tarpaulins and industrial fabrics built for demanding conditions.",
        },
        {
          image: "/hero/caps.svg",
          alt: "Molded caps",
          eyebrow: "Caps and closures",
          title: "Precision caps and closures",
          description:
            "Injection-molded caps and closures for beverage and packaging lines.",
        },
      ],
    },
    coverage: {
      eyebrow: "Distribution",
      title: "National and international distribution",
      description:
        "We deliver across the whole country and export to international markets, backed by stock, logistics and complete documentation.",
      national: {
        title: "Nationwide coverage",
        description:
          "Distribution reaches every province through a reliable network.",
        points: [
          "Strategic stock in central warehouse",
          "Scheduled and express deliveries",
          "Dedicated logistics coordination",
        ],
      },
      international: {
        title: "International exports",
        description:
          "We supply markets abroad with full export support.",
        points: [
          "Export and customs documentation",
          "Port and border logistics",
          "Technical support in export markets",
        ],
      },
    },
    features: [
      {
        href: "/materials",
        title: "Materials catalog",
        description:
          "Polymers, fabrics, films and caps with technical parameters for each grade.",
      },
      {
        href: "/products",
        title: "Applications",
        description:
          "Final products for packaging, construction, agriculture and industry.",
      },
      {
        href: "/information",
        title: "Technical information",
        description:
          "Process data, logistics and quality certifications behind every shipment.",
      },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Who we are",
    description:
      "A company dedicated to supplying plastic raw materials, focused on quality, service and proximity with the industry.",
    sectionTitle: "Committed to the plastics industry",
    paragraph1:
      "Since our beginnings we have supported manufacturers of packaging, components and plastic products with selected materials and real technical service. We know every stage of your process and work so your production never stops.",
    paragraph2:
      "Our supply network lets us respond quickly to demands of any scale, keeping strategic stock and stable prices.",
    stats: [
      { value: "20+", label: "Years of experience" },
      { value: "350+", label: "Active customers" },
      { value: "15k", label: "Tons per year" },
      { value: "24/7", label: "Customer service" },
    ],
    values: [
      {
        title: "Mission",
        description:
          "Supply top-quality plastic raw materials, guaranteeing availability, traceability and competitive pricing for our customers.",
      },
      {
        title: "Vision",
        description:
          "To be the reference supplier in the regional plastics industry, recognized for reliability, innovation and service.",
      },
      {
        title: "Values",
        description:
          "Commitment, transparency and technical closeness in every operation, to build long-term relationships.",
      },
    ],
    teamTitle: "The people behind Plasticos RT",
    teamNote:
      "Reserved space for team photos. Replace each box with an image in the public folder.",
    teamPhoto: "Team photo",
    team: [
      { name: "General Management", role: "Leadership and strategy" },
      { name: "Commercial Management", role: "Sales and customer service" },
      { name: "Logistics Coordination", role: "Delivery and supply" },
      { name: "Technical Advisory", role: "Support and specifications" },
    ],
  },
  materials: {
    eyebrow: "Materials",
    title: "Raw materials",
    description:
      "A complete catalog of polymers and resins selected for quality and consistency, lot after lot.",
    items: [
      {
        name: "Polyethylene (PE)",
        description:
          "High and low density, ideal for film, blow molding and injection with a strong price-performance balance.",
        uses: ["Film", "Blow molding", "Injection"],
      },
      {
        name: "Polypropylene (PP)",
        description:
          "Outstanding rigidity and chemical resistance for packaging, textiles and technical parts.",
        uses: ["Packaging", "Textiles", "Automotive"],
      },
      {
        name: "PVC",
        description:
          "Versatile material for pipes, profiles and coatings with long service life.",
        uses: ["Pipes", "Profiles", "Construction"],
      },
      {
        name: "PET",
        description:
          "Transparency and food safety for bottles and containers.",
        uses: ["Bottles", "Packaging"],
      },
      {
        name: "Polystyrene (PS)",
        description:
          "Rigidity and easy processing for thermoforming and packaging.",
        uses: ["Thermoforming", "Packaging"],
      },
      {
        name: "ABS",
        description:
          "Excellent impact resistance and surface finish for visible parts.",
        uses: ["Appliances", "Electronics"],
      },
    ],
    temperature: {
      eyebrow: "Processing",
      title: "Temperature parameters",
      description:
        "Reference processing temperatures for our plastic raw materials: feeding section, barrel zones, nozzle, melt, mold and drying time.",
      columns: {
        material: "Material",
        feed: "Feed section",
        zones: "Zones 1–4",
        nozzle: "Nozzle",
        melt: "Melt temperature",
        mold: "Mold temperature",
        drying: "Drying time",
      },
      note: "Reference values provided by the manufacturer. Always confirm with the corresponding technical data sheet.",
    },
    requestInfo: "Request information",
    ctaTitle: "Need a specific grade?",
    ctaDescription:
      "Tell us the material and quantity you need and our team will respond with availability and pricing.",
    ctaButton: "Request a quote",
  },
  products: {
    eyebrow: "Products",
    title: "Final applications",
    description:
      "The four product lines we distribute and the industries that depend on them every day.",
    categories: [
      {
        name: "Raw plastic materials",
        description:
          "Polymer feedstock for injection, blow molding, extrusion and thermoforming.",
        applications: ["Injection", "Blow molding", "Extrusion"],
      },
      {
        name: "Plastic fabrics",
        description:
          "Woven and laminated fabrics for tarpaulins, protection and industrial covers.",
        applications: ["Tarpaulins", "Covers", "Protection"],
      },
      {
        name: "Films and sheets",
        description:
          "Rolls, sheets and laminated films for packaging, agriculture and industry.",
        applications: ["Packaging", "Agriculture", "Lamination"],
      },
      {
        name: "Caps and closures",
        description:
          "Injection-molded caps and closures for bottles, containers and dosing systems.",
        applications: ["Beverages", "Containers", "Dosing"],
      },
    ],
  },
  information: {
    eyebrow: "Information",
    title: "Technical and logistics information",
    description:
      "Everything you need to operate with safety, quality and continuity.",
    sections: [
      {
        title: "Technical information",
        description:
          "Technical data sheets for every polymer and grade: density, processing temperatures and recommended applications. Our team supports you in selecting the right material for each process.",
        items: ["Material data sheets", "Selection guidance", "On-site support"],
      },
      {
        title: "Logistics",
        description:
          "Scheduled deliveries and urgent dispatches nationwide, plus export and customs support for international orders.",
        items: [
          "Permanent stock",
          "Nationwide scheduled deliveries",
          "Export and customs support",
        ],
      },
      {
        title: "Certifications",
        description:
          "Raw materials with full traceability and quality certifications that back every delivered lot.",
        items: [
          "Lot traceability",
          "Quality standards",
          "Food-grade grades available",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    description:
      "Fill in the form or write to us directly. We answer every request.",
    form: {
      fields: [
        { id: "name", type: "text", label: "Name", placeholder: "Your name" },
        {
          id: "email",
          type: "email",
          label: "Email",
          placeholder: "you@email.com",
        },
        {
          id: "company",
          type: "text",
          label: "Company",
          placeholder: "Company name",
        },
        {
          id: "message",
          type: "textarea",
          label: "Message",
          placeholder: "Tell us what you need...",
        },
      ],
      submit: "Send message",
      note: "Sample form: connect it to your email or CRM service.",
    },
    info: {
      title: "Contact details",
      email: "Email",
      phone: "Phone",
      location: "Location",
      hours: {
        title: "Business hours",
        weekdays: "Monday to Thursday, 8 AM - 5 PM",
        friday: "Friday, 8 AM - 4 PM",
      },
    },
    map: {
      title: "Location map",
      directions: "Get directions",
    },
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist.",
    home: "Back to home",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Nosotros",
    materials: "Materiales",
    products: "Productos",
    information: "Información",
    contact: "Contacto",
  },
  meta: {
    home: {
      title: "Materia prima plástica, telas, películas y tapas",
      description:
        "Plasticos RT distribuye materia prima plástica, telas plásticas, películas y tapas en todo el país y a nivel internacional.",
    },
    about: {
      title: "Sobre nosotros",
      description:
        "Quiénes somos en Plasticos RT: compromiso con la calidad, el servicio y la cercanía técnica con la industria.",
    },
    materials: {
      title: "Materiales",
      description:
        "Catálogo de materias primas plásticas con parámetros de temperatura de proceso para cada grado.",
    },
    products: {
      title: "Productos",
      description:
        "Materias primas plásticas, telas plásticas, películas y tapas para cada industria.",
    },
    information: {
      title: "Información técnica",
      description:
        "Información técnica, logística y certificaciones de calidad que respaldan cada despacho.",
    },
    contact: {
      title: "Contacto",
      description:
        "Formulario de contacto y ubicación de Plasticos RT. Escríbanos por cualquier consulta.",
    },
  },
  footer: {
    description:
      "Plasticos RT provee materia prima plástica, telas plásticas, películas y tapas a la industria y el comercio en todo el país y el exterior.",
    sections: "Secciones",
    contact: "Contacto",
    departments: "Departamentos",
    rights: "Todos los derechos reservados.",
  },
  departments: {
    sales: "Ventas",
    administration: "Administración",
    technical: "Servicio técnico",
    purchasing: "Compras",
    logistics: "Logística",
  },
  home: {
    explore: "Explorar",
    hero: {
      ctas: [
        { href: "/materials", label: "Ver materiales", primary: true },
        { href: "/contact", label: "Solicitar cotización", primary: false },
      ],
      slides: [
        {
          image: "/hero/pellets.svg",
          alt: "Pellets de polímero",
          eyebrow: "Materia prima",
          title: "Materia prima para cada proceso",
          description:
            "Grados para inyección, soplado, extrusión y termoformado con calidad consistente lote a lote.",
        },
        {
          image: "/hero/film.svg",
          alt: "Rollos de película plástica",
          eyebrow: "Películas y láminas",
          title: "Películas para envase e industria",
          description:
            "Láminas, rollos y películas laminadas para envase, agricultura y protección.",
        },
        {
          image: "/hero/fabric.svg",
          alt: "Tela plástica tejida",
          eyebrow: "Telas plásticas",
          title: "Telas plásticas tejidas",
          description:
            "Lonas, carpas y telas industriales pensadas para condiciones exigentes.",
        },
        {
          image: "/hero/caps.svg",
          alt: "Tapas moldeadas",
          eyebrow: "Tapas y cierres",
          title: "Tapas y cierres de precisión",
          description:
            "Tapas y cierres moldeados por inyección para líneas de bebidas y envases.",
        },
      ],
    },
    coverage: {
      eyebrow: "Distribución",
      title: "Distribución nacional e internacional",
      description:
        "Entregamos en todo el país y exportamos a mercados internacionales, respaldados por stock, logística y documentación completa.",
      national: {
        title: "Cobertura en todo el país",
        description:
          "La distribución llega a cada provincia a través de una red confiable.",
        points: [
          "Stock estratégico en depósito central",
          "Entregas programadas y express",
          "Coordinación logística dedicada",
        ],
      },
      international: {
        title: "Exportación internacional",
        description:
          "Abastecemos mercados del exterior con soporte integral de exportación.",
        points: [
          "Documentación de exportación y aduana",
          "Logística portuaria y de frontera",
          "Soporte técnico en mercados de exportación",
        ],
      },
    },
    features: [
      {
        href: "/materials",
        title: "Catálogo de materiales",
        description:
          "Polímeros, telas, películas y tapas con parámetros técnicos para cada grado.",
      },
      {
        href: "/products",
        title: "Aplicaciones",
        description:
          "Productos finales para envase, construcción, agricultura e industria.",
      },
      {
        href: "/information",
        title: "Información técnica",
        description:
          "Datos de proceso, logística y certificaciones de calidad detrás de cada despacho.",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    title: "Quiénes somos",
    description:
      "Una empresa dedicada a la provisión de materia prima plástica, con foco en calidad, servicio y cercanía con la industria.",
    sectionTitle: "Comprometidos con la industria plástica",
    paragraph1:
      "Desde nuestros inicios acompañamos a fabricantes de envases, componentes y productos plásticos con materiales seleccionados y un servicio técnico real. Conocemos cada etapa de su proceso y trabajamos para que su producción nunca se detenga.",
    paragraph2:
      "Nuestra red de abastecimiento nos permite responder con rapidez a demandas de cualquier escala, manteniendo stock estratégico y precios estables.",
    stats: [
      { value: "20+", label: "Años de experiencia" },
      { value: "350+", label: "Clientes activos" },
      { value: "15k", label: "Toneladas al año" },
      { value: "24/7", label: "Atención al cliente" },
    ],
    values: [
      {
        title: "Misión",
        description:
          "Proveer materia prima plástica de primera calidad, garantizando disponibilidad, trazabilidad y precio competitivo para nuestros clientes.",
      },
      {
        title: "Visión",
        description:
          "Ser el proveedor de referencia en la industria plástica regional, reconocido por confiabilidad, innovación y servicio.",
      },
      {
        title: "Valores",
        description:
          "Compromiso, transparencia y cercanía técnica en cada operación, para construir relaciones de largo plazo.",
      },
    ],
    teamTitle: "Las personas detrás de Plasticos RT",
    teamNote:
      "Espacio reservado para fotografías del equipo. Reemplaza cada contenedor por una imagen en la carpeta pública.",
    teamPhoto: "Foto del equipo",
    team: [
      { name: "Dirección General", role: "Liderazgo y estrategia" },
      { name: "Gerencia Comercial", role: "Ventas y atención a clientes" },
      { name: "Coordinación Logística", role: "Entregas y abastecimiento" },
      { name: "Asesoría Técnica", role: "Soporte y especificaciones" },
    ],
  },
  materials: {
    eyebrow: "Materiales",
    title: "Materias primas",
    description:
      "Un catálogo completo de polímeros y resinas seleccionados por calidad y consistencia lote a lote.",
    items: [
      {
        name: "Polietileno (PE)",
        description:
          "Alta y baja densidad, ideal para film, soplado e inyección con buen balance de precio y desempeño.",
        uses: ["Film", "Soplado", "Inyección"],
      },
      {
        name: "Polipropileno (PP)",
        description:
          "Rigidez y resistencia química destacadas para envase, textiles y piezas técnicas.",
        uses: ["Envase", "Textiles", "Automoción"],
      },
      {
        name: "PVC",
        description:
          "Material versátil para tuberías, perfiles y recubrimientos de larga vida útil.",
        uses: ["Tuberías", "Perfiles", "Construcción"],
      },
      {
        name: "PET",
        description:
          "Transparencia y seguridad alimentaria para botellas y envases.",
        uses: ["Botellas", "Envase"],
      },
      {
        name: "Poliestireno (PS)",
        description:
          "Rigidez y facilidad de procesamiento para termoformado y embalaje.",
        uses: ["Termoformado", "Embalaje"],
      },
      {
        name: "ABS",
        description:
          "Excelente resistencia al impacto y acabado superficial para piezas visibles.",
        uses: ["Electrodomésticos", "Electrónica"],
      },
    ],
    temperature: {
      eyebrow: "Procesamiento",
      title: "Parámetros de temperatura",
      description:
        "Temperaturas de proceso de referencia para nuestras materias primas plásticas: sección de alimentación, zonas de cañón, boquilla, masa, molde y tiempo de secado.",
      columns: {
        material: "Material",
        feed: "Sección de alimentación",
        zones: "Zona 1–4",
        nozzle: "Temperatura de boquilla",
        melt: "Temperatura de la masa",
        mold: "Temperatura del molde",
        drying: "Tiempo de secado",
      },
      note: "Valores de referencia provistos por el fabricante. Confirme siempre con la ficha técnica correspondiente.",
    },
    requestInfo: "Solicitar información",
    ctaTitle: "¿Necesita un grado específico?",
    ctaDescription:
      "Cuéntenos el material y la cantidad que necesita y nuestro equipo responderá con disponibilidad y precios.",
    ctaButton: "Solicitar cotización",
  },
  products: {
    eyebrow: "Productos",
    title: "Aplicaciones finales",
    description:
      "Las cuatro líneas de productos que distribuimos y las industrias que dependen de ellas cada día.",
    categories: [
      {
        name: "Materias primas plásticas",
        description:
          "Polímeros para inyección, soplado, extrusión y termoformado.",
        applications: ["Inyección", "Soplado", "Extrusión"],
      },
      {
        name: "Telas plásticas",
        description:
          "Telas tejidas y laminadas para lonas, carpas y coberturas industriales.",
        applications: ["Lonas", "Coberturas", "Protección"],
      },
      {
        name: "Películas y láminas",
        description:
          "Rollos, láminas y películas laminadas para envase, agricultura e industria.",
        applications: ["Envase", "Agricultura", "Laminado"],
      },
      {
        name: "Tapas y cierres",
        description:
          "Tapas y cierres moldeados por inyección para botellas, contenedores y dosificadores.",
        applications: ["Bebidas", "Contenedores", "Dosificación"],
      },
    ],
  },
  information: {
    eyebrow: "Información",
    title: "Información técnica y logística",
    description:
      "Todo lo que necesita para operar con seguridad, calidad y continuidad.",
    sections: [
      {
        title: "Información técnica",
        description:
          "Fichas técnicas de cada polímero y grado: densidad, temperaturas de proceso y aplicaciones recomendadas. Nuestro equipo asesora en la selección del material correcto para cada proceso.",
        items: ["Fichas técnicas por material", "Asesoría de selección", "Soporte en planta"],
      },
      {
        title: "Logística",
        description:
          "Entregas programadas y despachos urgentes en todo el país, más soporte de exportación y aduana para pedidos internacionales.",
        items: [
          "Stock permanente",
          "Entregas programadas en todo el país",
          "Soporte de exportación y aduana",
        ],
      },
      {
        title: "Certificaciones",
        description:
          "Materias primas con trazabilidad total y certificaciones de calidad que respaldan cada lote entregado.",
        items: [
          "Trazabilidad de lote",
          "Normas de calidad",
          "Grado alimenticio disponible",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    description:
      "Complete el formulario o escríbanos directamente. Respondemos todas las consultas.",
    form: {
      fields: [
        { id: "name", type: "text", label: "Nombre", placeholder: "Su nombre" },
        {
          id: "email",
          type: "email",
          label: "Email",
          placeholder: "su@email.com",
        },
        {
          id: "company",
          type: "text",
          label: "Empresa",
          placeholder: "Nombre de la empresa",
        },
        {
          id: "message",
          type: "textarea",
          label: "Mensaje",
          placeholder: "Cuéntenos qué necesita...",
        },
      ],
      submit: "Enviar mensaje",
      note: "Formulario de ejemplo: conéctelo a su servicio de email o CRM.",
    },
    info: {
      title: "Datos de contacto",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      hours: {
        title: "Horarios",
        weekdays: "Lunes a Jueves, 8 a 17 hs",
        friday: "Viernes, 8 a 16 hs",
      },
    },
    map: {
      title: "Mapa de ubicación",
      directions: "Cómo llegar",
    },
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que busca no existe.",
    home: "Volver al inicio",
  },
};

export function getDictionary(lang: string): Dictionary {
  return lang === "es" ? es : en;
}