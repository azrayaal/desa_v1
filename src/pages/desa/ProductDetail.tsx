import { useParams, useNavigate } from "react-router";

const PRODUCTS = [
  {
    id: 1,
    name: "Beras Organik Desa",
    price: 85000,
    image: "/images/desa/product-rice.jpg",
    sold: 124,
    location: "Desa Sukamaju",
    description:
      "Beras organik hasil panen lokal. Diproses tradisional tanpa bahan kimia, cocok untuk keluarga sehat.",
  },
  {
    id: 2,
    name: "Keripik Pisang Manis",
    price: 15000,
    image: "/images/desa/product-snack.jpg",
    sold: 87,
    location: "Desa Harapan",
    description:
      "Keripik pisang renyah dengan rasa manis alami, buatan UMKM lokal.",
  },
  {
    id: 3,
    name: "Anyaman Bambu Khas",
    price: 55000,
    image: "/images/desa/product-bamboo.jpg",
    sold: 42,
    location: "Desa Mekarsari",
    description:
      "Anyaman bambu serbaguna, cocok untuk hiasan atau keperluan rumah tangga.",
  },
  {
    id: 4,
    name: "Kopi Robusta Asli",
    price: 75000,
    image: "/images/desa/product-coffee.jpg",
    sold: 230,
    location: "Desa Kopiluhur",
    description:
      "Kopi robusta hasil petani lokal, dipanggang dengan metode tradisional.",
  },
  {
    id: 5,
    name: "Madu Hutan Asli",
    price: 120000,
    image: "/images/desa/product-honey.jpg",
    sold: 98,
    location: "Desa Alam Raya",
    description:
      "Madu murni dari hutan, tanpa penambahan gula. Cocok untuk kesehatan.",
  },
  {
    id: 6,
    name: "Kerajinan Tanah Liat",
    price: 65000,
    image: "/images/desa/product-clay.jpg",
    sold: 33,
    location: "Desa Sentana",
    description:
      "Keramik dan gerabah buatan tangan, unik dan bernilai seni tinggi.",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const product = PRODUCTS.find((p) => p.id === pid);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Produk tidak ditemukan</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {product.name}
            </h1>
            <p className="text-orange-400 font-bold text-xl mb-4">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            <p className="text-sm text-gray-200 mb-4">{product.description}</p>
            <p className="text-xs text-gray-300 mb-6">
              Lokasi: {product.location}
            </p>

            <div className="flex gap-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                Beli Sekarang
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
