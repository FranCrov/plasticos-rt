export type TemperatureRow = {
  material: string;
  feed: string;
  zones: string;
  nozzle: string;
  melt: string;
  mold: string;
  drying: string;
};

export const temperatureRows: TemperatureRow[] = [
  {
    material: "Polypropylene Petroquim",
    feed: "160 °C",
    zones: "180–210 °C",
    nozzle: "210 °C",
    melt: "210 °C",
    mold: "20–60 °C",
    drying: "—",
  },
  {
    material: "ASA Starex",
    feed: "230 °C",
    zones: "230–250 °C",
    nozzle: "250 °C",
    melt: "250 °C",
    mold: "50–80 °C",
    drying: "2 h at 100 °C",
  },
  {
    material: "SAN Starex",
    feed: "190 °C",
    zones: "190–210 °C",
    nozzle: "210 °C",
    melt: "200 °C",
    mold: "40–80 °C",
    drying: "40–80 °C",
  },
  {
    material: "ABS Starex",
    feed: "160 °C",
    zones: "160–210 °C",
    nozzle: "230 °C",
    melt: "230 °C",
    mold: "40–80 °C",
    drying: "2–4 h at 80 °C",
  },
  {
    material: "Polycarbonate Infino",
    feed: "250 °C",
    zones: "250–300 °C",
    nozzle: "280–310 °C",
    melt: "290 °C",
    mold: "80–110 °C",
    drying: "5–6 h at 100 °C",
  },
  {
    material: "PA6 Domamid",
    feed: "60–80 °C",
    zones: "220–280 °C",
    nozzle: "240–280 °C",
    melt: "240–280 °C",
    mold: "60–80 °C",
    drying: "2–4 h at 75–85 °C",
  },
  {
    material: "PA66 Domamid",
    feed: "60–80 °C",
    zones: "250–290 °C",
    nozzle: "260–290 °C",
    melt: "270–290 °C",
    mold: "40–80 °C",
    drying: "2–4 h at 75–85 °C",
  },
  {
    material: "PA6 Econamid",
    feed: "60–80 °C",
    zones: "210–260 °C",
    nozzle: "220–260 °C",
    melt: "230–260 °C",
    mold: "60–80 °C",
    drying: "2–4 h at 75–85 °C",
  },
  {
    material: "POM Copolymer Kepital",
    feed: "160 °C",
    zones: "170–200 °C",
    nozzle: "180–210 °C",
    melt: "210 °C",
    mold: "60–80 °C",
    drying: "3–4 h at 80–100 °C",
  },
  {
    material: "PBT Kepex",
    feed: "160 °C",
    zones: "230–240 °C",
    nozzle: "250 °C",
    melt: "230–250 °C",
    mold: "70–90 °C",
    drying: "3–5 h at 120–130 °C",
  },
  {
    material: "PPA",
    feed: "60–90 °C",
    zones: "320–350 °C",
    nozzle: "330–350 °C",
    melt: "330–350 °C",
    mold: "120–160 °C",
    drying: "4 h at 120 °C",
  },
  {
    material: "PK",
    feed: "60–80 °C",
    zones: "220–250 °C",
    nozzle: "230–250 °C",
    melt: "230–250 °C",
    mold: "60–120 °C",
    drying: "4 h at 80 °C",
  },
  {
    material: "PEEK",
    feed: "60–80 °C",
    zones: "350–380 °C",
    nozzle: "390 °C",
    melt: "370–390 °C",
    mold: "160–200 °C",
    drying: "2–3 h at 150–160 °C",
  },
];