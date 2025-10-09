"use client";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const sectors = [
  "Ekonomi",
  "Kesehatan",
  "Pendidikan",
  "Infrastruktur",
  "Lingkungan",
];

const dataBySector = {
  Ekonomi: {
    category: [
      { name: "UMKM", value: 45 },
      { name: "Pertanian", value: 25 },
      { name: "Perdagangan", value: 30 },
    ],
    places: [
      { name: "Desa Sukamaju", value: 85 },
      { name: "Desa Mekarsari", value: 65 },
      { name: "Desa Harapan Jaya", value: 55 },
    ],
  },
  Kesehatan: {
    category: [
      { name: "Posyandu", value: 40 },
      { name: "Puskesmas", value: 35 },
      { name: "Kampanye Sehat", value: 25 },
    ],
    places: [
      { name: "Desa Mekarsari", value: 90 },
      { name: "Desa Sukamaju", value: 70 },
      { name: "Desa Bahagia", value: 60 },
    ],
  },
  Pendidikan: {
    category: [
      { name: "SD", value: 30 },
      { name: "SMP", value: 40 },
      { name: "Pelatihan", value: 30 },
    ],
    places: [
      { name: "Desa Harapan Jaya", value: 80 },
      { name: "Desa Cemerlang", value: 50 },
      { name: "Desa Sukamaju", value: 45 },
    ],
  },
  Infrastruktur: {
    category: [
      { name: "Jalan", value: 35 },
      { name: "Irigasi", value: 40 },
      { name: "Jembatan", value: 25 },
    ],
    places: [
      { name: "Desa Mekarsari", value: 90 },
      { name: "Desa Bahagia", value: 70 },
      { name: "Desa Sukamaju", value: 60 },
    ],
  },
  Lingkungan: {
    category: [
      { name: "Kebersihan", value: 40 },
      { name: "Penghijauan", value: 35 },
      { name: "Sampah", value: 25 },
    ],
    places: [
      { name: "Desa Bahagia", value: 95 },
      { name: "Desa Harapan Jaya", value: 75 },
      { name: "Desa Mekarsari", value: 65 },
    ],
  },
};

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#E91E63", "#9C27B0"];

export default function DesaDashboard() {
  const [selectedSector, setSelectedSector] = useState("Ekonomi");

  const currentData = dataBySector[selectedSector];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 flex flex-col md:flex-row gap-6 px-6">
      {/* Kiri: Peta / Demografi */}
      <div className="bg-white shadow-md rounded-xl p-4 w-full md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🗺️ Demografi Kawasan Desa
        </h2>
        <div className="flex-1 flex justify-center items-center border rounded-lg bg-gray-50">
          <img
            src="/images/desa/map-desa.png"
            alt="Peta Desa"
            className="object-contain h-[400px] w-full"
          />
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center">
          Contoh pemetaan wilayah desa. Area hijau menunjukkan aktivitas
          positif, merah negatif.
        </p>
      </div>

      {/* Kanan: Informasi & Filter */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-1/2">
        <div className="flex flex-wrap gap-2 mb-6">
          {sectors.map((sector) => (
            <button
              key={sector}
              className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                selectedSector === sector
                  ? "bg-[#383638] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedSector(sector)}
            >
              {sector}
            </button>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">
          📊 Data Sektor: {selectedSector}
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Pie Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentData.category}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {currentData.category.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-gray-500 mt-2">
              Distribusi kategori dalam sektor {selectedSector}
            </p>
          </div>

          {/* Bar Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData.places}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#FFC107" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-gray-500 mt-2">
              Tingkat aktivitas per desa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
