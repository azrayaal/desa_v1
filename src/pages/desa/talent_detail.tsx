import { useNavigate, useParams } from "react-router";

export default function TalentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Pelatihan Digital Marketing untuk UMKM Desa",
      date: "25 Oktober 2025",
      location: "Balai Desa Sukamaju",
      image: "/images/desa/event-digital.jpg",
      description: `
        Pelatihan ini bertujuan untuk membantu pelaku UMKM di desa agar mampu
        memasarkan produk mereka secara digital melalui media sosial, marketplace,
        dan strategi branding yang efektif. Peserta akan belajar langsung dari mentor
        berpengalaman di bidang pemasaran online.
      `,
      benefits: [
        "Sertifikat pelatihan",
        "E-book strategi digital marketing",
        "Pendampingan pasca pelatihan selama 1 bulan",
      ],
    },
    {
      id: 2,
      title: "Workshop Kerajinan Anyaman Bambu",
      date: "30 Oktober 2025",
      location: "Desa Mekarsari",
      image: "/images/desa/event-bamboo.jpg",
      description: `
        Workshop ini mengajarkan cara membuat berbagai produk anyaman bambu
        yang bernilai seni dan ekonomis. Cocok bagi masyarakat yang ingin mengembangkan
        keterampilan kerajinan lokal menjadi peluang usaha.
      `,
      benefits: [
        "Pelatihan langsung dari pengrajin ahli",
        "Bahan baku dan alat disediakan",
        "Kesempatan memasarkan hasil karya",
      ],
    },
    {
      id: 3,
      title: "Lomba Inovasi Teknologi Tepat Guna",
      date: "5 November 2025",
      location: "Kecamatan Harapan Jaya",
      image: "/images/desa/event-tech.jpg",
      description: `
        Lomba ini mengundang seluruh masyarakat untuk berinovasi menciptakan
        teknologi sederhana yang dapat membantu kegiatan sehari-hari di lingkungan desa.
        Ide terbaik akan mendapatkan dukungan implementasi dan penghargaan.
      `,
      benefits: [
        "Hadiah uang tunai untuk 3 pemenang",
        "Pendampingan dari akademisi dan praktisi",
        "Publikasi di website resmi desa",
      ],
    },
  ];

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-200 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-3xl font-bold mb-2 text-gray-700">
          Event Tidak Ditemukan 😢
        </h1>
        <button
          onClick={() => navigate("/talent")}
          className="mt-4 bg-[#383638] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Kembali ke Daftar Event
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-200 bg-gradient-to-b from-gray-900 to-gray-800 ">
      {/* Hero Image */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${event.image})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          <p className="text-white/80">
            📅 {event.date} — 📍 {event.location}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <p className="text-lg mb-6 whitespace-pre-line">{event.description}</p>

        <h2 className="text-2xl font-semibold  mb-3">
          Manfaat Mengikuti Kegiatan Ini:
        </h2>
        <ul className="list-disc list-inside mb-6">
          {event.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/talent")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            ← Kembali
          </button>
          <button className="bg-[#383638] text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
