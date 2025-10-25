import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SentimentDetail() {
  const { id } = useParams();

  const detailData = [
    { name: "Akomodasi", Positif: 320, Negatif: 12 },
    { name: "Makanan", Positif: 215, Negatif: 20 },
    { name: "Akses", Positif: 540, Negatif: 30 },
    { name: "Keamanan", Positif: 498, Negatif: 40 },
    { name: "Pelayanan", Positif: 612, Negatif: 28 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Sentiment Detail: {id?.toUpperCase()}
        </h1>
        <p className="text-gray-600 mb-6">
          Analisis sentimen masyarakat terhadap layanan dan fasilitas di {id}.
        </p>

        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Rangkuman Sentimen
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={detailData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Positif" stackId="a" fill="#4CAF50" />
              <Bar dataKey="Negatif" stackId="a" fill="#E53935" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
