// Types untuk data produk
export interface ProductData {
  totalProducts: number;
  totalSold: number;
  revenue: number;
  products: Array<{
    id: number;
    name: string;
    category: string;
    price: number;
    sold: number;
    stock: number;
  }>;
}

// Types untuk data export
export interface ExportData {
  totalExports: number;
  totalValue: number;
  revenue: number;
  destinations: Array<{ country: string; percentage: number; value: number }>;
  exportInfo: {
    totalCountries: number;
    mainProducts: string[];
    certifications: string[];
    shippingPartners: string[];
    paymentMethods: string[];
  };
  exports: Array<{
    id: number;
    name: string;
    category: string;
    price: number;
    sold: number;
    stock: number;
    destinations: string[];
  }>;
}

// Types untuk data talent
export interface TalentData {
  totalTalents: number;
  certifiedTalents: number;
  revenue: number;
  talents: Array<{
    id: number;
    name: string;
    skill: string;
    level: string;
    certified: boolean;
    projects: number;
  }>;
}

// Data produk desa untuk section M
export const desaProducts: Record<string, ProductData> = {
  Bojonggede: {
    totalProducts: 156,
    totalSold: 1247,
    revenue: 18750000,
    products: [
      { id: 1, name: "Keripik Singkong", category: "Makanan", price: 15000, sold: 89, stock: 45 },
      { id: 2, name: "Batik Tulis", category: "Kerajinan", price: 250000, sold: 23, stock: 12 },
      { id: 3, name: "Madu Hutan", category: "Makanan", price: 75000, sold: 67, stock: 28 },
      { id: 4, name: "Keramik Tradisional", category: "Kerajinan", price: 120000, sold: 34, stock: 18 },
      { id: 5, name: "Kopi Arabika", category: "Minuman", price: 45000, sold: 156, stock: 67 }
    ]
  },
  Megamendung: {
    totalProducts: 98,
    totalSold: 892,
    revenue: 12430000,
    products: [
      { id: 1, name: "Sayuran Organik", category: "Makanan", price: 25000, sold: 134, stock: 56 },
      { id: 2, name: "Kerajinan Bambu", category: "Kerajinan", price: 85000, sold: 45, stock: 23 },
      { id: 3, name: "Jamur Tiram", category: "Makanan", price: 35000, sold: 78, stock: 34 },
      { id: 4, name: "Tas Anyaman", category: "Kerajinan", price: 95000, sold: 29, stock: 15 }
    ]
  },
  Cibuluh: {
    totalProducts: 87,
    totalSold: 634,
    revenue: 9875000,
    products: [
      { id: 1, name: "Ikan Segar", category: "Makanan", price: 55000, sold: 89, stock: 42 },
      { id: 2, name: "Kerupuk Ikan", category: "Makanan", price: 18000, sold: 156, stock: 78 },
      { id: 3, name: "Kerajinan Kulit", category: "Kerajinan", price: 150000, sold: 18, stock: 9 },
      { id: 4, name: "Sambal Terasi", category: "Makanan", price: 22000, sold: 67, stock: 33 }
    ]
  }
};

// Data export desa untuk section E
export const desaExports: Record<string, ExportData> = {
  Bojonggede: {
    totalExports: 89,
    totalValue: 24500000,
    revenue: 18900000,
    destinations: [
      { country: "Malaysia", percentage: 35, value: 8575000 },
      { country: "Singapura", percentage: 28, value: 6860000 },
      { country: "Thailand", percentage: 20, value: 4900000 },
      { country: "Vietnam", percentage: 12, value: 2940000 },
      { country: "Filipina", percentage: 5, value: 1225000 }
    ],
    exportInfo: {
      totalCountries: 15,
      mainProducts: ["Batik Tulis", "Keramik Tradisional", "Madu Hutan Organik"],
      certifications: ["Halal", "Organic", "Fair Trade"],
      shippingPartners: ["DHL", "FedEx", "TNT", "JNE International"],
      paymentMethods: ["Bank Transfer", "PayPal", "Alibaba Trade Assurance"]
    },
    exports: [
      { id: 1, name: "Batik Tulis", category: "Kerajinan", price: 450000, sold: 45, stock: 23, destinations: ["Malaysia", "Singapura", "Thailand"] },
      { id: 2, name: "Keramik Tradisional", category: "Kerajinan", price: 320000, sold: 28, stock: 15, destinations: ["Malaysia", "Vietnam", "Filipina"] },
      { id: 3, name: "Madu Hutan Organik", category: "Makanan", price: 125000, sold: 67, stock: 34, destinations: ["Singapura", "Thailand", "Malaysia"] },
      { id: 4, name: "Kopi Arabika Premium", category: "Minuman", price: 85000, sold: 89, stock: 45, destinations: ["Thailand", "Vietnam", "Filipina"] },
      { id: 5, name: "Keripik Singkong Export", category: "Makanan", price: 25000, sold: 156, stock: 78, destinations: ["Malaysia", "Singapura", "Thailand"] }
    ]
  },
  Megamendung: {
    totalExports: 67,
    totalValue: 18900000,
    revenue: 15600000,
    destinations: [
      { country: "Jepang", percentage: 40, value: 7560000 },
      { country: "Korea Selatan", percentage: 30, value: 5670000 },
      { country: "Taiwan", percentage: 20, value: 3780000 },
      { country: "Hong Kong", percentage: 10, value: 1890000 }
    ],
    exportInfo: {
      totalCountries: 12,
      mainProducts: ["Sayuran Organik", "Kerajinan Bambu", "Jamur Tiram Premium"],
      certifications: ["Organic", "ISO 22000", "HACCP"],
      shippingPartners: ["DHL", "FedEx", "EMS", "Pos Indonesia"],
      paymentMethods: ["Bank Transfer", "PayPal", "Alibaba Trade Assurance", "Letter of Credit"]
    },
    exports: [
      { id: 1, name: "Sayuran Organik", category: "Makanan", price: 45000, sold: 89, stock: 45, destinations: ["Jepang", "Korea Selatan", "Taiwan"] },
      { id: 2, name: "Kerajinan Bambu", category: "Kerajinan", price: 180000, sold: 34, stock: 18, destinations: ["Jepang", "Hong Kong", "Taiwan"] },
      { id: 3, name: "Jamur Tiram Premium", category: "Makanan", price: 65000, sold: 56, stock: 28, destinations: ["Korea Selatan", "Taiwan", "Hong Kong"] },
      { id: 4, name: "Tas Anyaman Tradisional", category: "Kerajinan", price: 220000, sold: 23, stock: 12, destinations: ["Jepang", "Korea Selatan", "Taiwan"] }
    ]
  },
  Cibuluh: {
    totalExports: 54,
    totalValue: 15600000,
    revenue: 12800000,
    destinations: [
      { country: "Australia", percentage: 35, value: 5460000 },
      { country: "Selandia Baru", percentage: 25, value: 3900000 },
      { country: "Kanada", percentage: 20, value: 3120000 },
      { country: "Amerika Serikat", percentage: 20, value: 3120000 }
    ],
    exportInfo: {
      totalCountries: 8,
      mainProducts: ["Ikan Segar Premium", "Kerupuk Ikan Export", "Kerajinan Kulit Premium"],
      certifications: ["HACCP", "ISO 22000", "FDA Approved"],
      shippingPartners: ["DHL", "FedEx", "UPS", "TNT"],
      paymentMethods: ["Bank Transfer", "PayPal", "Alibaba Trade Assurance", "Western Union"]
    },
    exports: [
      { id: 1, name: "Ikan Segar Premium", category: "Makanan", price: 95000, sold: 67, stock: 34, destinations: ["Australia", "Selandia Baru", "Kanada"] },
      { id: 2, name: "Kerupuk Ikan Export", category: "Makanan", price: 35000, sold: 89, stock: 45, destinations: ["Amerika Serikat", "Australia", "Selandia Baru"] },
      { id: 3, name: "Kerajinan Kulit Premium", category: "Kerajinan", price: 280000, sold: 18, stock: 9, destinations: ["Kanada", "Amerika Serikat", "Australia"] },
      { id: 4, name: "Sambal Terasi Export", category: "Makanan", price: 45000, sold: 45, stock: 23, destinations: ["Selandia Baru", "Kanada", "Amerika Serikat"] }
    ]
  }
};

// Data talent desa untuk section T
export const desaTalents: Record<string, TalentData> = {
  Bojonggede: {
    totalTalents: 45,
    certifiedTalents: 38,
    revenue: 12500000,
    talents: [
      { id: 1, name: "Ahmad Suryadi", skill: "Web Development", level: "Expert", certified: true, projects: 12 },
      { id: 2, name: "Siti Nurhaliza", skill: "Digital Marketing", level: "Advanced", certified: true, projects: 8 },
      { id: 3, name: "Budi Santoso", skill: "Data Analysis", level: "Intermediate", certified: false, projects: 5 },
      { id: 4, name: "Rina Wulandari", skill: "UI/UX Design", level: "Expert", certified: true, projects: 15 },
      { id: 5, name: "Dedi Kurniawan", skill: "Mobile Development", level: "Advanced", certified: true, projects: 10 }
    ]
  },
  Megamendung: {
    totalTalents: 32,
    certifiedTalents: 28,
    revenue: 9800000,
    talents: [
      { id: 1, name: "Eko Prasetyo", skill: "Cloud Computing", level: "Expert", certified: true, projects: 9 },
      { id: 2, name: "Maya Sari", skill: "Graphic Design", level: "Advanced", certified: true, projects: 7 },
      { id: 3, name: "Agus Wijaya", skill: "Network Security", level: "Intermediate", certified: false, projects: 4 },
      { id: 4, name: "Lina Putri", skill: "Content Creation", level: "Expert", certified: true, projects: 11 }
    ]
  },
  Cibuluh: {
    totalTalents: 28,
    certifiedTalents: 22,
    revenue: 7600000,
    talents: [
      { id: 1, name: "Rudi Hartono", skill: "Database Management", level: "Expert", certified: true, projects: 6 },
      { id: 2, name: "Sari Indah", skill: "Social Media Marketing", level: "Advanced", certified: true, projects: 9 },
      { id: 3, name: "Joko Susilo", skill: "Video Editing", level: "Intermediate", certified: false, projects: 3 },
      { id: 4, name: "Dewi Lestari", skill: "E-commerce Management", level: "Expert", certified: true, projects: 8 }
    ]
  }
};
