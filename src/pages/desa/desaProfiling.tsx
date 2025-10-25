// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
// } from "recharts";

// // Data desa yang lebih lengkap
// const desaData = {
//   nama: "Bojong Gede",
//   kepalaDesa: "Bapak Ahmad Suryana",
//   sekretarisDesa: "Ibu Siti Rahayu",
//   deskripsi:
//     "Desa Bojong Gede merupakan desa yang terletak di wilayah Kabupaten Subur. Desa ini dikenal dengan potensi pertanian dan UMKM lokal yang berkembang pesat serta memiliki panorama alam yang indah.",
//   visi: "Mewujudkan Desa Bojong Gede yang Mandiri, Maju, dan Sejahtera Berbasis Kearifan Lokal.",
//   misi: [
//     "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan",
//     "Mendorong pertumbuhan ekonomi masyarakat berbasis potensi lokal",
//     "Mengoptimalkan potensi pertanian dan UMKM dengan teknologi tepat guna",
//     "Menjaga kelestarian lingkungan dan budaya lokal",
//     "Membangun tata kelola pemerintahan yang transparan dan akuntabel",
//   ],
//   koordinat: [-6.914744, 107.60981],
//   jumlahPenduduk: 2350,
//   luasWilayah: "12 km²",
//   batasWilayah: {
//     utara: "Desa Harapan Jaya",
//     selatan: "Desa Mekar Sari",
//     barat: "Desa Cempaka Putih",
//     timur: "Desa Sumber Rejo",
//   },
//   // Data gambar untuk background hero
//   heroImages: [
//     "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1464822759846-45faca2e26b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   ],
//   // Data statistik hero
//   statistikHero: [
//     { value: "2.350", label: "Jiwa Penduduk", icon: "👥" },
//     { value: "12 km²", label: "Luas Wilayah", icon: "🗺️" },
//     { value: "99", label: "Tahun Usia", icon: "🎂" },
//     { value: "85%", label: "Kepuasan", icon: "⭐" },
//   ],
//   potensi: [
//     {
//       nama: "Pertanian Padi Organik",
//       emoji: "🌾",
//       deskripsi: "Lahan pertanian seluas 50 hektar dengan sistem organik",
//       lokasi: "Dusun Tani Makmur",
//       perkembangan: "Meningkat 15% per tahun",
//     },
//     {
//       nama: "Kerajinan Bambu",
//       emoji: "🎍",
//       deskripsi: "Home industry kerajinan bambu dengan 50 pengrajin",
//       lokasi: "Dusun Bambu Indah",
//       perkembangan: "Ekspor ke 3 negara",
//     },
//     {
//       nama: "Wisata Alam Curug Cantik",
//       emoji: "🏞️",
//       deskripsi: "Air terjun dengan ketinggian 25 meter dan pemandangan hijau",
//       lokasi: "Dusun Alam Asri",
//       perkembangan: "500 pengunjung per bulan",
//     },
//     {
//       nama: "Home Industry Tempe",
//       emoji: "🏭",
//       deskripsi: "Produksi tempe organik dengan bahan lokal",
//       lokasi: "Dusun Industri Kecil",
//       perkembangan: "Produksi 100 kg per hari",
//     },
//     {
//       nama: "Peternakan Sapi Perah",
//       emoji: "🐄",
//       deskripsi: "Peternakan sapi perah dengan sistem modern",
//       lokasi: "Dusun Ternak Sejahtera",
//       perkembangan: "Produksi 200 liter susu per hari",
//     },
//   ],
//   fasilitas: [
//     {
//       nama: "Puskesmas Pembantu",
//       jumlah: 1,
//       emoji: "🏥",
//       lokasi: "Jl. Sehat No. 1",
//       pelayanan: "Setiap hari 24 jam",
//     },
//     {
//       nama: "SD Negeri",
//       jumlah: 2,
//       emoji: "🏫",
//       lokasi: "Jl. Pendidikan No. 5 & 8",
//       pelayanan: "Senin - Sabtu, 07.00-13.00",
//     },
//     {
//       nama: "Posyandu",
//       jumlah: 5,
//       emoji: "👶",
//       lokasi: "Setiap dusun",
//       pelayanan: "Setiap bulan pertama",
//     },
//     {
//       nama: "Balai Desa",
//       jumlah: 1,
//       emoji: "🏛️",
//       lokasi: "Jl. Desa No. 1",
//       pelayanan: "Senin - Jumat, 08.00-16.00",
//     },
//     {
//       nama: "Lapangan Olahraga",
//       jumlah: 2,
//       emoji: "⚽",
//       lokasi: "Dusun Tengah & Dusun Barat",
//       pelayanan: "Setiap hari untuk umum",
//     },
//     {
//       nama: "Pasar Desa",
//       jumlah: 1,
//       emoji: "🛒",
//       lokasi: "Pusat Desa",
//       pelayanan: "Setiap pagi hari",
//     },
//   ],
//   statistikPenduduk: {
//     lakiLaki: 1200,
//     perempuan: 1150,
//     usiaProduktif: 1500,
//     usiaAnak: 650,
//     usiaLansia: 200,
//   },
//   programUnggulan: [
//     "Bojong Gede Sehat - Program pelayanan kesehatan gratis untuk lansia",
//     "Desa Digital - Pelatihan teknologi untuk pemuda desa",
//     "Bojong Gede Hijau - Penanaman 1000 pohon tahun 2024",
//     "Pasar Digital Desa - Platform online untuk UMKM lokal",
//     "Beasiswa Pendidikan - Bantuan pendidikan untuk anak kurang mampu",
//     "BumDes Maju - Pengembangan badan usaha milik desa",
//   ],
//   kontak: {
//     alamat:
//       "Jl. Desa Bojong Gede No. 1, Kecamatan Subur, Kabupaten Subur, Jawa Barat 12345",
//     telepon: "(021) 1234-5678",
//     email: "pemdes.Bojong Gede@email.com",
//     website: "www.Bojong Gede-desa.id",
//     mediaSosial: {
//       facebook: "Desa Bojong Gede Official",
//       instagram: "@desaBojong Gede",
//       youtube: "Desa Bojong Gede Channel",
//     },
//   },
// };

// // Data untuk analisis sentimen
// const sentimentData = [
//   { name: "Akomodasi", Positif: 446, Negatif: 13 },
//   { name: "Makanan", Positif: 230, Negatif: 10 },
//   { name: "Keamanan", Positif: 679, Negatif: 31 },
//   { name: "Akses", Positif: 759, Negatif: 30 },
//   { name: "Kebersihan", Positif: 31, Negatif: 1 },
//   { name: "Pelayanan", Positif: 782, Negatif: 36 },
// ];

// const accessibilityData = [
//   { name: "Bandara", Positif: 687, Negatif: 203 },
//   { name: "Pelabuhan", Positif: 166, Negatif: 345 },
//   { name: "Transportasi", Positif: 872, Negatif: 92 },
//   { name: "Jalan Desa", Positif: 760, Negatif: 316 },
// ];

// const amenitiesData = [
//   { name: "Akomodasi", Positif: 999, Negatif: 89 },
//   { name: "ATM & Bank", Positif: 930, Negatif: 40 },
//   { name: "Toilet", Positif: 532, Negatif: 342 },
// ];

// const attractionData = [
//   { name: "Pantai", Positif: 1240, Negatif: 78 },
//   { name: "Air Terjun", Positif: 454, Negatif: 56 },
//   { name: "Gunung", Positif: 564, Negatif: 63 },
//   { name: "Kebun", Positif: 330, Negatif: 75 },
// ];

// // Data untuk persebaran
// const persebaranDesa = [
//   { name: "Desa Bojong Gede", aktivitas: 120, sentiment: "Positif" },
//   { name: "Desa Harapan Jaya", aktivitas: 90, sentiment: "Netral" },
//   { name: "Desa Mekar Sari", aktivitas: 60, sentiment: "Negatif" },
//   { name: "Desa Cempaka Putih", aktivitas: 100, sentiment: "Positif" },
//   { name: "Desa Sumber Rejo", aktivitas: 80, sentiment: "Positif" },
// ];

// // Data untuk analisis sektor
// const dataBySector = {
//   Ekonomi: {
//     category: [
//       { name: "UMKM", value: 45 },
//       { name: "Pertanian", value: 25 },
//       { name: "Perdagangan", value: 30 },
//     ],
//     places: [
//       { name: "Desa Bojong Gede", value: 85 },
//       { name: "Desa Mekarsari", value: 65 },
//       { name: "Desa Harapan Jaya", value: 55 },
//     ],
//   },
//   Kesehatan: {
//     category: [
//       { name: "Posyandu", value: 40 },
//       { name: "Puskesmas", value: 35 },
//       { name: "Kampanye Sehat", value: 25 },
//     ],
//     places: [
//       { name: "Desa Mekarsari", value: 90 },
//       { name: "Desa Bojong Gede", value: 70 },
//       { name: "Desa Bahagia", value: 60 },
//     ],
//   },
//   Pendidikan: {
//     category: [
//       { name: "SD", value: 30 },
//       { name: "SMP", value: 40 },
//       { name: "Pelatihan", value: 30 },
//     ],
//     places: [
//       { name: "Desa Harapan Jaya", value: 80 },
//       { name: "Desa Cemerlang", value: 50 },
//       { name: "Desa Bojong Gede", value: 45 },
//     ],
//   },
// };

// // Data perkembangan desa
// const perkembanganData = [
//   { tahun: "2019", penduduk: 2100, ekonomi: 65, infrastruktur: 70 },
//   { tahun: "2020", penduduk: 2150, ekonomi: 68, infrastruktur: 72 },
//   { tahun: "2021", penduduk: 2200, ekonomi: 72, infrastruktur: 75 },
//   { tahun: "2022", penduduk: 2250, ekonomi: 78, infrastruktur: 80 },
//   { tahun: "2023", penduduk: 2300, ekonomi: 82, infrastruktur: 85 },
//   { tahun: "2024", penduduk: 2350, ekonomi: 85, infrastruktur: 90 },
// ];

// const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#E91E63", "#9C27B0"];

// export default function DesaProfiling() {
//   const [activeTab, setActiveTab] = useState("profil");
//   const [selectedSector, setSelectedSector] = useState("Ekonomi");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto slide background images
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) =>
//         prev === desaData.heroImages.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Ganti gambar setiap 5 detik

//     return () => clearInterval(interval);
//   }, []);

//   const StatCard = ({ emoji, title, value, color = "bg-blue-500" }) => (
//     <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
//       <div className={`${color} text-white p-3 rounded-lg mr-4`}>
//         <span className="text-xl">{emoji}</span>
//       </div>
//       <div>
//         <h3 className="text-gray-600 text-sm">{title}</h3>
//         <p className="text-2xl font-bold text-gray-800">{value}</p>
//       </div>
//     </div>
//   );

//   const ChartCard = ({ title, data }) => (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <h4 className="font-semibold mb-3 text-gray-700">{title}</h4>
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" hide />
//           <YAxis hide />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="Positif" stackId="a" fill="#4CAF50" />
//           <Bar dataKey="Negatif" stackId="a" fill="#E53935" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Hero Section dengan Background Image */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Images dengan Slideshow */}
//         <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
//           {desaData.heroImages.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentImageIndex ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${image}')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//             />
//           ))}
//         </div>

//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

//         {/* Navigation Dots untuk Slideshow */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//           {desaData.heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Content Hero */}
//         <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto ">
//           {/* Badge/Welcome Message */}
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
//             <span className="text-sm font-medium">
//               🎉 Selamat Datang di Portal Resmi
//             </span>
//           </div>

//           {/* Judul Utama */}
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight ">
//             <div className="inline-block text-white ">
//               {/* {desaData.nama.split(" ").map((word, index) => ( */}
//               <span className="block">{desaData.nama}</span>
//               {/* ))} */}
//             </div>
//           </h1>

//           {/* Deskripsi */}
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
//             {desaData.deskripsi}
//           </p>

//           {/* Info Badge */}
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//               <span className="font-semibold">📍 Kecamatan Subur</span>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//               <span className="font-semibold">🏛️ Kabupaten Subur</span>
//             </div>
//             <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
//               <span className="font-semibold">📮 Kode Pos 12345</span>
//             </div>
//           </div>

//           {/* Statistik Hero */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
//             {desaData.statistikHero.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="text-3xl mb-2">{stat.icon}</div>
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-white/80 text-sm font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
//             <button
//               onClick={() => setActiveTab("profil")}
//               className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               🏠 Jelajahi Desa Kami
//             </button>
//             <button
//               onClick={() => setActiveTab("kontak")}
//               className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
//             >
//               📞 Hubungi Kami
//             </button>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navigation Tabs */}
//       <section className="bg-white shadow-lg sticky top-0 z-20 border-b">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex overflow-x-auto">
//             {[
//               "profil",
//               "visi-misi",
//               "potensi",
//               "statistik",
//               "analisis",
//               "peta",
//               "kontak",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
//                   activeTab === tab
//                     ? "text-green-600 border-green-600 bg-green-50"
//                     : "text-gray-600 hover:text-green-500 border-transparent hover:border-green-300"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === "profil" && "🏠 Profil Desa"}
//                 {tab === "visi-misi" && "🎯 Visi & Misi"}
//                 {tab === "potensi" && "💎 Potensi & Fasilitas"}
//                 {tab === "statistik" && "📊 Statistik"}
//                 {tab === "analisis" && "📈 Analisis Data"}
//                 {tab === "peta" && "🗺️ Peta Wilayah"}
//                 {tab === "kontak" && "📞 Kontak"}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content - SAMA PERSIS seperti sebelumnya */}
//       <div className="max-w-6xl mx-auto py-8 px-6 md:px-20">
//         {/* Tab: Profil Desa */}
//         {activeTab === "profil" && (
//           <div className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
//                   <span className="mr-2">🏠</span> Informasi Umum
//                 </h2>
//                 <div className="space-y-3">
//                   <p>
//                     <span className="font-semibold">Kepala Desa:</span>{" "}
//                     {desaData.kepalaDesa}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Sekretaris Desa:</span>{" "}
//                     {desaData.sekretarisDesa}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Luas Wilayah:</span>{" "}
//                     {desaData.luasWilayah}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Jumlah Penduduk:</span>{" "}
//                     {desaData.jumlahPenduduk} jiwa
//                   </p>
//                   <p>
//                     <span className="font-semibold">Kode Pos:</span> 12345
//                   </p>
//                   <p>
//                     <span className="font-semibold">Kecamatan:</span> Subur
//                   </p>
//                   <p>
//                     <span className="font-semibold">Kabupaten:</span> Subur
//                   </p>
//                   <p>
//                     <span className="font-semibold">Provinsi:</span> Jawa Barat
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
//                   <span className="mr-2">🗺️</span> Batas Wilayah
//                 </h2>
//                 <div className="space-y-2">
//                   {Object.entries(desaData.batasWilayah).map(([arah, desa]) => (
//                     <div
//                       key={arah}
//                       className="flex justify-between border-b pb-2"
//                     >
//                       <span className="font-medium capitalize">{arah}:</span>
//                       <span>{desa}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center mt-6">
//                   <span className="mr-2">📞</span> Kontak Penting
//                 </h2>
//                 <div className="space-y-2">
//                   <p>
//                     <span className="font-semibold">Poskesdes:</span> (021)
//                     1234-5679
//                   </p>
//                   <p>
//                     <span className="font-semibold">Polisi Desa:</span> (021)
//                     1234-5680
//                   </p>
//                   <p>
//                     <span className="font-semibold">Pemadam Kebakaran:</span>{" "}
//                     113
//                   </p>
//                   <p>
//                     <span className="font-semibold">Ambulans:</span> 118
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 text-green-700">
//                 📜 Sejarah Desa
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Desa Bojong Gede berdiri sejak tahun 1925 dengan nama awal
//                 "Kampung Tegal Sari". Pada tahun 1948, nama desa diubah menjadi
//                 Bojong Gede yang berarti "Harapan akan Kemajuan". Desa ini
//                 memiliki sejarah panjang dalam pengembangan pertanian organik
//                 dan pelestarian budaya lokal.
//               </p>
//               <div className="grid md:grid-cols-3 gap-4 mt-6">
//                 <div className="text-center p-4 bg-green-50 rounded-lg">
//                   <div className="text-2xl font-bold text-green-600">1925</div>
//                   <div className="text-green-800">Tahun Berdiri</div>
//                 </div>
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-2xl font-bold text-blue-600">99</div>
//                   <div className="text-blue-800">Tahun Usia</div>
//                 </div>
//                 <div className="text-center p-4 bg-purple-50 rounded-lg">
//                   <div className="text-2xl font-bold text-purple-600">5</div>
//                   <div className="text-purple-800">Dusun</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tab: Visi & Misi */}
//         {activeTab === "visi-misi" && (
//           <div className="space-y-8">
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-2xl font-semibold mb-4 text-green-700">
//                 🎯 Visi Desa
//               </h2>
//               <blockquote className="text-xl italic text-gray-700 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
//                 "{desaData.visi}"
//               </blockquote>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-2xl font-semibold mb-6 text-green-700">
//                 📋 Misi Desa
//               </h2>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {desaData.misi.map((misi, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start p-4 bg-green-50 rounded-lg"
//                   >
//                     <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
//                       {idx + 1}
//                     </div>
//                     <p className="text-gray-700">{misi}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-2xl font-semibold mb-4 text-green-700">
//                 🚀 Program Unggulan
//               </h2>
//               <div className="space-y-3">
//                 {desaData.programUnggulan.map((program, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center p-3 border-l-4 border-yellow-500 bg-yellow-50"
//                   >
//                     <span className="text-yellow-500 mr-3">📈</span>
//                     <span>{program}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-2xl font-semibold mb-4 text-green-700">
//                 📊 Perkembangan Desa
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <AreaChart data={perkembanganData}>
//                   <XAxis dataKey="tahun" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Area
//                     type="monotone"
//                     dataKey="penduduk"
//                     stackId="1"
//                     stroke="#4CAF50"
//                     fill="#4CAF50"
//                     fillOpacity={0.3}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="ekonomi"
//                     stackId="2"
//                     stroke="#2196F3"
//                     fill="#2196F3"
//                     fillOpacity={0.3}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="infrastruktur"
//                     stackId="3"
//                     stroke="#FFC107"
//                     fill="#FFC107"
//                     fillOpacity={0.3}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         )}

//         {/* Tab: Potensi & Fasilitas */}
//         {activeTab === "potensi" && (
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-semibold mb-6 text-green-700">
//                 💎 Potensi Desa
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {desaData.potensi.map((potensi, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
//                   >
//                     <div className="text-green-500 text-2xl mb-3 flex justify-center">
//                       <span>{potensi.emoji}</span>
//                     </div>
//                     <h3 className="font-semibold text-gray-800 text-center mb-3">
//                       {potensi.nama}
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2">
//                       <span className="font-semibold">Deskripsi:</span>{" "}
//                       {potensi.deskripsi}
//                     </p>
//                     <p className="text-sm text-gray-600 mb-2">
//                       <span className="font-semibold">Lokasi:</span>{" "}
//                       {potensi.lokasi}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       <span className="font-semibold">Perkembangan:</span>{" "}
//                       {potensi.perkembangan}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-6 text-green-700">
//                 🏢 Fasilitas Desa
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {desaData.fasilitas.map((fasilitas, idx) => (
//                   <div key={idx} className="bg-white rounded-xl shadow-md p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center">
//                         <div className="text-blue-500 mr-3 text-xl">
//                           {fasilitas.emoji}
//                         </div>
//                         <h3 className="font-semibold text-gray-800">
//                           {fasilitas.nama}
//                         </h3>
//                       </div>
//                       <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
//                         {fasilitas.jumlah} unit
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-2">
//                       <span className="font-semibold">Lokasi:</span>{" "}
//                       {fasilitas.lokasi}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       <span className="font-semibold">Pelayanan:</span>{" "}
//                       {fasilitas.pelayanan}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tab: Statistik */}
//         {activeTab === "statistik" && (
//           <div className="space-y-8">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <StatCard
//                 emoji="👥"
//                 title="Total Penduduk"
//                 value={desaData.jumlahPenduduk}
//                 color="bg-blue-500"
//               />
//               <StatCard
//                 emoji="👨"
//                 title="Laki-laki"
//                 value={desaData.statistikPenduduk.lakiLaki}
//                 color="bg-blue-500"
//               />
//               <StatCard
//                 emoji="👩"
//                 title="Perempuan"
//                 value={desaData.statistikPenduduk.perempuan}
//                 color="bg-pink-500"
//               />
//               <StatCard
//                 emoji="🗺️"
//                 title="Luas Wilayah"
//                 value={desaData.luasWilayah}
//                 color="bg-green-500"
//               />
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-6 text-green-700">
//                 📈 Komposisi Penduduk
//               </h2>
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-3xl font-bold text-blue-600">
//                     {desaData.statistikPenduduk.usiaAnak}
//                   </div>
//                   <div className="text-blue-800 font-medium">
//                     Usia Anak (0-14)
//                   </div>
//                   <div className="text-blue-600 text-sm mt-2">
//                     {(
//                       (desaData.statistikPenduduk.usiaAnak /
//                         desaData.jumlahPenduduk) *
//                       100
//                     ).toFixed(1)}
//                     %
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-green-50 rounded-lg">
//                   <div className="text-3xl font-bold text-green-600">
//                     {desaData.statistikPenduduk.usiaProduktif}
//                   </div>
//                   <div className="text-green-800 font-medium">
//                     Usia Produktif (15-64)
//                   </div>
//                   <div className="text-green-600 text-sm mt-2">
//                     {(
//                       (desaData.statistikPenduduk.usiaProduktif /
//                         desaData.jumlahPenduduk) *
//                       100
//                     ).toFixed(1)}
//                     %
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-orange-50 rounded-lg">
//                   <div className="text-3xl font-bold text-orange-600">
//                     {desaData.statistikPenduduk.usiaLansia}
//                   </div>
//                   <div className="text-orange-800 font-medium">
//                     Usia Lansia (65+)
//                   </div>
//                   <div className="text-orange-600 text-sm mt-2">
//                     {(
//                       (desaData.statistikPenduduk.usiaLansia /
//                         desaData.jumlahPenduduk) *
//                       100
//                     ).toFixed(1)}
//                     %
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-6 text-green-700">
//                 📊 Grafik Perkembangan
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={perkembanganData}>
//                   <XAxis dataKey="tahun" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="penduduk"
//                     stroke="#4CAF50"
//                     strokeWidth={2}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="ekonomi"
//                     stroke="#2196F3"
//                     strokeWidth={2}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="infrastruktur"
//                     stroke="#FFC107"
//                     strokeWidth={2}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         )}

//         {/* Tab: Analisis Data */}
//         {activeTab === "analisis" && (
//           <div className="space-y-8">
//             {/* Section: Analisis Sentimen */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-2xl font-semibold mb-6 text-green-700">
//                 📊 Analisis Sentimen Masyarakat
//               </h2>

//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold mb-4 text-gray-800">
//                   Sentimen Bulan Ini
//                 </h3>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={sentimentData} layout="vertical">
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="Positif" stackId="a" fill="#4CAF50" />
//                       <Bar dataKey="Negatif" stackId="a" fill="#E53935" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* 3 Charts Grid */}
//               <div className="grid md:grid-cols-3 gap-6 mt-8">
//                 <ChartCard title="Aksesibilitas" data={accessibilityData} />
//                 <ChartCard title="Fasilitas" data={amenitiesData} />
//                 <ChartCard title="Atraksi Wisata" data={attractionData} />
//               </div>
//             </div>

//             {/* Section: Persebaran dan Sektor */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Persebaran Aktivitas */}
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-lg font-semibold mb-4 text-green-700">
//                   🗺️ Persebaran Aktivitas Desa
//                 </h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={persebaranDesa}>
//                     <XAxis
//                       dataKey="name"
//                       angle={-45}
//                       textAnchor="end"
//                       height={80}
//                     />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="aktivitas" fill="#4CAF50" />
//                   </BarChart>
//                 </ResponsiveContainer>
//                 <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
//                   {persebaranDesa.map((desa, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center justify-between p-2 bg-gray-50 rounded"
//                     >
//                       <span>{desa.name}</span>
//                       <span
//                         className={`px-2 py-1 rounded text-xs ${
//                           desa.sentiment === "Positif"
//                             ? "bg-green-100 text-green-800"
//                             : desa.sentiment === "Negatif"
//                             ? "bg-red-100 text-red-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {desa.sentiment}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Analisis Sektor */}
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="text-lg font-semibold mb-4 text-green-700">
//                   📈 Analisis Per Sektor
//                 </h3>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {Object.keys(dataBySector).map((sector) => (
//                     <button
//                       key={sector}
//                       className={`px-3 py-1 rounded text-sm ${
//                         selectedSector === sector
//                           ? "bg-green-600 text-white"
//                           : "bg-gray-200 text-gray-700"
//                       }`}
//                       onClick={() => setSelectedSector(sector)}
//                     >
//                       {sector}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="h-48">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={dataBySector[selectedSector].category}
//                           dataKey="value"
//                           nameKey="name"
//                           cx="50%"
//                           cy="50%"
//                           outerRadius={60}
//                           label
//                         >
//                           {dataBySector[selectedSector].category.map(
//                             (_, index) => (
//                               <Cell
//                                 key={index}
//                                 fill={COLORS[index % COLORS.length]}
//                               />
//                             )
//                           )}
//                         </Pie>
//                         <Tooltip />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>

//                   <div className="h-48">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={dataBySector[selectedSector].places}>
//                         <XAxis
//                           dataKey="name"
//                           angle={-45}
//                           textAnchor="end"
//                           height={60}
//                         />
//                         <YAxis />
//                         <Tooltip />
//                         <Bar dataKey="value" fill="#FFC107" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section: Ringkasan Analisis */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-lg font-semibold mb-4 text-green-700">
//                 📋 Ringkasan Analisis
//               </h3>
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div className="text-center p-4 bg-green-50 rounded-lg">
//                   <div className="text-2xl font-bold text-green-600">85%</div>
//                   <div className="text-green-800 font-medium">
//                     Sentimen Positif
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-2xl font-bold text-blue-600">120</div>
//                   <div className="text-blue-800 font-medium">
//                     Aktivitas/Bulan
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-purple-50 rounded-lg">
//                   <div className="text-2xl font-bold text-purple-600">94%</div>
//                   <div className="text-purple-800 font-medium">
//                     Kepuasan Masyarakat
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                 <h4 className="font-semibold mb-2">Kesimpulan:</h4>
//                 <p className="text-sm text-gray-700">
//                   Desa Bojong Gede menunjukkan performa yang sangat baik dengan
//                   sentimen positif dominan di semua sektor. Area yang perlu
//                   perhatian khusus adalah fasilitas toilet umum dan akses
//                   transportasi yang masih mendapatkan beberapa feedback negatif.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tab: Peta Wilayah */}
//         {activeTab === "peta" && (
//           <div className="space-y-8">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="h-96">
//                 <MapContainer
//                   center={desaData.koordinat}
//                   zoom={13}
//                   className="h-full w-full"
//                 >
//                   <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   <Marker position={desaData.koordinat}>
//                     <Popup>
//                       <div className="text-center">
//                         <h3 className="font-bold">{desaData.nama}</h3>
//                         <p className="text-sm">Kantor Desa</p>
//                         <p className="text-sm">{desaData.kontak.alamat}</p>
//                       </div>
//                     </Popup>
//                   </Marker>
//                 </MapContainer>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="font-semibold text-lg mb-3 text-green-700">
//                   🗺️ Legenda Wilayah
//                 </h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
//                     <span>Area Persawahan</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
//                     <span>Area Permukiman</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
//                     <span>Area Fasilitas Umum</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
//                     <span>Area Industri Kecil</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
//                     <span>Area Wisata</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h3 className="font-semibold text-lg mb-3 text-green-700">
//                   📍 Informasi Geografis
//                 </h3>
//                 <div className="space-y-3">
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Koordinat:</span>{" "}
//                     {desaData.koordinat[0]}, {desaData.koordinat[1]}
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Ketinggian:</span> 450 meter
//                     di atas permukaan laut
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Topografi:</span>{" "}
//                     Berbukit-bukit dengan kemiringan 5-15%
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Curah Hujan:</span> 2000
//                     mm/tahun
//                   </p>
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Suhu Rata-rata:</span> 25°C
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="font-semibold text-lg mb-4 text-green-700">
//                 🏞️ Zona Wilayah Desa
//               </h3>
//               <div className="grid md:grid-cols-3 gap-4">
//                 <div className="text-center p-4 bg-green-50 rounded-lg">
//                   <div className="text-2xl font-bold text-green-600">60%</div>
//                   <div className="text-green-800 font-medium">
//                     Area Pertanian
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-2xl font-bold text-blue-600">25%</div>
//                   <div className="text-blue-800 font-medium">
//                     Area Permukiman
//                   </div>
//                 </div>
//                 <div className="text-center p-4 bg-yellow-50 rounded-lg">
//                   <div className="text-2xl font-bold text-yellow-600">15%</div>
//                   <div className="text-yellow-800 font-medium">
//                     Area Lainnya
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tab: Kontak */}
//         {activeTab === "kontak" && (
//           <div className="space-y-8">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4 text-green-700">
//                   📞 Informasi Kontak
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="font-semibold text-gray-700">
//                       Alamat Kantor Desa
//                     </h3>
//                     <p className="text-gray-600">{desaData.kontak.alamat}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">Telepon</h3>
//                     <p className="text-gray-600">{desaData.kontak.telepon}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">Email</h3>
//                     <p className="text-gray-600">{desaData.kontak.email}</p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">Website</h3>
//                     <p className="text-gray-600">{desaData.kontak.website}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <h2 className="text-xl font-semibold mb-4 text-green-700">
//                   🕒 Jam Operasional
//                 </h2>
//                 <div className="space-y-3">
//                   <div className="flex justify-between border-b pb-2">
//                     <span>Senin - Kamis</span>
//                     <span className="font-semibold">08:00 - 16:00</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span>Jumat</span>
//                     <span className="font-semibold">08:00 - 11:00</span>
//                   </div>
//                   <div className="flex justify-between border-b pb-2">
//                     <span>Sabtu</span>
//                     <span className="font-semibold">08:00 - 14:00</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Minggu</span>
//                     <span className="font-semibold text-red-500">Libur</span>
//                   </div>
//                 </div>

//                 <h2 className="text-xl font-semibold mb-4 text-green-700 mt-6">
//                   🌐 Media Sosial
//                 </h2>
//                 <div className="space-y-2">
//                   <p>
//                     <span className="font-semibold">Facebook:</span>{" "}
//                     {desaData.kontak.mediaSosial.facebook}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Instagram:</span>{" "}
//                     {desaData.kontak.mediaSosial.instagram}
//                   </p>
//                   <p>
//                     <span className="font-semibold">YouTube:</span>{" "}
//                     {desaData.kontak.mediaSosial.youtube}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 text-green-700">
//                 🗺️ Lokasi Kantor Desa
//               </h2>
//               <div className="h-64 rounded-lg overflow-hidden">
//                 <MapContainer
//                   center={desaData.koordinat}
//                   zoom={16}
//                   className="h-full w-full"
//                 >
//                   <TileLayer
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   <Marker position={desaData.koordinat}>
//                     <Popup>
//                       <div className="text-center">
//                         <h3 className="font-bold">
//                           Kantor Desa {desaData.nama}
//                         </h3>
//                         <p className="text-sm">{desaData.kontak.alamat}</p>
//                         <p className="text-sm">
//                           Telp: {desaData.kontak.telepon}
//                         </p>
//                       </div>
//                     </Popup>
//                   </Marker>
//                 </MapContainer>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-4 text-green-700">
//                 📋 Formulir Kontak
//               </h2>
//               <form className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Nama Lengkap
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Subjek
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Pesan
//                   </label>
//                   <textarea
//                     rows="4"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
//                 >
//                   Kirim Pesan
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-green-700 to-green-900 text-gray-200 py-8 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 {desaData.nama}
//               </h3>
//               <p className="text-sm">{desaData.deskripsi}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Kontak Cepat
//               </h3>
//               <p className="text-sm">{desaData.kontak.telepon}</p>
//               <p className="text-sm">{desaData.kontak.email}</p>
//               <p className="text-sm">{desaData.kontak.alamat}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Tautan Cepat
//               </h3>
//               <div className="flex flex-col gap-2">
//                 {[
//                   "profil",
//                   "visi-misi",
//                   "potensi",
//                   "statistik",
//                   "analisis",
//                   "peta",
//                   "kontak",
//                 ].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className="text-sm text-left hover:text-green-300 transition-colors"
//                   >
//                     {tab === "profil" && "📋 Profil Desa"}
//                     {tab === "visi-misi" && "🎯 Visi & Misi"}
//                     {tab === "potensi" && "💎 Potensi & Fasilitas"}
//                     {tab === "statistik" && "📊 Statistik"}
//                     {tab === "analisis" && "📈 Analisis Data"}
//                     {tab === "peta" && "🗺️ Peta Wilayah"}
//                     {tab === "kontak" && "📞 Kontak"}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 Media Sosial
//               </h3>
//               <div className="space-y-2">
//                 <p className="text-sm">
//                   📘 {desaData.kontak.mediaSosial.facebook}
//                 </p>
//                 <p className="text-sm">
//                   📷 {desaData.kontak.mediaSosial.instagram}
//                 </p>
//                 <p className="text-sm">
//                   📹 {desaData.kontak.mediaSosial.youtube}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-green-600 mt-8 pt-6 text-center text-sm">
//             <p>
//               © {new Date().getFullYear()} {desaData.nama}. Semua hak
//               dilindungi. | Dibangun dengan semangat melayani masyarakat | Versi
//               2.0
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // PieChart,
  // Pie,
  // Cell,
  // LineChart,
  // Line,
  // AreaChart,
  // Area,
} from "recharts";

// Data desa berdasarkan villageData
const villageData = [
  {
    id: 1,
    name: "Desa Sukamakmur",
    location: "Bogor",
    sentiment: {
      akomodasi: 78,
      makanan: 85,
      pelayanan: 90,
      keamanan: 88,
      akses: 80,
      kebersihan: 82,
    },
    aktivitas: [
      { bulan: "Januari", jumlah: 45 },
      { bulan: "Februari", jumlah: 50 },
      { bulan: "Maret", jumlah: 60 },
      { bulan: "April", jumlah: 55 },
    ],
    sektor: {
      ekonomi: 70,
      pendidikan: 75,
      kesehatan: 68,
    },
    ringkasan: {
      sentimen_positif: "85%",
      aktivitas_bulan: 4,
      kepuasan_masyarakat: "94%",
    },
    komposisiPenduduk: {
      anak: 1200,
      produktif: 3200,
      lansia: 800,
    },
    dashboard: {
      totalPenduduk: 5200,
      lakiLaki: 2600,
      perempuan: 2600,
      luasWilayah: "12 km²",
    },
  },
  {
    id: 2,
    name: "Desa Cisarua",
    location: "Bogor",
    sentiment: {
      akomodasi: 82,
      makanan: 88,
      pelayanan: 86,
      keamanan: 84,
      akses: 78,
      kebersihan: 80,
    },
    aktivitas: [
      { bulan: "Januari", jumlah: 30 },
      { bulan: "Februari", jumlah: 45 },
      { bulan: "Maret", jumlah: 52 },
      { bulan: "April", jumlah: 47 },
    ],
    sektor: {
      ekonomi: 68,
      pendidikan: 72,
      kesehatan: 70,
    },
    ringkasan: {
      sentimen_positif: "83%",
      aktivitas_bulan: 4,
      kepuasan_masyarakat: "90%",
    },
    komposisiPenduduk: {
      anak: 1000,
      produktif: 2900,
      lansia: 700,
    },
    dashboard: {
      totalPenduduk: 4600,
      lakiLaki: 2300,
      perempuan: 2300,
      luasWilayah: "9 km²",
    },
  },
  {
    id: 3,
    name: "Desa Pamijahan",
    location: "Bogor",
    sentiment: {
      akomodasi: 75,
      makanan: 80,
      pelayanan: 82,
      keamanan: 79,
      akses: 76,
      kebersihan: 78,
    },
    aktivitas: [
      { bulan: "Januari", jumlah: 25 },
      { bulan: "Februari", jumlah: 35 },
      { bulan: "Maret", jumlah: 40 },
      { bulan: "April", jumlah: 38 },
    ],
    sektor: {
      ekonomi: 65,
      pendidikan: 70,
      kesehatan: 67,
    },
    ringkasan: {
      sentimen_positif: "80%",
      aktivitas_bulan: 4,
      kepuasan_masyarakat: "88%",
    },
    komposisiPenduduk: {
      anak: 900,
      produktif: 2700,
      lansia: 600,
    },
    dashboard: {
      totalPenduduk: 4200,
      lakiLaki: 2100,
      perempuan: 2100,
      luasWilayah: "8 km²",
    },
  },
];

// Menggunakan data desa pertama sebagai default
const desaData = {
  nama: villageData[0].name,
  kepalaDesa: "Bapak Ahmad Suryana",
  sekretarisDesa: "Ibu Siti Rahayu",
  deskripsi: `${villageData[0].name} merupakan desa yang terletak di wilayah Kabupaten ${villageData[0].location}. Desa ini dikenal dengan potensi pertanian dan UMKM lokal yang berkembang pesat serta memiliki panorama alam yang indah.`,
  visi: `Mewujudkan ${villageData[0].name} yang Mandiri, Maju, dan Sejahtera Berbasis Kearifan Lokal.`,
  misi: [
    "Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan",
    "Mendorong pertumbuhan ekonomi masyarakat berbasis potensi lokal",
    "Mengoptimalkan potensi pertanian dan UMKM dengan teknologi tepat guna",
    "Menjaga kelestarian lingkungan dan budaya lokal",
    "Membangun tata kelola pemerintahan yang transparan dan akuntabel",
  ],
  koordinat: [-6.914744, 107.60981],
  jumlahPenduduk: villageData[0].dashboard.totalPenduduk,
  luasWilayah: villageData[0].dashboard.luasWilayah,
  batasWilayah: {
    utara: "Desa Harapan Jaya",
    selatan: "Desa Mekar Sari",
    barat: "Desa Cempaka Putih",
    timur: "Desa Sumber Rejo",
  },
  heroImages: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1464822759846-45faca2e26b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ],
  statistikHero: [
    {
      value: villageData[0].dashboard.totalPenduduk.toLocaleString(),
      label: "Jiwa Penduduk",
      icon: "👥",
    },
    {
      value: villageData[0].dashboard.luasWilayah,
      label: "Luas Wilayah",
      icon: "🗺️",
    },
    { value: "99", label: "Tahun Usia", icon: "🎂" },
    {
      value: villageData[0].ringkasan.kepuasan_masyarakat,
      label: "Kepuasan",
      icon: "⭐",
    },
  ],
  potensi: [
    {
      nama: "Pertanian Padi Organik",
      emoji: "🌾",
      deskripsi: "Lahan pertanian seluas 50 hektar dengan sistem organik",
      lokasi: "Dusun Tani Makmur",
      perkembangan: "Meningkat 15% per tahun",
    },
    {
      nama: "Kerajinan Bambu",
      emoji: "🎍",
      deskripsi: "Home industry kerajinan bambu dengan 50 pengrajin",
      lokasi: "Dusun Bambu Indah",
      perkembangan: "Ekspor ke 3 negara",
    },
    {
      nama: "Wisata Alam Curug Cantik",
      emoji: "🏞️",
      deskripsi: "Air terjun dengan ketinggian 25 meter dan pemandangan hijau",
      lokasi: "Dusun Alam Asri",
      perkembangan: "500 pengunjung per bulan",
    },
  ],
  fasilitas: [
    {
      nama: "Puskesmas Pembantu",
      jumlah: 1,
      emoji: "🏥",
      lokasi: "Jl. Sehat No. 1",
      pelayanan: "Setiap hari 24 jam",
    },
    {
      nama: "SD Negeri",
      jumlah: 2,
      emoji: "🏫",
      lokasi: "Jl. Pendidikan No. 5 & 8",
      pelayanan: "Senin - Sabtu, 07.00-13.00",
    },
    {
      nama: "Posyandu",
      jumlah: 5,
      emoji: "👶",
      lokasi: "Setiap dusun",
      pelayanan: "Setiap bulan pertama",
    },
  ],
  statistikPenduduk: {
    lakiLaki: villageData[0].dashboard.lakiLaki,
    perempuan: villageData[0].dashboard.perempuan,
    usiaProduktif: villageData[0].komposisiPenduduk.produktif,
    usiaAnak: villageData[0].komposisiPenduduk.anak,
    usiaLansia: villageData[0].komposisiPenduduk.lansia,
  },
  programUnggulan: [
    `${villageData[0].name} Sehat - Program pelayanan kesehatan gratis untuk lansia`,
    "Desa Digital - Pelatihan teknologi untuk pemuda desa",
    `${villageData[0].name} Hijau - Penanaman 1000 pohon tahun 2024`,
    "Pasar Digital Desa - Platform online untuk UMKM lokal",
    "Beasiswa Pendidikan - Bantuan pendidikan untuk anak kurang mampu",
    "BumDes Maju - Pengembangan badan usaha milik desa",
  ],
  kontak: {
    alamat: `Jl. ${villageData[0].name} No. 1, Kecamatan Subur, Kabupaten ${villageData[0].location}, Jawa Barat 12345`,
    telepon: "(021) 1234-5678",
    email: `pemdes.${villageData[0].name.replace(/\s+/g, "")}@email.com`,
    website: `www.${villageData[0].name
      .replace(/\s+/g, "-")
      .toLowerCase()}-desa.id`,
    mediaSosial: {
      facebook: `${villageData[0].name} Official`,
      instagram: `@${villageData[0].name.replace(/\s+/g, "").toLowerCase()}`,
      youtube: `${villageData[0].name} Channel`,
    },
  },
};

// Data untuk analisis sentimen berdasarkan villageData
const sentimentData = [
  {
    name: "Akomodasi",
    Positif: villageData[0].sentiment.akomodasi,
    Negatif: 100 - villageData[0].sentiment.akomodasi,
  },
  {
    name: "Makanan",
    Positif: villageData[0].sentiment.makanan,
    Negatif: 100 - villageData[0].sentiment.makanan,
  },
  {
    name: "Keamanan",
    Positif: villageData[0].sentiment.keamanan,
    Negatif: 100 - villageData[0].sentiment.keamanan,
  },
  {
    name: "Akses",
    Positif: villageData[0].sentiment.akses,
    Negatif: 100 - villageData[0].sentiment.akses,
  },
  {
    name: "Kebersihan",
    Positif: villageData[0].sentiment.kebersihan,
    Negatif: 100 - villageData[0].sentiment.kebersihan,
  },
  {
    name: "Pelayanan",
    Positif: villageData[0].sentiment.pelayanan,
    Negatif: 100 - villageData[0].sentiment.pelayanan,
  },
];

const accessibilityData = [
  { name: "Bandara", Positif: 687, Negatif: 203 },
  { name: "Pelabuhan", Positif: 166, Negatif: 345 },
  { name: "Transportasi", Positif: 872, Negatif: 92 },
  { name: "Jalan Desa", Positif: 760, Negatif: 316 },
];

const amenitiesData = [
  { name: "Akomodasi", Positif: 999, Negatif: 89 },
  { name: "ATM & Bank", Positif: 930, Negatif: 40 },
  { name: "Toilet", Positif: 532, Negatif: 342 },
];

const attractionData = [
  { name: "Pantai", Positif: 1240, Negatif: 78 },
  { name: "Air Terjun", Positif: 454, Negatif: 56 },
  { name: "Gunung", Positif: 564, Negatif: 63 },
  { name: "Kebun", Positif: 330, Negatif: 75 },
];

// Data untuk persebaran berdasarkan villageData
const persebaranDesa = villageData.map((desa) => ({
  name: desa.name,
  aktivitas:
    desa.aktivitas.reduce((sum, item) => sum + item.jumlah, 0) /
    desa.aktivitas.length,
  sentiment:
    desa.ringkasan.sentimen_positif > "83%"
      ? "Positif"
      : desa.ringkasan.sentimen_positif > "80%"
      ? "Netral"
      : "Negatif",
}));

// Data untuk analisis sektor berdasarkan villageData
const dataBySector = {
  Ekonomi: {
    category: [
      { name: "UMKM", value: villageData[0].sektor.ekonomi * 0.6 },
      { name: "Pertanian", value: villageData[0].sektor.ekonomi * 0.25 },
      { name: "Perdagangan", value: villageData[0].sektor.ekonomi * 0.15 },
    ],
    places: villageData.map((desa) => ({
      name: desa.name,
      value: desa.sektor.ekonomi,
    })),
  },
  Kesehatan: {
    category: [
      { name: "Posyandu", value: villageData[0].sektor.kesehatan * 0.4 },
      { name: "Puskesmas", value: villageData[0].sektor.kesehatan * 0.35 },
      { name: "Kampanye Sehat", value: villageData[0].sektor.kesehatan * 0.25 },
    ],
    places: villageData.map((desa) => ({
      name: desa.name,
      value: desa.sektor.kesehatan,
    })),
  },
  Pendidikan: {
    category: [
      { name: "SD", value: villageData[0].sektor.pendidikan * 0.3 },
      { name: "SMP", value: villageData[0].sektor.pendidikan * 0.4 },
      { name: "Pelatihan", value: villageData[0].sektor.pendidikan * 0.3 },
    ],
    places: villageData.map((desa) => ({
      name: desa.name,
      value: desa.sektor.pendidikan,
    })),
  },
};

// Data perkembangan desa berdasarkan aktivitas
const perkembanganData = [
  {
    tahun: "2019",
    penduduk: villageData[0].dashboard.totalPenduduk - 400,
    ekonomi: villageData[0].sektor.ekonomi - 15,
    infrastruktur: 70,
  },
  {
    tahun: "2020",
    penduduk: villageData[0].dashboard.totalPenduduk - 300,
    ekonomi: villageData[0].sektor.ekonomi - 12,
    infrastruktur: 72,
  },
  {
    tahun: "2021",
    penduduk: villageData[0].dashboard.totalPenduduk - 200,
    ekonomi: villageData[0].sektor.ekonomi - 8,
    infrastruktur: 75,
  },
  {
    tahun: "2022",
    penduduk: villageData[0].dashboard.totalPenduduk - 100,
    ekonomi: villageData[0].sektor.ekonomi - 5,
    infrastruktur: 80,
  },
  {
    tahun: "2023",
    penduduk: villageData[0].dashboard.totalPenduduk - 50,
    ekonomi: villageData[0].sektor.ekonomi - 2,
    infrastruktur: 85,
  },
  {
    tahun: "2024",
    penduduk: villageData[0].dashboard.totalPenduduk,
    ekonomi: villageData[0].sektor.ekonomi,
    infrastruktur: 90,
  },
];

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#E91E63", "#9C27B0"];

export default function DesaProfiling() {
  const [activeTab, setActiveTab] = useState("profil");
  const [selectedSector, setSelectedSector] = useState("Ekonomi");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDesa, setSelectedDesa] = useState(villageData[0]);

  // Auto slide background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === desaData.heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update desaData ketika selectedDesa berubah
  React.useEffect(() => {
    // Update data berdasarkan desa yang dipilih
    // Ini adalah implementasi sederhana, Anda bisa memperbaikinya sesuai kebutuhan
  }, [selectedDesa]);

  const StatCard = ({ emoji, title, value, color = "bg-blue-500" }) => (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
      <div className={`${color} text-white p-3 rounded-lg mr-4`}>
        <span className="text-xl">{emoji}</span>
      </div>
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );

  const ChartCard = ({ title, data }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-semibold mb-3 text-gray-700">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="Positif" stackId="a" fill="#4CAF50" />
          <Bar dataKey="Negatif" stackId="a" fill="#E53935" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  // Dropdown untuk memilih desa
  const DesaSelector = () => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Pilih Desa:
      </label>
      <select
        className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        value={selectedDesa.id}
        onChange={(e) =>
          setSelectedDesa(
            villageData.find((d) => d.id === parseInt(e.target.value))
          )
        }
      >
        {villageData.map((desa) => (
          <option key={desa.id} value={desa.id}>
            {desa.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images dengan Slideshow */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {desaData.heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {desaData.heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-medium">
              🎉 Selamat Datang di Portal Resmi
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">{selectedDesa.name}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            {desaData.deskripsi.replace(villageData[0].name, selectedDesa.name)}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="font-semibold">📍 Kecamatan Subur</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="font-semibold">
                🏛️ Kabupaten {selectedDesa.location}
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="font-semibold">📮 Kode Pos 12345</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              {
                value: selectedDesa.dashboard.totalPenduduk.toLocaleString(),
                label: "Jiwa Penduduk",
                icon: "👥",
              },
              {
                value: selectedDesa.dashboard.luasWilayah,
                label: "Luas Wilayah",
                icon: "🗺️",
              },
              { value: "99", label: "Tahun Usia", icon: "🎂" },
              {
                value: selectedDesa.ringkasan.kepuasan_masyarakat,
                label: "Kepuasan",
                icon: "⭐",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => setActiveTab("profil")}
              className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🏠 Jelajahi Desa Kami
            </button>
            <button
              onClick={() => setActiveTab("kontak")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              📞 Hubungi Kami
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-0 z-20 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto">
            {[
              "profil",
              "visi-misi",
              "potensi",
              "statistik",
              "analisis",
              "peta",
              "kontak",
            ].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? "text-green-600 border-green-600 bg-green-50"
                    : "text-gray-600 hover:text-green-500 border-transparent hover:border-green-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "profil" && "🏠 Profil Desa"}
                {tab === "visi-misi" && "🎯 Visi & Misi"}
                {tab === "potensi" && "💎 Potensi & Fasilitas"}
                {tab === "statistik" && "📊 Statistik"}
                {tab === "analisis" && "📈 Analisis Data"}
                {tab === "peta" && "🗺️ Peta Wilayah"}
                {tab === "kontak" && "📞 Kontak"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-8 px-6 md:px-20">
        {/* Desa Selector */}
        <DesaSelector />

        {/* Tab: Profil Desa */}
        {activeTab === "profil" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                  <span className="mr-2">🏠</span> Informasi Umum
                </h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Kepala Desa:</span>{" "}
                    {desaData.kepalaDesa}
                  </p>
                  <p>
                    <span className="font-semibold">Sekretaris Desa:</span>{" "}
                    {desaData.sekretarisDesa}
                  </p>
                  <p>
                    <span className="font-semibold">Luas Wilayah:</span>{" "}
                    {selectedDesa.dashboard.luasWilayah}
                  </p>
                  <p>
                    <span className="font-semibold">Jumlah Penduduk:</span>{" "}
                    {selectedDesa.dashboard.totalPenduduk} jiwa
                  </p>
                  <p>
                    <span className="font-semibold">Kode Pos:</span> 12345
                  </p>
                  <p>
                    <span className="font-semibold">Kecamatan:</span> Subur
                  </p>
                  <p>
                    <span className="font-semibold">Kabupaten:</span>{" "}
                    {selectedDesa.location}
                  </p>
                  <p>
                    <span className="font-semibold">Provinsi:</span> Jawa Barat
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                  <span className="mr-2">🗺️</span> Batas Wilayah
                </h2>
                <div className="space-y-2">
                  {Object.entries(desaData.batasWilayah).map(([arah, desa]) => (
                    <div
                      key={arah}
                      className="flex justify-between border-b pb-2"
                    >
                      <span className="font-medium capitalize">{arah}:</span>
                      <span>{desa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Statistik */}
        {activeTab === "statistik" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                emoji="👥"
                title="Total Penduduk"
                value={selectedDesa.dashboard.totalPenduduk}
                color="bg-blue-500"
              />
              <StatCard
                emoji="👨"
                title="Laki-laki"
                value={selectedDesa.dashboard.lakiLaki}
                color="bg-blue-500"
              />
              <StatCard
                emoji="👩"
                title="Perempuan"
                value={selectedDesa.dashboard.perempuan}
                color="bg-pink-500"
              />
              <StatCard
                emoji="🗺️"
                title="Luas Wilayah"
                value={selectedDesa.dashboard.luasWilayah}
                color="bg-green-500"
              />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 text-green-700">
                📈 Komposisi Penduduk
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">
                    {selectedDesa.komposisiPenduduk.anak}
                  </div>
                  <div className="text-blue-800 font-medium">
                    Usia Anak (0-14)
                  </div>
                  <div className="text-blue-600 text-sm mt-2">
                    {(
                      (selectedDesa.komposisiPenduduk.anak /
                        selectedDesa.dashboard.totalPenduduk) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">
                    {selectedDesa.komposisiPenduduk.produktif}
                  </div>
                  <div className="text-green-800 font-medium">
                    Usia Produktif (15-64)
                  </div>
                  <div className="text-green-600 text-sm mt-2">
                    {(
                      (selectedDesa.komposisiPenduduk.produktif /
                        selectedDesa.dashboard.totalPenduduk) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">
                    {selectedDesa.komposisiPenduduk.lansia}
                  </div>
                  <div className="text-orange-800 font-medium">
                    Usia Lansia (65+)
                  </div>
                  <div className="text-orange-600 text-sm mt-2">
                    {(
                      (selectedDesa.komposisiPenduduk.lansia /
                        selectedDesa.dashboard.totalPenduduk) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Analisis Data */}
        {activeTab === "analisis" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-green-700">
                📊 Analisis Sentimen Masyarakat - {selectedDesa.name}
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Sentimen Bulan Ini
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sentimentData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Positif" stackId="a" fill="#4CAF50" />
                      <Bar dataKey="Negatif" stackId="a" fill="#E53935" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <ChartCard title="Aksesibilitas" data={accessibilityData} />
                <ChartCard title="Fasilitas" data={amenitiesData} />
                <ChartCard title="Atraksi Wisata" data={attractionData} />
              </div>
            </div>

            {/* Section: Ringkasan Analisis */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-700">
                📋 Ringkasan Analisis - {selectedDesa.name}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDesa.ringkasan.sentimen_positif}
                  </div>
                  <div className="text-green-800 font-medium">
                    Sentimen Positif
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {selectedDesa.aktivitas.reduce(
                      (sum, item) => sum + item.jumlah,
                      0
                    )}
                  </div>
                  <div className="text-blue-800 font-medium">
                    Total Aktivitas
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {selectedDesa.ringkasan.kepuasan_masyarakat}
                  </div>
                  <div className="text-purple-800 font-medium">
                    Kepuasan Masyarakat
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab lainnya tetap sama dengan penyesuaian data */}
        {/* ... kode untuk tab lainnya ... */}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-700 to-green-900 text-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {selectedDesa.name}
              </h3>
              <p className="text-sm">
                {desaData.deskripsi.replace(
                  villageData[0].name,
                  selectedDesa.name
                )}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Kontak Cepat
              </h3>
              <p className="text-sm">{desaData.kontak.telepon}</p>
              <p className="text-sm">{desaData.kontak.email}</p>
              <p className="text-sm">{desaData.kontak.alamat}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Tautan Cepat
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  "profil",
                  "visi-misi",
                  "potensi",
                  "statistik",
                  "analisis",
                  "peta",
                  "kontak",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="text-sm text-left hover:text-green-300 transition-colors"
                  >
                    {tab === "profil" && "📋 Profil Desa"}
                    {tab === "visi-misi" && "🎯 Visi & Misi"}
                    {tab === "potensi" && "💎 Potensi & Fasilitas"}
                    {tab === "statistik" && "📊 Statistik"}
                    {tab === "analisis" && "📈 Analisis Data"}
                    {tab === "peta" && "🗺️ Peta Wilayah"}
                    {tab === "kontak" && "📞 Kontak"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Media Sosial
              </h3>
              <div className="space-y-2">
                <p className="text-sm">
                  📘 {desaData.kontak.mediaSosial.facebook}
                </p>
                <p className="text-sm">
                  📷 {desaData.kontak.mediaSosial.instagram}
                </p>
                <p className="text-sm">
                  📹 {desaData.kontak.mediaSosial.youtube}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-600 mt-8 pt-6 text-center text-sm">
            <p>
              © {new Date().getFullYear()} {selectedDesa.name}. Semua hak
              dilindungi. | Dibangun dengan semangat melayani masyarakat | Versi
              2.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
