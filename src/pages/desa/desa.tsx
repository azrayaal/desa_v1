
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { LuRefreshCw } from "react-icons/lu";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Data desa di Jawa Barat
const desaData = {
  "Bojonggede": {
    name: "Desa Bojonggede",
    lat: -6.5632,
    lng: 106.794,
    population: 3850,
    area: "12.2 km²",
    leader: "Ibu Siti Rohmah",
    achievements: ["Desa Mandiri 2024", "Pasar Terbaik", "Infrastruktur Terbaik"],
    issues: [
      { name: "Pembangunan Jalan Desa", value: 28.5, color: "#3B82F6" },
      { name: "Program UMKM Desa", value: 22.3, color: "#EC4899" },
      { name: "Fasilitas Kesehatan", value: 18.7, color: "#8B5CF6" },
      { name: "Pasar Tradisional", value: 12.4, color: "#10B981" },
      { name: "Pendidikan Anak", value: 8.9, color: "#EF4444" },
      { name: "Pengelolaan Sampah", value: 4.2, color: "#F59E0B" },
      { name: "Irigasi Pertanian", value: 3.8, color: "#84CC16" },
      { name: "Wisata Desa", value: 1.2, color: "#06B6D4" },
    ],
    sentiment: { positive: 4200, neutral: 1800, negative: 500 },
    topPeople: [
      { no: 1, people: "Kepala Desa Bojonggede", total: 45 },
      { no: 2, people: "Ketua BPD", total: 32 },
      { no: 3, people: "Ketua RW", total: 28 },
      { no: 4, people: "Ketua RT", total: 25 },
      { no: 5, people: "Sekretaris Desa", total: 18 },
    ],
    articles: [
      {
        source: "DesaBojonggede.id",
        title: "Pembangunan Jalan Desa Bojonggede Capai 85% - Masyarakat Antusias Menyambut",
        time: "14:30 PM"
      },
      {
        source: "BogorNews.com", 
        title: "Desa Bojonggede Raih Penghargaan Desa Mandiri 2024 - Program UMKM Berhasil Tingkatkan Ekonomi Warga",
        time: "13:15 PM"
      },
      {
        source: "JawaBarat.id",
        title: "Fasilitas Kesehatan Desa Bojonggede Diperluas - Posyandu dan Puskesmas Pembantu Beroperasi 24 Jam",
        time: "12:45 PM"
      }
    ]
  },
  "Megamendung": {
    name: "Desa Megamendung",
    lat: -6.6814,
    lng: 106.957,
    population: 4250,
    area: "18.5 km²",
    leader: "Bapak Asep Saepudin",
    achievements: ["Juara Desa Wisata 2023", "Penghargaan Lingkungan Hijau", "UMKM Kreatif Terbaik"],
    issues: [
      { name: "Wisata Alam", value: 35.2, color: "#3B82F6" },
      { name: "Pertanian Organik", value: 28.1, color: "#EC4899" },
      { name: "Ekowisata", value: 18.5, color: "#8B5CF6" },
      { name: "Homestay", value: 12.3, color: "#10B981" },
      { name: "Konservasi Alam", value: 5.9, color: "#EF4444" },
    ],
    sentiment: { positive: 3800, neutral: 1200, negative: 300 },
    topPeople: [
      { no: 1, people: "Kepala Desa Megamendung", total: 52 },
      { no: 2, people: "Ketua BPD", total: 38 },
      { no: 3, people: "Ketua RW", total: 31 },
      { no: 4, people: "Ketua RT", total: 28 },
      { no: 5, people: "Sekretaris Desa", total: 22 },
    ],
    articles: [
      {
        source: "MegamendungWisata.id",
        title: "Desa Megamendung Jadi Destinasi Wisata Favorit - Kunjungan Meningkat 40%",
        time: "15:20 PM"
      },
      {
        source: "BogorUpdate.com",
        title: "Program Pertanian Organik Desa Megamendung Sukses - Hasil Panen Meningkat 60%",
        time: "14:45 PM"
      }
    ]
  },
  "Cibuluh": {
    name: "Desa Cibuluh",
    lat: -6.6123,
    lng: 106.823,
    population: 3150,
    area: "15.8 km²",
    leader: "Bapak Dedi Mulyadi",
    achievements: ["Sekolah Berprestasi", "Desa Pendidikan", "Pengelolaan Sampah Terbaik"],
    issues: [
      { name: "Pendidikan Berkualitas", value: 32.4, color: "#3B82F6" },
      { name: "Perpustakaan Desa", value: 25.8, color: "#EC4899" },
      { name: "Pelatihan Komputer", value: 20.1, color: "#8B5CF6" },
      { name: "Beasiswa", value: 15.2, color: "#10B981" },
      { name: "Pengelolaan Sampah", value: 6.5, color: "#EF4444" },
    ],
    sentiment: { positive: 3600, neutral: 1400, negative: 400 },
    topPeople: [
      { no: 1, people: "Kepala Desa Cibuluh", total: 48 },
      { no: 2, people: "Ketua BPD", total: 35 },
      { no: 3, people: "Ketua RW", total: 29 },
      { no: 4, people: "Ketua RT", total: 26 },
      { no: 5, people: "Sekretaris Desa", total: 20 },
    ],
    articles: [
      {
        source: "CibuluhEdu.id",
        title: "Desa Cibuluh Raih Penghargaan Desa Pendidikan - Fasilitas Sekolah Terlengkap",
        time: "16:10 PM"
      },
      {
        source: "BogorNews.com",
        title: "Program Beasiswa Desa Cibuluh Berhasil - 50 Anak Berprestasi Mendapat Bantuan",
        time: "15:30 PM"
      }
    ]
  }
};


const wordCloudData = [
  "bojonggede", "desa", "masyarakat", "pembangunan", "ekonomi", 
  "kesehatan", "pendidikan", "infrastruktur", "umkm", "pertanian", 
  "pasar", "jalan", "irigasi", "sampah", "wisata", 
  "kepala", "bpd", "rw", "rt", "warga", 
  "mandiri", "sejahtera", "maju", "bersih", "hijau",
  "homestay", "agrowisata", "kuliner", "tradisional", "modern",
  "akses", "transportasi", "komunikasi", "digital", "inovasi"
];



export default function DesaDashboard() {
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedDesa, setSelectedDesa] = useState("Bojonggede");
  const [activeMeta, setActiveMeta] = useState("desa"); // "desa" as default active

  // Data produk desa untuk section M
  const desaProducts = {
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

  // Data talent desa untuk section T
  const desaTalents = {
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

  // Data export desa untuk section E
  const desaExports = {
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

  // Data untuk META (berbeda dari dataset desa)
  const metaData = {
    M: {
      name: "Marketplace",
      issues: [
        { name: "Produk UMKM", value: 35.2, color: "#3B82F6" },
        { name: "E-commerce", value: 28.1, color: "#EC4899" },
        { name: "Digital Payment", value: 18.5, color: "#8B5CF6" },
        { name: "Logistics", value: 12.3, color: "#10B981" },
        { name: "Marketing", value: 5.9, color: "#EF4444" },
      ],
      topPeople: [
        { no: 1, people: "Shopify Indonesia", total: 85 },
        { no: 2, people: "Tokopedia", total: 72 },
        { no: 3, people: "Shopee", total: 68 },
        { no: 4, people: "Lazada", total: 45 },
        { no: 5, people: "Bukalapak", total: 38 },
      ],
      sentiment: { positive: 5200, neutral: 2100, negative: 700 },
      articles: [
        {
          source: "MarketplaceNews.id",
          title: "Shopify Indonesia Meluncurkan Fitur Baru untuk UMKM - Transaksi Meningkat 40%",
          time: "15:30 PM"
        },
        {
          source: "EcommerceUpdate.com",
          title: "Tokopedia dan Shopee Bersaing Ketat di Pasar E-commerce Indonesia",
          time: "14:45 PM"
        }
      ]
    },
    E: {
      name: "Export",
      issues: [
        { name: "Komoditas Ekspor", value: 42.3, color: "#3B82F6" },
        { name: "Perdagangan Internasional", value: 25.8, color: "#EC4899" },
        { name: "Supply Chain", value: 18.2, color: "#8B5CF6" },
        { name: "Regulasi Ekspor", value: 10.1, color: "#10B981" },
        { name: "Market Access", value: 3.6, color: "#EF4444" },
      ],
      topPeople: [
        { no: 1, people: "Alibaba Group", total: 95 },
        { no: 2, people: "Amazon Global", total: 78 },
        { no: 3, people: "eBay International", total: 65 },
        { no: 4, people: "Global Trade", total: 52 },
        { no: 5, people: "Export Hub", total: 38 },
      ],
      sentiment: { positive: 4800, neutral: 1900, negative: 600 },
      articles: [
        {
          source: "ExportNews.id",
          title: "Indonesia Ekspor Komoditas ke 50 Negara - Nilai Ekspor Meningkat 25%",
          time: "16:15 PM"
        },
        {
          source: "GlobalTrade.com",
          title: "Alibaba Buka Pusat Logistik Baru di Jakarta untuk Ekspor UMKM",
          time: "15:20 PM"
        }
      ]
    },
    T: {
      name: "Talent",
      issues: [
        { name: "Sertifikasi IT", value: 38.5, color: "#3B82F6" },
        { name: "Digital Skills", value: 28.9, color: "#EC4899" },
        { name: "Professional Development", value: 20.3, color: "#8B5CF6" },
        { name: "Career Growth", value: 8.7, color: "#10B981" },
        { name: "Training Programs", value: 3.6, color: "#EF4444" },
      ],
      topPeople: [
        { no: 1, people: "NIKICI Certification", total: 88 },
        { no: 2, people: "Google Cloud", total: 75 },
        { no: 3, people: "Microsoft Azure", total: 68 },
        { no: 4, people: "AWS Training", total: 55 },
        { no: 5, people: "Cisco Academy", total: 42 },
      ],
      sentiment: { positive: 4600, neutral: 1800, negative: 500 },
      articles: [
        {
          source: "TalentNews.id",
          title: "NIKICI Sertifikasi 1000+ Profesional IT - Tingkat Penyerapan Kerja 85%",
          time: "17:00 PM"
        },
        {
          source: "TechTraining.com",
          title: "Google Cloud dan Microsoft Azure Bersaing di Pasar Sertifikasi IT Indonesia",
          time: "16:30 PM"
        }
      ]
    },
    A: {
      name: "Art",
      issues: [
        { name: "Digital Art", value: 32.4, color: "#3B82F6" },
        { name: "Social Media", value: 28.1, color: "#EC4899" },
        { name: "Creative Content", value: 22.3, color: "#8B5CF6" },
        { name: "Cultural Heritage", value: 12.8, color: "#10B981" },
        { name: "Art Technology", value: 4.4, color: "#EF4444" },
      ],
      topPeople: [
        { no: 1, people: "Saraga Technology", total: 92 },
        { no: 2, people: "Instagram Art", total: 78 },
        { no: 3, people: "TikTok Creative", total: 65 },
        { no: 4, people: "YouTube Art", total: 58 },
        { no: 5, people: "Pinterest Design", total: 45 },
      ],
      sentiment: { positive: 5100, neutral: 2000, negative: 400 },
      articles: [
        {
          source: "ArtNews.id",
          title: "Saraga Technology Luncurkan Platform Seni Digital - 500+ Artis Bergabung",
          time: "18:00 PM"
        },
        {
          source: "CreativeMedia.com",
          title: "Instagram dan TikTok Jadi Platform Favorit Seniman Digital Indonesia",
          time: "17:30 PM"
        }
      ]
    }
  };

  // Get current data based on activeMeta
  const currentDesa = desaData[selectedDesa as keyof typeof desaData];
  const currentMeta = activeMeta !== "desa" ? metaData[activeMeta as keyof typeof metaData] : null;
  const currentProducts = activeMeta === "M" ? desaProducts[selectedDesa as keyof typeof desaProducts] : null;
  const currentExports = activeMeta === "E" ? desaExports[selectedDesa as keyof typeof desaExports] : null;
  const currentTalents = activeMeta === "T" ? desaTalents[selectedDesa as keyof typeof desaTalents] : null;
  
  // Use META data if activeMeta is not "desa", otherwise use desa data
  const issuesData = activeMeta !== "desa" ? currentMeta!.issues : currentDesa.issues;
  const topPeopleData = activeMeta !== "desa" ? currentMeta!.topPeople : currentDesa.topPeople;
  const sentimentData = activeMeta !== "desa" ? [
    { sentiment: "positive", value: currentMeta!.sentiment.positive, color: "#10B981" },
    { sentiment: "neutral", value: currentMeta!.sentiment.neutral, color: "#3B82F6" },
    { sentiment: "negative", value: currentMeta!.sentiment.negative, color: "#EF4444" },
  ] : [
    { sentiment: "positive", value: currentDesa.sentiment.positive, color: "#10B981" },
    { sentiment: "neutral", value: currentDesa.sentiment.neutral, color: "#3B82F6" },
    { sentiment: "negative", value: currentDesa.sentiment.negative, color: "#EF4444" },
  ];
  const recentArticles = activeMeta !== "desa" ? currentMeta!.articles : currentDesa.articles;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
  <div className="relative flex items-center justify-between">
    {/* Left Text */}
    <div className="text-sm text-gray-300">
      📍 {currentDesa.name}, Kab. Bogor, Jawa Barat
    </div>

    {/* Centered Logo */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <img
        src="/images/garuda.png"
        alt="Desa Icon"
        className="w-8 h-8"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="text-xl font-bold text-white ml-2">
        {activeMeta === "desa"
          ? `Dashboard ${currentDesa.name}`
          : `Dashboard ${currentMeta?.name}`}
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-4">
      

      <div className="flex items-center gap-2">
        {activeMeta === "desa" && (
          <select
            value={selectedDesa}
            onChange={(e) => setSelectedDesa(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
          >
            <option value="Bojonggede">Desa Bojonggede</option>
            <option value="Megamendung">Desa Megamendung</option>
            <option value="Cibuluh">Desa Cibuluh</option>
          </select>
        )}

        <select
          value={selectedIssue}
          onChange={(e) => setSelectedIssue(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
        >
          <option value="All Issues">Semua Aspek</option>
          <option value="Infrastruktur">Infrastruktur</option>
          <option value="Ekonomi">Ekonomi</option>
          <option value="Kesehatan">Kesehatan</option>
          <option value="Pendidikan">Pendidikan</option>
        </select>

        <button className="px-4 py-2 text-sm text-white">
          <LuRefreshCw />
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Logout
        </button>
      </div>
    </div>
  </div>
</div>



      {/* META Navigation */}
      <div className="flex mt-6 border-t-2 border-x-2 border-gray-700 rounded-t-lg mx-6 overflow-hidden">
        <div
          onClick={() => setActiveMeta("desa")}
          className={`flex-1 flex justify-center items-center border-r border-gray-700 cursor-pointer transition h-16 ${
            activeMeta === "desa"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
      <div className="flex items-center gap-2">
  <img
    src="/images/desaicon.png"
    alt="Desa Icon"
    className="w-6 h-6 filter invert brightness-200"
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
  <span className="text-sm font-medium">Dashboard</span>
</div>

        </div>
        
        <div
          onClick={() => setActiveMeta("M")}
          className={`flex-1 flex justify-center items-center border-r border-gray-700 cursor-pointer transition h-16 ${
            activeMeta === "M"
              ? "bg-orange-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="text-sm font-medium">Marketplace</div>
        </div>
        
        <div
          onClick={() => setActiveMeta("E")}
          className={`flex-1 flex justify-center items-center border-r border-gray-700 cursor-pointer transition h-16 ${
            activeMeta === "E"
              ? "bg-green-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="text-sm font-medium">Export</div>
        </div>
        
        <div
          onClick={() => setActiveMeta("T")}
          className={`flex-1 flex justify-center items-center border-r border-gray-700 cursor-pointer transition h-16 ${
            activeMeta === "T"
              ? "bg-purple-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="text-sm font-medium">Talent</div>
        </div>
        
        <div
          onClick={() => setActiveMeta("A")}
          className={`flex-1 flex justify-center items-center cursor-pointer transition h-16 ${
            activeMeta === "A"
              ? "bg-pink-600 text-white"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="text-sm font-medium">Art</div>
        </div>
      </div>




      {/* Main Content */}
      <div className="flex h-full mx-6 mb-6 border-2 border-gray-700 rounded-b-lg ">
        {/* Left Column - Aspek Desa */}
        <div className="flex-1 p-6 border-r border-gray-700">
          <div className="text-xl font-bold mb-6 text-white">
            {activeMeta === "desa" ? "Aspek Pembangunan Desa" : `${currentMeta?.name} Analytics`}
          </div>
          
          
          {/* Data Produk untuk section M - Kiri */}
          {activeMeta === "M" && currentProducts && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Analisis Produk Desa {currentDesa.name}</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentProducts.totalProducts}</div>
                  <div className="text-sm text-gray-300">Total Produk</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentProducts.totalSold}</div>
                  <div className="text-sm text-gray-300">Terjual</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">Rp {currentProducts.revenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Pendapatan</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">No</th>
                      <th className="text-left py-2">Nama Produk</th>
                      <th className="text-left py-2">Kategori</th>
                      <th className="text-left py-2">Harga</th>
                      <th className="text-left py-2">Terjual</th>
                      <th className="text-left py-2">Stok</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentProducts.products.map((product: any) => (
                      <tr key={product.id} className="border-b border-gray-700">
                        <td className="py-2">{product.id}</td>
                        <td className="py-2">{product.name}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-gray-600 rounded text-xs">{product.category}</span>
                        </td>
                        <td className="py-2">Rp {product.price.toLocaleString()}</td>
                        <td className="py-2 text-green-400">{product.sold}</td>
                        <td className="py-2 text-yellow-400">{product.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Data Talent untuk section T - Kiri */}
          {activeMeta === "T" && currentTalents && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Analisis Talent Desa {currentDesa.name}</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{currentTalents.totalTalents}</div>
                  <div className="text-sm text-gray-300">Total Talent</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{currentTalents.certifiedTalents}</div>
                  <div className="text-sm text-gray-300">Bersertifikat</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">Rp {currentTalents.revenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Pendapatan</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">No</th>
                      <th className="text-left py-2">Nama Talent</th>
                      <th className="text-left py-2">Skill</th>
                      <th className="text-left py-2">Level</th>
                      <th className="text-left py-2">Sertifikat</th>
                      <th className="text-left py-2">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTalents.talents.map((talent: any) => (
                      <tr key={talent.id} className="border-b border-gray-700">
                        <td className="py-2">{talent.id}</td>
                        <td className="py-2">{talent.name}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-gray-600 rounded text-xs">{talent.skill}</span>
                        </td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            talent.level === 'Expert' ? 'bg-purple-600 text-white' :
                            talent.level === 'Advanced' ? 'bg-blue-600 text-white' :
                            'bg-gray-600 text-gray-300'
                          }`}>
                            {talent.level}
                          </span>
                        </td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            talent.certified ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {talent.certified ? 'Ya' : 'Tidak'}
                          </span>
                        </td>
                        <td className="py-2 text-purple-400">{talent.projects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Export Category untuk section E - Kiri */}
          {activeMeta === "E" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Export Category</h3>
              <select 
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All Issues">All Issues</option>
                <option value="Makanan">Makanan</option>
                <option value="Kerajinan">Kerajinan</option>
                <option value="Tekstil">Tekstil</option>
                <option value="Pertanian">Pertanian</option>
              </select>
            </div>
          )}

          {/* Analisis Export Desa untuk section E - Kiri */}
          {activeMeta === "E" && currentExports && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Analisis Export Desa {currentDesa.name}</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{currentExports.totalExports}</div>
                  <div className="text-sm text-gray-300">Total Export</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">${currentExports.totalValue.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Nilai Export</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">${currentExports.revenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Pendapatan</div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">No</th>
                      <th className="text-left py-2">Nama Export</th>
                      <th className="text-left py-2">Kategori</th>
                      <th className="text-left py-2">Harga (USD)</th>
                      <th className="text-left py-2">Terjual</th>
                      <th className="text-left py-2">Stok</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentExports.exports.map((exportItem: any) => (
                      <tr key={exportItem.id} className="border-b border-gray-700">
                        <td className="py-2">{exportItem.id}</td>
                        <td className="py-2">{exportItem.name}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-gray-600 rounded text-xs">{exportItem.category}</span>
                        </td>
                        <td className="py-2 text-green-400">${exportItem.price}</td>
                        <td className="py-2 text-blue-400">{exportItem.sold}</td>
                        <td className="py-2 text-yellow-400">{exportItem.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Export Pie Chart untuk section E - Kiri */}
          {activeMeta === "E" && currentExports && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Distribusi Export Desa {currentDesa.name}</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Makanan", value: 35, color: "#10B981" },
                        { name: "Kerajinan", value: 25, color: "#3B82F6" },
                        { name: "Tekstil", value: 20, color: "#F59E0B" },
                        { name: "Pertanian", value: 20, color: "#EF4444" }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {[
                        { name: "Makanan", value: 35, color: "#10B981" },
                        { name: "Kerajinan", value: 25, color: "#3B82F6" },
                        { name: "Tekstil", value: 20, color: "#F59E0B" },
                        { name: "Pertanian", value: 20, color: "#EF4444" }
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-300">Makanan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-300">Kerajinan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-300">Tekstil</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-300">Pertanian</span>
                </div>
              </div>
            </div>
          )}

          {/* Export Sentiment untuk section E - Kiri */}
          {activeMeta === "E" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Sentimen Export Desa {currentDesa.name}</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData} layout="horizontal">
                    <XAxis type="number" domain={[0, 6000]} />
                    <YAxis type="category" dataKey="sentiment" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-300">Positif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-300">Netral</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-300">Negatif</span>
                </div>
              </div>
            </div>
          )}


          {/* Share of Issues Pie Chart */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {activeMeta === "desa" ? `Aspek: ${selectedIssue}` : `${currentMeta?.name} Category: ${selectedIssue}`}
              </h3>
              <h3 className="text-lg font-semibold">
                {activeMeta === "desa" ? "Distribusi Prioritas" : `${currentMeta?.name} Distribution`}
              </h3>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="w-64 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                      data={issuesData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                      outerRadius={100}
                      label={({ value }) => `${value}%`}
                    >
                      {issuesData.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
              </div>
              
              <div className="flex-1">
                <div className="space-y-2">
                  {issuesData.slice(0, 10).map((issue: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: issue.color }}
                      ></div>
                      <span className="text-gray-300">{index + 1}. {issue.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                </div>

          {/* Struktur Pemerintahan Desa */}
          {activeMeta === "desa" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Struktur Pemerintahan {currentDesa.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-blue-600">
                      {/* <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                        alt="Kepala Desa" 
                        className="w-12 h-12 rounded-full object-cover"
                      /> */}
                      <div className="flex-1">
                        <div className="text-blue-600 text-sm font-medium">Kepala Desa</div>
                        <div className="text-gray-800 font-semibold">{currentDesa.leader}</div>
                        <div className="text-gray-600 text-xs">Pemimpin tertinggi desa, bertanggung jawab atas pembangunan dan kesejahteraan masyarakat</div>
                      </div>
                    </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-green-600">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                      alt="Sekretaris Desa" 
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <div className="text-green-600 text-sm font-medium">Sekretaris Desa</div>
                      <div className="text-gray-800 font-semibold">Budi Santoso</div>
                      <div className="text-gray-600 text-xs">Mengelola administrasi desa, dokumentasi, dan koordinasi kegiatan pemerintahan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-purple-600">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
                      alt="Ketua BPD" 
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <div className="text-purple-600 text-sm font-medium">Ketua BPD</div>
                      <div className="text-gray-800 font-semibold">Siti Nurhaliza</div>
                      <div className="text-gray-600 text-xs">Mewakili aspirasi masyarakat, mengawasi kinerja pemerintah desa</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-orange-600">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" 
                      alt="Kasi Pemerintahan" 
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <div className="text-orange-600 text-sm font-medium">Kasi Pemerintahan</div>
                      <div className="text-gray-800 font-semibold">Ahmad Wijaya</div>
                      <div className="text-gray-600 text-xs">Mengelola urusan pemerintahan, keamanan, dan ketertiban masyarakat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-pink-600">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                      alt="Kasi Kesejahteraan" 
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <div className="text-pink-600 text-sm font-medium">Kasi Kesejahteraan</div>
                      <div className="text-gray-800 font-semibold">Rina Sari</div>
                      <div className="text-gray-600 text-xs">Mengkoordinasikan program kesejahteraan, kesehatan, dan pendidikan masyarakat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-teal-600">
                    {/* <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" 
                      alt="Kasi Pelayanan" 
                      className="w-12 h-12 rounded-full object-cover"
                    /> */}
                    <div className="flex-1">
                      <div className="text-teal-600 text-sm font-medium">Kasi Pelayanan</div>
                      <div className="text-gray-800 font-semibold">Dedi Kurniawan</div>
                      <div className="text-gray-600 text-xs">Menyediakan pelayanan publik, administrasi kependudukan, dan perizinan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top People Table */}
          {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "A" && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                {activeMeta === "desa" ? "Tokoh Desa Terpopuler" : activeMeta === "T" ? `${currentMeta?.name} Top` : `${currentMeta?.name} Top People`}
              </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">No</th>
                    <th className="text-left py-2">
                      {activeMeta === "desa" ? "Tokoh" : "Name"}
                    </th>
                    <th className="text-left py-2">
                      {activeMeta === "desa" ? "Mention" : "Count"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topPeopleData.map((person: any) => (
                    <tr key={person.no} className="border-b border-gray-700">
                      <td className="py-2">{person.no}</td>
                      <td className="py-2">{person.people}</td>
                      <td className="py-2">{person.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          )}
        </div>

        {/* Right Column - Media Desa */}
        <div className="flex-1 p-6">
          <div className="text-xl font-bold mb-6 text-white">
            {activeMeta === "desa" ? "Media & Informasi Desa" : `${currentMeta?.name} Media`}
          </div>
          
          
          {/* Talent Information untuk section T */}
          {activeMeta === "T" && currentTalents && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Informasi Talent Desa {currentDesa.name}</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{currentTalents.totalTalents}</div>
                    <div className="text-sm text-gray-300">Total Talent Terdaftar</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 mb-2">{currentTalents.certifiedTalents}</div>
                    <div className="text-sm text-gray-300">Talent Bersertifikat</div>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">📊 Statistik Talent</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">85%</div>
                      <div className="text-sm text-gray-300">Tingkat Sertifikasi</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">12</div>
                      <div className="text-sm text-gray-300">Skill Categories</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">Rp {currentTalents.revenue.toLocaleString()}</div>
                      <div className="text-sm text-gray-300">Total Revenue</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">🎯 Top Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Web Development</span>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Digital Marketing</span>
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">UI/UX Design</span>
                    <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Mobile Development</span>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">🏆 Prestasi Talent</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Talent Terbaik 2024</span>
                      <span className="text-green-400 font-semibold">Ahmad Suryadi</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Most Certified</span>
                      <span className="text-blue-400 font-semibold">Rina Wulandari</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Highest Revenue</span>
                      <span className="text-yellow-400 font-semibold">Siti Nurhaliza</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Export Information untuk section E */}
          {activeMeta === "E" && currentExports && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Informasi Export Desa {currentDesa.name}</h3>
              
              {/* Destinations */}
              <div className="mb-6">
                <h4 className="text-md font-semibold mb-3 text-green-400">🌍 Destinasi Export</h4>
                <div className="space-y-2">
                  {currentExports.destinations.map((dest: any, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{dest.country}</span>
                        <span className="text-xs text-gray-400">({dest.percentage}%)</span>
                      </div>
                      <span className="text-sm text-green-400">Rp {dest.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Details */}
              <div className="mb-6">
                <h4 className="text-md font-semibold mb-3 text-green-400">📊 Detail Export</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm text-gray-300">Total Negara</div>
                    <div className="text-lg font-bold text-white">{currentExports.exportInfo.totalCountries}</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm text-gray-300">Produk Utama</div>
                    <div className="text-sm text-white">{currentExports.exportInfo.mainProducts.length} jenis</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="text-md font-semibold mb-3 text-green-400">🏆 Sertifikasi</h4>
                <div className="flex flex-wrap gap-2">
                  {currentExports.exportInfo.certifications.map((cert: any, index: number) => (
                    <span key={index} className="px-3 py-1 bg-green-600 rounded-full text-xs text-white">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shipping & Payment */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h4 className="text-md font-semibold mb-2 text-green-400">🚚 Mitra Pengiriman</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExports.exportInfo.shippingPartners.map((partner: any, index: number) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-xs text-gray-300">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-2 text-green-400">💳 Metode Pembayaran</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExports.exportInfo.paymentMethods.map((method: any, index: number) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-xs text-gray-300">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Tambah Export untuk section E - Kanan */}
          {activeMeta === "E" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Tambah Produk Export</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nama Produk Export</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan nama produk export"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Kategori Export</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Pilih kategori</option>
                      <option value="Makanan">Makanan</option>
                      <option value="Minuman">Minuman</option>
                      <option value="Kerajinan">Kerajinan</option>
                      <option value="Pakaian">Pakaian</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Harga Export (USD)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan harga export"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Stok Export</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Masukkan jumlah stok"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Destinasi Export</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Pilih destinasi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapura">Singapura</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Filipina">Filipina</option>
                    <option value="Jepang">Jepang</option>
                    <option value="Korea Selatan">Korea Selatan</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Australia">Australia</option>
                    <option value="Selandia Baru">Selandia Baru</option>
                    <option value="Kanada">Kanada</option>
                    <option value="Amerika Serikat">Amerika Serikat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Deskripsi Produk Export</label>
                  <textarea
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                    placeholder="Masukkan deskripsi produk export"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Simpan Export
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          )}


          {/* Total Sentiment Bar Chart */}
          {activeMeta !== "E" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {activeMeta === "desa" ? "Sentimen Masyarakat" : `${currentMeta?.name} Sentiment`}
              </h3>
            <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentData} layout="horizontal">
                  <XAxis type="number" domain={[0, 6000]} />
                  <YAxis type="category" dataKey="sentiment" />
                        <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-300">Positif</span>
                </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-300">Netral</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-300">Negatif</span>
              </div>
            </div>
            </div>
          )}

          {/* Form Tambah Produk untuk section M - Kanan */}
          {activeMeta === "M" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Tambah Produk Baru</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nama Produk</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama produk"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Kategori</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Pilih kategori</option>
                      <option value="Makanan">Makanan</option>
                      <option value="Minuman">Minuman</option>
                      <option value="Kerajinan">Kerajinan</option>
                      <option value="Pakaian">Pakaian</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Harga (Rp)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan harga"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Stok</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan jumlah stok"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Deskripsi Produk</label>
                  <textarea
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Masukkan deskripsi produk"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Simpan Produk
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          )}


          {/* Recent Popular Article */}
          {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "T" && activeMeta !== "A" && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {activeMeta === "desa" ? "Berita Terkini Desa" : `${currentMeta?.name} News`}
              </h3>
            <div className="space-y-4">
              {recentArticles.map((article: any, index: number) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <div className="text-sm text-blue-400 mb-1">{article.source}</div>
                  <div className="text-sm text-gray-300 mb-2">{article.title}</div>
                  <div className="text-xs text-gray-500">{article.time}</div>
                </div>
              ))}
              <div className="text-sm text-blue-400">Lihat sumber lengkap</div>
            </div>
                </div>
          )}

          {/* Word Cloud */}
          {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "T" && activeMeta !== "A" && (
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                {activeMeta === "desa" ? "Kata Kunci Populer" : `${currentMeta?.name} Keywords`}
              </h3>
            <div className="flex flex-wrap gap-2">
              {wordCloudData.map((word, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded text-xs ${
                    index < 5 
                      ? "bg-blue-600 text-white" 
                      : index < 10 
                      ? "bg-gray-600 text-gray-300"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {word}
                    </span>
              ))}
            </div>
            </div>
          )}
        </div>

        {/* Right Column - Peta Lokasi */}
        {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "T" && activeMeta !== "A" && (
          <div className="w-1/3 p-6">
            <div className="text-xl font-bold mb-6 text-white">
              {activeMeta === "desa" ? "Peta Lokasi Desa" : `${currentMeta?.name} Map`}
            </div>
          
          {/* Peta Interaktif */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">
              {activeMeta === "desa" ? `Lokasi ${currentDesa.name}` : `${currentMeta?.name} Location`}
            </h3>
            <div className="h-96 rounded-lg overflow-hidden">
                      <MapContainer
                center={[currentDesa.lat, currentDesa.lng]}
                        zoom={12}
                style={{ height: "100%", width: "100%" }}
                        zoomControl={false}
                      >
                        <TileLayer
                          attribution="&copy; OpenStreetMap"
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ZoomControl position="topleft" />

                {/* Marker untuk desa yang dipilih */}
                <Marker position={[currentDesa.lat, currentDesa.lng]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">
                        {currentDesa.name}
                      </h3>
                      <p className="text-green-600 font-semibold text-sm">
                        Populasi: {currentDesa.population.toLocaleString()} jiwa
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Luas: {currentDesa.area}
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        Kepala Desa: {currentDesa.leader}
                      </p>
                    </div>
                  </Popup>
                </Marker>

                {/* Marker untuk desa lain */}
                {Object.entries(desaData).map(([key, desa]) => {
                  if (key !== selectedDesa) {
                    return (
                      <Marker key={key} position={[desa.lat, desa.lng]}>
                            <Popup>
                              <div className="text-center">
                                <h3 className="font-bold text-gray-800 text-lg mb-1">
                                  {desa.name}
                                </h3>
                            <p className="text-blue-600 font-semibold text-sm">
                              {desa.population.toLocaleString()} jiwa
                                </p>
                                <button
                              onClick={() => setSelectedDesa(key)}
                                  className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                                >
                                  Pilih Desa
                                </button>
                              </div>
                            </Popup>
                          </Marker>
                    );
                  }
                  return null;
                })}
                      </MapContainer>
          </div>
        </div>

          {/* Info Desa */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              {activeMeta === "desa" ? "Informasi Desa" : `${currentMeta?.name} Information`}
            </h3>
              <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">
                  {activeMeta === "desa" ? "Nama Desa:" : "Name:"}
                </span>
                <span className="text-white font-semibold">
                  {activeMeta === "desa" ? currentDesa.name : currentMeta?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">
                  {activeMeta === "desa" ? "Populasi:" : "Users:"}
                </span>
                <span className="text-white font-semibold">
                  {activeMeta === "desa" ? `${currentDesa.population.toLocaleString()} jiwa` : "Active Users"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">
                  {activeMeta === "desa" ? "Luas Wilayah:" : "Coverage:"}
                </span>
                <span className="text-white font-semibold">
                  {activeMeta === "desa" ? currentDesa.area : "Global"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">
                  {activeMeta === "desa" ? "Kepala Desa:" : "Leader:"}
                </span>
                <span className="text-white font-semibold">
                  {activeMeta === "desa" ? currentDesa.leader : "Platform Admin"}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-gray-300 block mb-2">
                  {activeMeta === "desa" ? "Prestasi:" : "Achievements:"}
                </span>
                <div className="space-y-1">
                  {currentDesa.achievements.map((achievement: any, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-yellow-400">🏆</span>
                      <span className="text-sm text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>

      {/* Embed Shopify Full Width untuk section M */}
      {activeMeta === "M" && (
        <div className="mx-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Shopify Store - Produk Desa {currentDesa.name}</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://desa-bojonggede.myshopify.com"
                width="100%"
                height="800"
                frameBorder="0"
                title="Shopify Store Desa"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>🔗 <a href="https://desa-bojonggede.myshopify.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Buka di tab baru
              </a></p>
              <p className="mt-2">Toko online resmi Desa {currentDesa.name} yang menampilkan semua produk UMKM lokal</p>
            </div>
          </div>
        </div>
      )}

      {/* Embed Alibaba Full Width untuk section E */}
      {activeMeta === "E" && (
        <div className="mx-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Alibaba Export Platform - Produk Desa {currentDesa.name}</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://www.alibaba.com"
                width="100%"
                height="800"
                frameBorder="0"
                title="Alibaba Export Platform"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>🔗 <a href="https://www.alibaba.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                Buka di tab baru
              </a></p>
              <p className="mt-2">Platform export resmi Desa {currentDesa.name} untuk menjual produk ke pasar internasional</p>
            </div>
          </div>
        </div>
      )}

      {/* Embed NIKICI Full Width untuk section T */}
      {activeMeta === "T" && (
        <div className="mx-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-white">NIKICI Certification Platform - Talent Desa {currentDesa.name}</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://itcertification.staging.nikici.com/"
                width="100%"
                height="800"
                frameBorder="0"
                title="NIKICI Certification Platform"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>🔗 <a href="https://itcertification.staging.nikici.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                Buka di tab baru
              </a></p>
              <p className="mt-2">Platform sertifikasi IT resmi Desa {currentDesa.name} untuk mengembangkan talent digital</p>
            </div>
          </div>
        </div>
      )}

      {/* Embed Art Platforms untuk section A */}
      {activeMeta === "A" && (
        <div className="mx-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Art Platforms - Kreativitas Desa {currentDesa.name}</h3>
            
            {/* Layout 3 baris ke samping */}
            <div className="grid grid-cols-3 gap-6">
              {/* Instagram Embed */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-pink-400">📸 Instagram Saraga Technology</h4>
                <div className="bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.instagram.com/saragatechnology/embed/"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Instagram Saraga Technology"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <p>🔗 <a href="https://www.instagram.com/saragatechnology/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                    Buka Instagram di tab baru
                  </a></p>
                </div>
              </div>

              {/* YouTube Embed */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-400">🎥 YouTube Saraga Technology</h4>
                <div className="bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/channel/UCsaragatechnology"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="YouTube Saraga Technology"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <p>🔗 <a href="https://www.youtube.com/@saragatechnology" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                    Buka YouTube di tab baru
                  </a></p>
                </div>
              </div>

              {/* TikTok Embed */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-black bg-white px-2 py-1 rounded">🎵 TikTok Saraga Technology</h4>
                <div className="bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.tiktok.com/embed/@saragatechnology"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="TikTok Saraga Technology"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <p>🔗 <a href="https://www.tiktok.com/@saragatechnology" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                    Buka TikTok di tab baru
                  </a></p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-400">
              <p>Platform kreativitas resmi Desa {currentDesa.name} untuk menampilkan karya seni digital dan konten kreatif</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer dengan statistik desa */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">👥</span>
              <span>Populasi: {currentDesa.population.toLocaleString()} jiwa</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🏠</span>
              <span>Luas: {currentDesa.area}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">🏆</span>
              <span>{currentDesa.achievements[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">📍</span>
              <span>{currentDesa.name}</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Last updated: 22 Oktober 2024, 14:49 WIB
          </div>
        </div>
      </div>

    </div>
  );
}
