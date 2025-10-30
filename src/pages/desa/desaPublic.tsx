import { useState, useEffect } from "react";
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
  useMap,
} from "react-leaflet";
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
    ],
    facilities: [
      { name: "Puskesmas", count: 2, icon: "🏥" },
      { name: "Sekolah", count: 5, icon: "🏫" },
      { name: "Masjid", count: 8, icon: "🕌" },
      { name: "Pasar", count: 3, icon: "🏪" },
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
    ],
    facilities: [
      { name: "Puskesmas", count: 1, icon: "🏥" },
      { name: "Sekolah", count: 4, icon: "🏫" },
      { name: "Masjid", count: 6, icon: "🕌" },
      { name: "Pasar", count: 2, icon: "🏪" },
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
    ],
    facilities: [
      { name: "Puskesmas", count: 2, icon: "🏥" },
      { name: "Sekolah", count: 7, icon: "🏫" },
      { name: "Masjid", count: 5, icon: "🕌" },
      { name: "Pasar", count: 2, icon: "🏪" },
    ]
  }
};

// Komponen helper untuk update posisi peta
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, 12, {
      animate: true,
      duration: 1
    });
  }, [center, map]);

  return null;
}

export default function DesaPublicView() {
  const [selectedDesa, setSelectedDesa] = useState("Bojonggede");
  
  const currentDesa = desaData[selectedDesa as keyof typeof desaData];
  
  const sentimentData = [
    { sentiment: "Positif", value: currentDesa.sentiment.positive, color: "#10B981" },
    { sentiment: "Netral", value: currentDesa.sentiment.neutral, color: "#3B82F6" },
    { sentiment: "Negatif", value: currentDesa.sentiment.negative, color: "#EF4444" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/garuda.png"
                alt="Logo Desa"
                className="w-16 h-16 bg-white rounded-full p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">Portal Desa Digital</h1>
                <p className="text-blue-100">Informasi Terkini Desa di Kabupaten Bogor</p>
              </div>
            </div>
            
            <div>
              <select
                value={selectedDesa}
                onChange={(e) => setSelectedDesa(e.target.value)}
                className="bg-white text-gray-800 border-2 border-blue-300 rounded-lg px-6 py-3 text-lg font-semibold shadow-lg hover:bg-blue-50 transition-all cursor-pointer"
              >
                <option value="Bojonggede">Desa Bojonggede</option>
                <option value="Megamendung">Desa Megamendung</option>
                <option value="Cibuluh">Desa Cibuluh</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Populasi</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{currentDesa.population.toLocaleString()}</p>
                <p className="text-gray-500 text-xs mt-1">Jiwa</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Luas Wilayah</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{currentDesa.area}</p>
                <p className="text-gray-500 text-xs mt-1">Total Area</p>
              </div>
              <div className="text-4xl">🗺️</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Kepala Desa</p>
                <p className="text-xl font-bold text-gray-800 mt-2">{currentDesa.leader}</p>
                <p className="text-gray-500 text-xs mt-1">Pemimpin Desa</p>
              </div>
              <div className="text-4xl">👤</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Prestasi</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{currentDesa.achievements.length}</p>
                <p className="text-gray-500 text-xs mt-1">Penghargaan</p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Program & Prioritas Desa */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Program & Prioritas Pembangunan
              </h2>
              
              <div className="flex items-center gap-8">
                <div className="w-80 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={currentDesa.issues}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label={({ value }) => `${value}%`}
                      >
                        {currentDesa.issues.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex-1">
                  <div className="space-y-3">
                    {currentDesa.issues.slice(0, 8).map((issue: any, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: issue.color }}
                        ></div>
                        <div className="flex-1">
                          <span className="text-gray-700 font-medium">{issue.name}</span>
                        </div>
                        <span className="text-gray-600 font-semibold">{issue.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sentimen Masyarakat */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                Sentimen & Tanggapan Masyarakat
              </h2>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sentimentData} layout="horizontal">
                    <XAxis type="number" domain={[0, 5000]} />
                    <YAxis type="category" dataKey="sentiment" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3B82F6">
                      {sentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Positif ({currentDesa.sentiment.positive})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Netral ({currentDesa.sentiment.neutral})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Negatif ({currentDesa.sentiment.negative})</span>
                </div>
              </div>
            </div>

            {/* Fasilitas Umum */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Fasilitas Umum
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentDesa.facilities.map((facility, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-2">{facility.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">{facility.count}</div>
                    <div className="text-sm text-gray-600">{facility.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Berita Terkini */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">📰</span>
                Berita & Informasi Terkini
              </h2>
              
              <div className="space-y-4">
                {currentDesa.articles.map((article: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors">
                    <div className="text-sm text-blue-600 font-semibold mb-1">{article.source}</div>
                    <div className="text-gray-800 font-medium mb-2">{article.title}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span>🕐</span>
                      <span>{article.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            {/* Peta Lokasi */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Lokasi Desa
              </h2>
              
              <div className="h-96 rounded-lg overflow-hidden border-2 border-gray-200">
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
                  <MapUpdater center={[currentDesa.lat, currentDesa.lng]} />

                  <Marker position={[currentDesa.lat, currentDesa.lng]}>
                    <Popup>
                      <div className="text-center p-2">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">
                          {currentDesa.name}
                        </h3>
                        <p className="text-green-600 font-semibold text-sm">
                          {currentDesa.population.toLocaleString()} jiwa
                        </p>
                        <p className="text-gray-600 text-sm">
                          Luas: {currentDesa.area}
                        </p>
                      </div>
                    </Popup>
                  </Marker>

                  {Object.entries(desaData).map(([key, desa]) => {
                    if (key !== selectedDesa) {
                      return (
                        <Marker key={key} position={[desa.lat, desa.lng]}>
                          <Popup>
                            <div className="text-center p-2">
                              <h3 className="font-bold text-gray-800 text-lg mb-1">
                                {desa.name}
                              </h3>
                              <p className="text-blue-600 font-semibold text-sm mb-2">
                                {desa.population.toLocaleString()} jiwa
                              </p>
                              <button
                                onClick={() => setSelectedDesa(key)}
                                className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
                              >
                                Lihat Desa Ini
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

            {/* Prestasi & Penghargaan */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Prestasi & Penghargaan
              </h2>
              
              <div className="space-y-3">
                {currentDesa.achievements.map((achievement: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
                    <span className="text-2xl">🌟</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{achievement}</p>
                      <p className="text-xs text-gray-600 mt-1">Tahun 2024</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kontak & Informasi */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Kontak & Layanan
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-800">info@{selectedDesa.toLowerCase()}.desa.id</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">☎️</span>
                  <div>
                    <p className="text-sm text-gray-600">Telepon</p>
                    <p className="font-semibold text-gray-800">(0251) 123-456</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-sm text-gray-600">Jam Layanan</p>
                    <p className="font-semibold text-gray-800">08:00 - 16:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white mt-12 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">Tentang Portal Desa</h3>
              <p className="text-gray-300 text-sm">
                Portal informasi digital untuk transparansi dan akses informasi desa di Kabupaten Bogor, Jawa Barat.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Tautan Cepat</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Program Desa</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pengaduan Online</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Layanan Administrasi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Kontak Kami</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Informasi</h3>
              <p className="text-gray-300 text-sm mb-2">
                📍 Kab. Bogor, Jawa Barat
              </p>
              <p className="text-gray-300 text-sm mb-2">
                📧 info@desadigital.id
              </p>
              <p className="text-gray-300 text-sm">
                ☎️ (021) 123-4567
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>© 2024 Portal Desa Digital - Kabupaten Bogor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

