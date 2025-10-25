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
    totalExports: 45,
    totalValue: 125000,
    revenue: 87500,
    destinations: [
      { country: "Malaysia", percentage: 35, value: 43750 },
      { country: "Singapore", percentage: 25, value: 31250 },
      { country: "Thailand", percentage: 20, value: 25000 },
      { country: "Vietnam", percentage: 20, value: 25000 }
    ],
    exportInfo: {
      totalCountries: 8,
      mainProducts: ["Keripik Singkong", "Batik Tulis", "Madu Hutan", "Keramik Tradisional"],
      certifications: ["Halal", "ISO 9001", "SNI"],
      shippingPartners: ["JNE", "TIKI", "Pos Indonesia", "FedEx"],
      paymentMethods: ["Bank Transfer", "PayPal", "Wise", "Western Union"]
    },
    exports: [
      { id: 1, name: "Keripik Singkong Export", category: "Makanan", price: 25, sold: 89, stock: 45, destinations: ["Malaysia", "Singapore"] },
      { id: 2, name: "Batik Tulis Export", category: "Kerajinan", price: 150, sold: 23, stock: 12, destinations: ["Thailand", "Vietnam"] },
      { id: 3, name: "Madu Hutan Export", category: "Makanan", price: 45, sold: 67, stock: 28, destinations: ["Malaysia", "Singapore"] },
      { id: 4, name: "Keramik Tradisional Export", category: "Kerajinan", price: 75, sold: 34, stock: 18, destinations: ["Thailand", "Vietnam"] }
    ]
  },
  Megamendung: {
    totalExports: 32,
    totalValue: 89000,
    revenue: 62300,
    destinations: [
      { country: "Malaysia", percentage: 40, value: 35600 },
      { country: "Singapore", percentage: 30, value: 26700 },
      { country: "Thailand", percentage: 20, value: 17800 },
      { country: "Vietnam", percentage: 10, value: 8900 }
    ],
    exportInfo: {
      totalCountries: 6,
      mainProducts: ["Sayuran Organik", "Kerajinan Bambu", "Jamur Tiram", "Tas Anyaman"],
      certifications: ["Organic", "ISO 9001", "SNI"],
      shippingPartners: ["JNE", "TIKI", "Pos Indonesia"],
      paymentMethods: ["Bank Transfer", "PayPal", "Wise"]
    },
    exports: [
      { id: 1, name: "Sayuran Organik Export", category: "Makanan", price: 35, sold: 134, stock: 56, destinations: ["Malaysia", "Singapore"] },
      { id: 2, name: "Kerajinan Bambu Export", category: "Kerajinan", price: 120, sold: 45, stock: 23, destinations: ["Thailand", "Vietnam"] },
      { id: 3, name: "Jamur Tiram Export", category: "Makanan", price: 50, sold: 78, stock: 34, destinations: ["Malaysia", "Singapore"] },
      { id: 4, name: "Tas Anyaman Export", category: "Kerajinan", price: 135, sold: 29, stock: 15, destinations: ["Thailand", "Vietnam"] }
    ]
  },
  Cibuluh: {
    totalExports: 28,
    totalValue: 67000,
    revenue: 46900,
    destinations: [
      { country: "Malaysia", percentage: 45, value: 30150 },
      { country: "Singapore", percentage: 25, value: 16750 },
      { country: "Thailand", percentage: 20, value: 13400 },
      { country: "Vietnam", percentage: 10, value: 6700 }
    ],
    exportInfo: {
      totalCountries: 5,
      mainProducts: ["Ikan Segar", "Kerupuk Ikan", "Kerajinan Kulit", "Sambal Terasi"],
      certifications: ["Halal", "ISO 9001", "SNI"],
      shippingPartners: ["JNE", "TIKI", "Pos Indonesia"],
      paymentMethods: ["Bank Transfer", "PayPal", "Wise"]
    },
    exports: [
      { id: 1, name: "Ikan Segar Export", category: "Makanan", price: 80, sold: 89, stock: 42, destinations: ["Malaysia", "Singapore"] },
      { id: 2, name: "Kerupuk Ikan Export", category: "Makanan", price: 25, sold: 156, stock: 78, destinations: ["Thailand", "Vietnam"] },
      { id: 3, name: "Kerajinan Kulit Export", category: "Kerajinan", price: 200, sold: 18, stock: 9, destinations: ["Malaysia", "Singapore"] },
      { id: 4, name: "Sambal Terasi Export", category: "Makanan", price: 30, sold: 67, stock: 33, destinations: ["Thailand", "Vietnam"] }
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
    totalTalents: 38,
    certifiedTalents: 32,
    revenue: 9800000,
    talents: [
      { id: 1, name: "H. Suryadi", skill: "Web Development", level: "Expert", certified: true, projects: 10 },
      { id: 2, name: "Rina Sari", skill: "Digital Marketing", level: "Advanced", certified: true, projects: 7 },
      { id: 3, name: "Ahmad Wijaya", skill: "Data Analysis", level: "Intermediate", certified: false, projects: 4 },
      { id: 4, name: "Siti Nurhaliza", skill: "UI/UX Design", level: "Expert", certified: true, projects: 12 }
    ]
  },
  Cibuluh: {
    totalTalents: 32,
    certifiedTalents: 28,
    revenue: 8200000,
    talents: [
      { id: 1, name: "H. Dedi Kurniawan", skill: "Web Development", level: "Expert", certified: true, projects: 8 },
      { id: 2, name: "Siti Nurhaliza", skill: "Digital Marketing", level: "Advanced", certified: true, projects: 6 },
      { id: 3, name: "Ahmad Wijaya", skill: "Data Analysis", level: "Intermediate", certified: false, projects: 3 },
      { id: 4, name: "Budi Santoso", skill: "UI/UX Design", level: "Expert", certified: true, projects: 9 }
    ]
  }
};
