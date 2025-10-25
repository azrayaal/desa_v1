import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function MarketPlaceForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Makanan",
    location: "",
    description: "",
  });

  const categories = [
    "Makanan",
    "Minuman",
    "Kerajinan",
    "Pakaian",
    "Pertanian",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produk baru ditambahkan:", formData);
    alert("Produk berhasil disimpan!");
    navigate("/marketplace");
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-3xl bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-xl p-10 border border-gray-700/50 backdrop-blur-sm ">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          <div className="text-white">🛍️ Tambah Produk Marketplace Desa</div>
        </h1>
        <p className="text-center text-gray-300 mb-10 text-sm">
          Lengkapi informasi produk desa agar masyarakat dapat mengenal dan
          membeli produk unggulan Anda.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Produk */}
          <div>
            <label className="block font-semibold mb-2">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Contoh: Kopi Robusta Bojong Gede"
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Harga Produk */}
          <div>
            <label className="block font-semibold mb-2">Harga (Rp)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Contoh: 75000"
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block font-semibold mb-2">Kategori</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-gray-800">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Lokasi */}
          <div>
            <label className="block font-semibold mb-2">Lokasi Desa</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Contoh: Desa Bojong Gede"
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Upload Gambar */}
          <div>
            <label className="block font-semibold mb-2">Gambar Produk</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-gray-300 focus:ring-2 focus:ring-[#9c9c9c] outline-none file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-[#383638] file:text-white hover:file:bg-black"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview Produk"
                className="mt-4 w-40 h-40 object-cover rounded-lg border border-gray-600 shadow-sm"
              />
            )}
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block font-semibold mb-2">Deskripsi Produk</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Ceritakan keunggulan produk ini..."
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            ></textarea>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/marketplace")}
              className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#383638] text-white font-semibold py-2 px-6 rounded-lg hover:bg-black transition"
            >
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
