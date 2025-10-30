// Data desa di Jawa Barat
export const desaData = {
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

// Word Cloud Data
export const wordCloudData = [
  "bojonggede", "desa", "masyarakat", "pembangunan", "ekonomi", 
  "kesehatan", "pendidikan", "infrastruktur", "umkm", "pertanian", 
  "pasar", "jalan", "irigasi", "sampah", "wisata", 
  "kepala", "bpd", "rw", "rt", "warga", 
  "mandiri", "sejahtera", "maju", "bersih", "hijau",
  "homestay", "agrowisata", "kuliner", "tradisional", "modern",
  "akses", "transportasi", "komunikasi", "digital", "inovasi"
];

// Data META
export const metaData = {
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
