import { useState } from "react";
import { useNavigate } from "react-router";

export default function MarketPlace() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Semua Produk");

  const categories = [
    "Semua Produk",
    "Makanan",
    "Kerajinan",
    "Minuman",
    "Pakaian",
    "Pertanian",
  ];

  const products = [
    {
      id: 1,
      name: "Beras Organik Desa",
      price: 85000,
      image: "/images/desa/product-rice.jpg",
      sold: 124,
      location: "Desa Sukamaju",
      category: "Pertanian",
    },
    {
      id: 2,
      name: "Keripik Pisang Manis",
      price: 15000,
      image: "/images/desa/product-snack.jpg",
      sold: 87,
      location: "Desa Harapan",
      category: "Makanan",
    },
    {
      id: 3,
      name: "Anyaman Bambu Khas",
      price: 55000,
      image: "/images/desa/product-bamboo.jpg",
      sold: 42,
      location: "Desa Mekarsari",
      category: "Kerajinan",
    },
    {
      id: 4,
      name: "Kopi Robusta Asli",
      price: 75000,
      image: "/images/desa/product-coffee.jpg",
      sold: 230,
      location: "Desa Kopiluhur",
      category: "Minuman",
    },
    {
      id: 5,
      name: "Madu Hutan Asli",
      price: 120000,
      image: "/images/desa/product-honey.jpg",
      sold: 98,
      location: "Desa Alam Raya",
      category: "Minuman",
    },
    {
      id: 6,
      name: "Kerajinan Tanah Liat",
      price: 65000,
      image: "/images/desa/product-clay.jpg",
      sold: 33,
      location: "Desa Sentana",
      category: "Kerajinan",
    },
  ];

  const filteredProducts =
    selectedCategory === "Semua Produk"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen text-gray-200 bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-6 lg:px-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-1">Marketplace Desa</h1>
          <p className="text-white">
            Dukung ekonomi lokal dengan membeli produk unggulan masyarakat desa.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <button className="text-white flex items-center gap-2 hover:text-black">
            <i className="ri-equalizer-line"></i> Filter
          </button>
          <div className="relative">
            <select
              className="border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:outline-none "
              defaultValue="Terbaru"
            >
              <option className="text-gray-700" value="Terbaru ">
                Urutkan: Terbaru
              </option>
              <option className="text-gray-700" value="Terlaris">
                Terlaris
              </option>
              <option className="text-gray-700" value="Termurah">
                Termurah
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {/* Sidebar Filter */}
        <aside className="lg:col-span-1 border-t border-gray-200 pt-4">
          <h2 className="text-lg font-semibold mb-4">Kategori</h2>
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer text-sm font-medium hover:text-[#9c9c9c] ${
                  selectedCategory === cat
                    ? "text-[#9c9c9c] font-semibold"
                    : "text-white"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="lg:col-span-4">
          <h2 className="text-xl font-semibold mb-6">
            {selectedCategory} ({filteredProducts.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                role="button"
                onClick={() => navigate(`/marketplace/${product.id}`)}
                className="group bg-gray-50 hover:bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm text-gray-900 font-semibold line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-800 text-xs mb-1">
                    {product.location}
                  </p>
                  <p className="text-[#383638] font-bold text-sm">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Terjual {product.sold}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
