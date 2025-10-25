import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router";

export default function Sentiment() {
  const navigate = useNavigate();

  const destinations = [
    "Sukamaju",
    "Harapan Jaya",
    "Mekarsari",
    "Alam Raya",
    "Sentana",
    "Karanganyar",
  ];

  const sentimentData = [
    { name: "Akomodasi", Positif: 446, Negatif: 13 },
    { name: "Makanan", Positif: 230, Negatif: 10 },
    { name: "Keamanan", Positif: 679, Negatif: 31 },
    { name: "Akses", Positif: 759, Negatif: 30 },
    { name: "Kebersihan", Positif: 31, Negatif: 1 },
    { name: "Pelayanan", Positif: 782, Negatif: 36 },
  ];

  const accessibilityData = [
    { name: "Ciqp Bandara", Positif: 687, Negatif: 203 },
    { name: "Ciqp Pelabuhan", Positif: 166, Negatif: 345 },
    { name: "Kenyamanan Trans", Positif: 872, Negatif: 92 },
    { name: "Jalan Desa", Positif: 760, Negatif: 316 },
  ];

  const amenitiesData = [
    { name: "Akomodasi", Positif: 999, Negatif: 89 },
    { name: "ATM & Money Changer", Positif: 930, Negatif: 40 },
    { name: "Toilet", Positif: 532, Negatif: 342 },
  ];

  const attractionData = [
    { name: "Pantai", Positif: 1240, Negatif: 78 },
    { name: "Air Terjun", Positif: 454, Negatif: 56 },
    { name: "Gunung", Positif: 564, Negatif: 63 },
    { name: "Kebun", Positif: 330, Negatif: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          DESTINATION
        </h2>
        <ul className="space-y-2 overflow-y-auto max-h-[80vh]">
          {destinations.map((desa, i) => (
            <li
              key={desa}
              className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md text-gray-700 text-sm flex items-center justify-between"
              onClick={() => navigate(`/sentiment/${desa.toLowerCase()}`)}
            >
              {i + 1}. {desa}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-[#3B873E] text-white px-4 py-3 rounded-md mb-6 text-lg font-semibold">
          LOMBOK
        </div>

        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Sentiment of This Month
        </h3>
        <div className="bg-white p-4 rounded-lg shadow mb-10">
          <ResponsiveContainer width="100%" height={300}>
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

        {/* 3 Charts */}
        <div className="grid md:grid-cols-3 gap-6">
          <ChartCard title="Accessibilities" data={accessibilityData} />
          <ChartCard title="Amenities" data={amenitiesData} />
          <ChartCard title="Attraction" data={attractionData} />
        </div>
      </main>
    </div>
  );
}

const ChartCard = ({ title, data }: { title: string; data: any[] }) => (
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
