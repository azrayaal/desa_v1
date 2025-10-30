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

// Import data from constants
import { desaData, metaData, wordCloudData } from "../../constants/desaData";
import { desaProducts, desaExports, desaTalents } from "../../constants/metaData";

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

export default function DesaDashboardRefactored() {
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedDesa, setSelectedDesa] = useState("Bojonggede");
  const [activeMeta, setActiveMeta] = useState("desa"); // "desa" as default active

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
              alt="Dashboard Desa"
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
                  <div className="text-2xl font-bold text-green-400">Rp {currentExports.totalValue.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Nilai Export</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">Rp {currentExports.revenue.toLocaleString()}</div>
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
                      <th className="text-left py-2">Harga</th>
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
                        <td className="py-2 text-green-400">Rp {exportItem.price.toLocaleString()}</td>
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
                    <div className="flex-1">
                      <div className="text-blue-600 text-sm font-medium">Kepala Desa</div>
                      <div className="text-gray-800 font-semibold">{currentDesa.leader}</div>
                      <div className="text-gray-600 text-xs">Pemimpin tertinggi desa, bertanggung jawab atas pembangunan dan kesejahteraan masyarakat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-green-600">
                    <div className="flex-1">
                      <div className="text-green-600 text-sm font-medium">Sekretaris Desa</div>
                      <div className="text-gray-800 font-semibold">Budi Santoso</div>
                      <div className="text-gray-600 text-xs">Mengelola administrasi desa, dokumentasi, dan koordinasi kegiatan pemerintahan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-purple-600">
                    <div className="flex-1">
                      <div className="text-purple-600 text-sm font-medium">Ketua BPD</div>
                      <div className="text-gray-800 font-semibold">Siti Nurhaliza</div>
                      <div className="text-gray-600 text-xs">Mewakili aspirasi masyarakat, mengawasi kinerja pemerintah desa</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-orange-600">
                    <div className="flex-1">
                      <div className="text-orange-600 text-sm font-medium">Kasi Pemerintahan</div>
                      <div className="text-gray-800 font-semibold">Ahmad Wijaya</div>
                      <div className="text-gray-600 text-xs">Mengelola urusan pemerintahan, keamanan, dan ketertiban masyarakat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-pink-600">
                    <div className="flex-1">
                      <div className="text-pink-600 text-sm font-medium">Kasi Kesejahteraan</div>
                      <div className="text-gray-800 font-semibold">Rina Sari</div>
                      <div className="text-gray-600 text-xs">Mengkoordinasikan program kesejahteraan, kesehatan, dan pendidikan masyarakat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-r-4 border-teal-600">
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Harga Export</label>
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
                {wordCloudData.map((word: string, index: number) => (
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
                  <MapUpdater center={[currentDesa.lat, currentDesa.lng]} />

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
