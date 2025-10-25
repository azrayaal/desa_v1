import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function TalentTable() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Pelatihan Digital Marketing untuk UMKM Desa",
      date: "25 Oktober 2025",
      location: "Balai Desa Sukamaju",
    },
    {
      id: 2,
      title: "Workshop Kerajinan Anyaman Bambu",
      date: "30 Oktober 2025",
      location: "Desa Mekarsari",
    },
    {
      id: 3,
      title: "Lomba Inovasi Teknologi Tepat Guna",
      date: "5 November 2025",
      location: "Kecamatan Harapan Jaya",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus event ini?")) {
      setEvents(events.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-black">📋 Daftar Event Desa</div>
        <button
          onClick={() => navigate("/talent/add")}
          className="bg-[#383638] hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          + Tambah Event
        </button>
      </div>
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-300 border-b border-gray-700">
                <th className="p-3">#</th>
                <th className="p-3">Judul</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Lokasi</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={event.id}
                  className="hover:bg-gray-700/30 border-b border-gray-700"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.location}</td>
                  <td className="p-3 flex justify-center gap-2">
                    <button
                      onClick={() => navigate(`/talent/${event.id}`)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => navigate(`/talent/edit/${event.id}`)}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
