import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function TalentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    image: "",
    description: "",
  });

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
    console.log("Event baru ditambahkan:", formData);
    alert("Event berhasil disimpan!");
    navigate("/talent");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent py-16 px-4 text-white">
      <div className="w-full max-w-3xl bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-xl p-10 border border-gray-700/50 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center mb-8">
          🎓 Tambah Event Desa
        </h1>
        <p className="text-center text-gray-300 mb-10 text-sm">
          Lengkapi informasi kegiatan untuk mendukung pengembangan potensi
          masyarakat desa.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul Event */}
          <div>
            <label className="block font-semibold mb-2">Judul Event</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Contoh: Workshop Digital Marketing"
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Tanggal */}
          <div>
            <label className="block font-semibold mb-2">Tanggal</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Lokasi */}
          <div>
            <label className="block font-semibold mb-2">Lokasi</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Contoh: Balai Desa Sukamaju"
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            />
          </div>

          {/* Gambar Event */}
          <div>
            <label className="block font-semibold mb-2">Gambar Event</label>
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
                alt="Preview Event"
                className="mt-4 w-40 h-40 object-cover rounded-lg border border-gray-600 shadow-sm"
              />
            )}
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block font-semibold mb-2">Deskripsi</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Tuliskan detail kegiatan, manfaat, dan siapa yang dapat ikut serta..."
              className="w-full rounded-md bg-gray-800 border border-gray-600 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#9c9c9c] outline-none"
            ></textarea>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/talent")}
              className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#383638] text-white font-semibold py-2 px-6 rounded-lg hover:bg-black transition"
            >
              Simpan Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
