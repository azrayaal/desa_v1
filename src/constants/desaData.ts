// Types untuk data desa
export interface DesaData {
  name: string;
  population: number;
  area: string;
  leader: string;
  lat: number;
  lng: number;
  achievements: string[];
  issues: Array<{ name: string; value: number; color: string }>;
  topPeople: Array<{ name: string; people: number; total: number }>;
  sentiment: { positive: number; neutral: number; negative: number };
  articles: Array<{ title: string; source: string; time: string }>;
  wordCloud: string[];
}

// Data desa
export const desaData: Record<string, DesaData> = {
  Bojonggede: {
    name: "Bojonggede",
    population: 3850,
    area: "12.2 km²",
    leader: "H. Ahmad Wijaya",
    lat: -6.5,
    lng: 106.8,
    achievements: ["Desa Mandiri 2024", "Desa Digital 2023", "Desa Sehat 2022"],
    issues: [
      { name: "Infrastruktur", value: 35, color: "#3B82F6" },
      { name: "Ekonomi", value: 25, color: "#10B981" },
      { name: "Kesehatan", value: 20, color: "#F59E0B" },
      { name: "Pendidikan", value: 20, color: "#EF4444" }
    ],
    topPeople: [
      { name: "H. Ahmad Wijaya", people: 1200, total: 3850 },
      { name: "Budi Santoso", people: 800, total: 3850 },
      { name: "Siti Nurhaliza", people: 600, total: 3850 },
      { name: "Dedi Kurniawan", people: 400, total: 3850 }
    ],
    sentiment: { positive: 4200, neutral: 1800, negative: 500 },
    articles: [
      { title: "Pembangunan Jembatan Baru di Desa Bojonggede", source: "Bogor Today", time: "2 jam lalu" },
      { title: "Program Digitalisasi Desa Bojonggede", source: "Jawa Pos", time: "4 jam lalu" },
      { title: "Festival Budaya Desa Bojonggede 2024", source: "Kompas", time: "6 jam lalu" }
    ],
    wordCloud: ["pembangunan", "infrastruktur", "digital", "ekonomi", "kesehatan", "pendidikan", "masyarakat", "desa", "bojonggede", "bogor", "jawa", "barat", "indonesia", "pemerintah", "program", "kesejahteraan", "inovasi", "teknologi", "modern", "tradisional", "budaya", "wisata", "homestay", "agrowisata", "kuliner", "tradisional", "modern", "akses", "transportasi", "komunikasi", "digital", "inovasi"]
  },
  Megamendung: {
    name: "Megamendung",
    population: 4200,
    area: "15.8 km²",
    leader: "H. Suryadi",
    lat: -6.6,
    lng: 106.9,
    achievements: ["Desa Wisata 2024", "Desa Hijau 2023", "Desa Mandiri 2022"],
    issues: [
      { name: "Infrastruktur", value: 30, color: "#3B82F6" },
      { name: "Ekonomi", value: 30, color: "#10B981" },
      { name: "Kesehatan", value: 25, color: "#F59E0B" },
      { name: "Pendidikan", value: 15, color: "#EF4444" }
    ],
    topPeople: [
      { name: "H. Suryadi", people: 1300, total: 4200 },
      { name: "Rina Sari", people: 900, total: 4200 },
      { name: "Ahmad Wijaya", people: 700, total: 4200 },
      { name: "Siti Nurhaliza", people: 500, total: 4200 }
    ],
    sentiment: { positive: 3800, neutral: 2000, negative: 600 },
    articles: [
      { title: "Pengembangan Wisata Alam Megamendung", source: "Bogor Today", time: "1 jam lalu" },
      { title: "Program Konservasi Lingkungan Megamendung", source: "Jawa Pos", time: "3 jam lalu" },
      { title: "Festival Budaya Megamendung 2024", source: "Kompas", time: "5 jam lalu" }
    ],
    wordCloud: ["wisata", "alam", "konservasi", "lingkungan", "budaya", "festival", "pembangunan", "infrastruktur", "digital", "ekonomi", "kesehatan", "pendidikan", "masyarakat", "desa", "megamendung", "bogor", "jawa", "barat", "indonesia", "pemerintah", "program", "kesejahteraan", "inovasi", "teknologi", "modern", "tradisional", "budaya", "wisata", "homestay", "agrowisata", "kuliner", "tradisional", "modern", "akses", "transportasi", "komunikasi", "digital", "inovasi"]
  },
  Cibuluh: {
    name: "Cibuluh",
    population: 3200,
    area: "10.5 km²",
    leader: "H. Dedi Kurniawan",
    lat: -6.4,
    lng: 106.7,
    achievements: ["Desa Sehat 2024", "Desa Digital 2023", "Desa Mandiri 2022"],
    issues: [
      { name: "Infrastruktur", value: 40, color: "#3B82F6" },
      { name: "Ekonomi", value: 20, color: "#10B981" },
      { name: "Kesehatan", value: 25, color: "#F59E0B" },
      { name: "Pendidikan", value: 15, color: "#EF4444" }
    ],
    topPeople: [
      { name: "H. Dedi Kurniawan", people: 1000, total: 3200 },
      { name: "Siti Nurhaliza", people: 800, total: 3200 },
      { name: "Ahmad Wijaya", people: 600, total: 3200 },
      { name: "Budi Santoso", people: 400, total: 3200 }
    ],
    sentiment: { positive: 3000, neutral: 1500, negative: 400 },
    articles: [
      { title: "Pembangunan Infrastruktur Desa Cibuluh", source: "Bogor Today", time: "3 jam lalu" },
      { title: "Program Kesehatan Masyarakat Cibuluh", source: "Jawa Pos", time: "5 jam lalu" },
      { title: "Festival Budaya Cibuluh 2024", source: "Kompas", time: "7 jam lalu" }
    ],
    wordCloud: ["infrastruktur", "kesehatan", "masyarakat", "pembangunan", "program", "budaya", "festival", "digital", "ekonomi", "pendidikan", "desa", "cibuluh", "bogor", "jawa", "barat", "indonesia", "pemerintah", "kesejahteraan", "inovasi", "teknologi", "modern", "tradisional", "budaya", "wisata", "homestay", "agrowisata", "kuliner", "tradisional", "modern", "akses", "transportasi", "komunikasi", "digital", "inovasi"]
  }
};

// Data META
export const metaData = {
  M: {
    name: "Marketplace",
    icon: "🛒",
    issues: [
      { name: "Makanan", value: 40, color: "#10B981" },
      { name: "Kerajinan", value: 30, color: "#3B82F6" },
      { name: "Tekstil", value: 20, color: "#F59E0B" },
      { name: "Lainnya", value: 10, color: "#EF4444" }
    ],
    topPeople: [
      { name: "Toko Sari", people: 1200, total: 3850 },
      { name: "Warung Makan", people: 800, total: 3850 },
      { name: "Kerajinan Tangan", people: 600, total: 3850 },
      { name: "Batik Tradisional", people: 400, total: 3850 }
    ],
    sentiment: { positive: 3500, neutral: 2000, negative: 500 },
    articles: [
      { title: "Produk Lokal Desa Bojonggede Laris di Marketplace", source: "Bogor Today", time: "1 jam lalu" },
      { title: "Peningkatan Penjualan Online Desa Bojonggede", source: "Jawa Pos", time: "3 jam lalu" },
      { title: "Festival Produk Lokal Desa Bojonggede", source: "Kompas", time: "5 jam lalu" }
    ]
  },
  E: {
    name: "Export",
    icon: "🌍",
    issues: [
      { name: "Makanan", value: 35, color: "#10B981" },
      { name: "Kerajinan", value: 25, color: "#3B82F6" },
      { name: "Tekstil", value: 20, color: "#F59E0B" },
      { name: "Pertanian", value: 20, color: "#EF4444" }
    ],
    topPeople: [
      { name: "Export Makanan", people: 1000, total: 3850 },
      { name: "Export Kerajinan", people: 800, total: 3850 },
      { name: "Export Tekstil", people: 600, total: 3850 },
      { name: "Export Pertanian", people: 400, total: 3850 }
    ],
    sentiment: { positive: 3000, neutral: 1500, negative: 400 },
    articles: [
      { title: "Export Produk Desa Bojonggede ke Luar Negeri", source: "Bogor Today", time: "2 jam lalu" },
      { title: "Peningkatan Export Desa Bojonggede", source: "Jawa Pos", time: "4 jam lalu" },
      { title: "Festival Export Desa Bojonggede", source: "Kompas", time: "6 jam lalu" }
    ]
  },
  T: {
    name: "Talent",
    icon: "👥",
    issues: [
      { name: "Web Development", value: 30, color: "#3B82F6" },
      { name: "Digital Marketing", value: 25, color: "#10B981" },
      { name: "Data Analysis", value: 20, color: "#F59E0B" },
      { name: "UI/UX Design", value: 25, color: "#EF4444" }
    ],
    topPeople: [
      { name: "Web Developer", people: 800, total: 3850 },
      { name: "Digital Marketer", people: 600, total: 3850 },
      { name: "Data Analyst", people: 400, total: 3850 },
      { name: "UI/UX Designer", people: 300, total: 3850 }
    ],
    sentiment: { positive: 2500, neutral: 1000, negative: 200 },
    articles: [
      { title: "Talent Desa Bojonggede Berkembang di Bidang IT", source: "Bogor Today", time: "3 jam lalu" },
      { title: "Program Pelatihan IT Desa Bojonggede", source: "Jawa Pos", time: "5 jam lalu" },
      { title: "Festival IT Desa Bojonggede", source: "Kompas", time: "7 jam lalu" }
    ]
  },
  A: {
    name: "Art",
    icon: "🎨",
    issues: [
      { name: "Seni Tradisional", value: 40, color: "#10B981" },
      { name: "Seni Modern", value: 30, color: "#3B82F6" },
      { name: "Seni Digital", value: 20, color: "#F59E0B" },
      { name: "Seni Lainnya", value: 10, color: "#EF4444" }
    ],
    topPeople: [
      { name: "Seniman Tradisional", people: 1000, total: 3850 },
      { name: "Seniman Modern", people: 800, total: 3850 },
      { name: "Seniman Digital", people: 600, total: 3850 },
      { name: "Seniman Lainnya", people: 400, total: 3850 }
    ],
    sentiment: { positive: 2800, neutral: 1200, negative: 300 },
    articles: [
      { title: "Seni Tradisional Desa Bojonggede Mendunia", source: "Bogor Today", time: "4 jam lalu" },
      { title: "Festival Seni Desa Bojonggede", source: "Jawa Pos", time: "6 jam lalu" },
      { title: "Pameran Seni Desa Bojonggede", source: "Kompas", time: "8 jam lalu" }
    ]
  }
};
