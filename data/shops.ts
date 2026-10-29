export const serviceOptions = [
  "Screen print",
  "Digital print",
  "Fabric print",
  "Garment print",
  "Large format",
  "Binding"
] as const;

export type Service = (typeof serviceOptions)[number];

export type Shop = {
  slug: string;
  name: string;
  city: string;
  area: string;
  image: string;
  imageAlt: string;
  services: Service[];
  summary: string;
  detail: string;
  turnaround: string;
  minimum: string;
  featured?: boolean;
};

export const shops: Shop[] = [
  {
    slug: "river-road-screen-studio",
    name: "River Road Screen Studio",
    city: "Nairobi",
    area: "River Road",
    image: "/images/screen-printer.jpg",
    imageAlt: "Screen print operator checking a frame in a working studio",
    services: ["Screen print", "Garment print", "Fabric print"],
    summary: "Small-run garment and fabric screen printing for community groups and local labels.",
    detail: "A sample profile showing how a local screen printing studio can describe mesh options, ink choices and garment handling before a customer visits.",
    turnaround: "Confirm before ordering",
    minimum: "Ask the shop",
    featured: true
  },
  {
    slug: "koinange-digital-works",
    name: "Koinange Digital Works",
    city: "Nairobi",
    area: "CBD",
    image: "/images/press-quality.jpg",
    imageAlt: "Print operator checking the quality of a small-format print",
    services: ["Digital print", "Binding", "Large format"],
    summary: "Short documents, learning packs, presentation boards and finishing services.",
    detail: "A sample listing for a digital shop that checks colour, paper weight and finishing requirements before production.",
    turnaround: "Confirm before ordering",
    minimum: "Single copies may be possible",
    featured: true
  },
  {
    slug: "industrial-area-garment-print",
    name: "Industrial Area Garment Print",
    city: "Nairobi",
    area: "Industrial Area",
    image: "/images/garment-workshop.jpg",
    imageAlt: "Fashion designer arranging fabric in a garment workshop",
    services: ["Garment print", "Screen print", "Digital print"],
    summary: "Garment marking and small event runs with artwork checks before production.",
    detail: "A sample profile illustrating garment print questions such as fabric composition, placement, sizing and wash care.",
    turnaround: "Confirm before ordering",
    minimum: "Depends on print method"
  },
  {
    slug: "nyali-fabric-house",
    name: "Nyali Fabric House",
    city: "Mombasa",
    area: "Nyali",
    image: "/images/fabric-shop-cotonou.jpg",
    imageAlt: "Fabric seller arranging bright African print textiles",
    services: ["Fabric print", "Garment print"],
    summary: "Fabric-led projects for makers, events and small fashion runs.",
    detail: "A sample directory entry for discussing base cloth, repeat size, colour references and care instructions directly with a workshop.",
    turnaround: "Confirm before ordering",
    minimum: "Ask about sample lengths",
    featured: true
  },
  {
    slug: "kisumu-lake-print-room",
    name: "Kisumu Lake Print Room",
    city: "Kisumu",
    area: "Milimani",
    image: "/images/press-operator.jpg",
    imageAlt: "Printer operating a traditional press in a bright workshop",
    services: ["Digital print", "Binding", "Screen print"],
    summary: "Booklets, school materials and hand-finished community editions.",
    detail: "A sample listing for a small workshop handling education materials, cards and carefully finished print runs.",
    turnaround: "Confirm before ordering",
    minimum: "Single proofs encouraged"
  },
  {
    slug: "nakuru-sign-and-sheet",
    name: "Nakuru Sign & Sheet",
    city: "Nakuru",
    area: "Biashara Centre",
    image: "/images/nairobi-customer.jpg",
    imageAlt: "Customer in a patterned shirt in an urban Kenyan setting",
    services: ["Large format", "Digital print"],
    summary: "Posters, signs and display sheets with practical file checks.",
    detail: "A sample profile showing the information a large-format supplier needs, including final size, viewing distance, substrate and installation plan.",
    turnaround: "Confirm before ordering",
    minimum: "One display may be possible"
  },
  {
    slug: "eldoret-copy-and-bind",
    name: "Eldoret Copy & Bind",
    city: "Eldoret",
    area: "Uganda Road",
    image: "/images/fabric-portrait.jpg",
    imageAlt: "Portrait framed by a blue African print textile",
    services: ["Binding", "Digital print"],
    summary: "Education packs, reports, manuals and simple document finishing.",
    detail: "A sample listing focused on page order, margins, paper choice and binding methods for clear, durable documents.",
    turnaround: "Confirm before ordering",
    minimum: "Single documents welcomed"
  },
  {
    slug: "kampala-community-press",
    name: "Kampala Community Press",
    city: "Kampala",
    area: "Central Division",
    image: "/images/fabric-stacks.jpg",
    imageAlt: "Neat stacks of bold African print fabrics",
    services: ["Fabric print", "Screen print", "Binding"],
    summary: "Community editions, textile projects and practical finishing advice.",
    detail: "A sample cross-city profile to demonstrate how the directory can grow while keeping contact and production decisions with each independent shop.",
    turnaround: "Confirm before ordering",
    minimum: "Varies by service"
  }
];

export const cities = ["All cities", ...Array.from(new Set(shops.map((shop) => shop.city)))];

export function getShop(slug: string) {
  return shops.find((shop) => shop.slug === slug);
}
