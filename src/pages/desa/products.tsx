import { useNavigate } from "react-router";

export default function Products() {
  const navigate = useNavigate();
  const products = [
    {
      title: "Dashboard Desa",
      description: "Solusi digital untuk administrasi desa yang efisien.",
      link: "/desa",
    },
    {
      title: "Marketplace Desa",
      description: "Platform transparan untuk pelaporan keuangan desa.",
      link: "/marketplace",
    },
    {
      title: "Talent Desa",
      description:
        "Sistem analisis data untuk pengambilan keputusan lebih baik.",
      link: "/talent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6">
      <div className="text-center mb-12 text-white">
        <h1 className="text-5xl font-bold mb-4">Produk Unggulan Desa</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Tiga produk utama yang membantu pengelolaan desa menjadi lebih efektif
          dan modern.
        </p>
      </div>

      {/* Grid 3 Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
            <p className="text-white/70 mb-6">{product.description}</p>
            <button
              onClick={() => navigate(product.link)}
              className="bg-white cursor-pointer text-gray-900 font-semibold py-2 px-5 rounded-md hover:bg-gray-200 transition"
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
