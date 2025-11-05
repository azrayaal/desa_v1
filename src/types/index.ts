// Types untuk Issue/Priority
export interface Issue {
  name: string;
  value: number;
  color: string;
}

// Types untuk Top People
export interface TopPerson {
  no: number;
  people: string;
  total: number;
}

// Types untuk Sentiment
export interface Sentiment {
  positive: number;
  neutral: number;
  negative: number;
}

// Types untuk Article
export interface Article {
  source: string;
  title: string;
  time: string;
}

// Types untuk data desa
export interface DesaData {
  name: string;
  lat: number;
  lng: number;
  population: number;
  area: string;
  leader: string;
  achievements: string[];
  issues: Issue[];
  sentiment: Sentiment;
  topPeople: TopPerson[];
  articles: Article[];
}

// Types untuk Meta Data
export interface MetaData {
  name: string;
  issues: Issue[];
  topPeople: TopPerson[];
  sentiment: Sentiment;
  articles: Article[];
}

// Types untuk Product
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  sold: number;
  stock: number;
}

// Types untuk data produk
export interface ProductData {
  totalProducts: number;
  totalSold: number;
  revenue: number;
  products: Product[];
}

// Types untuk Export Destination
export interface ExportDestination {
  country: string;
  percentage: number;
  value: number;
}

// Types untuk Export Info
export interface ExportInfo {
  totalCountries: number;
  mainProducts: string[];
  certifications: string[];
  shippingPartners: string[];
  paymentMethods: string[];
}

// Types untuk Export Item
export interface ExportItem {
  id: number;
  name: string;
  category: string;
  price: number;
  sold: number;
  stock: number;
  destinations: string[];
}

// Types untuk data export
export interface ExportData {
  totalExports: number;
  totalValue: number;
  revenue: number;
  destinations: ExportDestination[];
  exportInfo: ExportInfo;
  exports: ExportItem[];
}

// Types untuk Talent
export interface Talent {
  id: number;
  name: string;
  skill: string;
  level: string;
  certified: boolean;
  projects: number;
}

// Types untuk data talent
export interface TalentData {
  totalTalents: number;
  certifiedTalents: number;
  revenue: number;
  talents: Talent[];
}

