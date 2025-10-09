import { useNavigate } from "react-router";

export default function Talent() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Pelatihan Digital Marketing untuk UMKM Desa",
      date: "25 Oktober 2025",
      location: "Balai Desa Sukamaju",
      image: "/images/desa/event-digital.jpg",
      description:
        "Belajar strategi pemasaran online untuk mengembangkan usaha kecil menengah dengan bimbingan mentor profesional.",
    },
    {
      id: 2,
      title: "Workshop Kerajinan Anyaman Bambu",
      date: "30 Oktober 2025",
      location: "Desa Mekarsari",
      image: "/images/desa/event-bamboo.jpg",
      description:
        "Pelatihan pembuatan produk anyaman bambu bernilai jual tinggi, langsung bersama pengrajin lokal berpengalaman.",
    },
    {
      id: 3,
      title: "Lomba Inovasi Teknologi Tepat Guna",
      date: "5 November 2025",
      location: "Kecamatan Harapan Jaya",
      image: "/images/desa/event-tech.jpg",
      description:
        "Ayo tampilkan ide teknologi sederhana yang bisa membantu kehidupan masyarakat desa jadi lebih efisien dan modern.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          🎓 Talent & Event Desa
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan berbagai pelatihan, lomba, dan kegiatan pemberdayaan yang
          dapat meningkatkan keterampilan masyarakat desa.
        </p>
      </div>

      {/* Event List */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                📅 {event.date} — 📍 {event.location}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {event.description}
              </p>
              <button
                className="w-full bg-[#383638] text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => navigate(`/talent/${event.id}`)}
              >
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
