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

export default function SpreadDetail() {
  const { id } = useParams();

  const detailData = [
    { name: "Sales", value: 32175 },
    { name: "Potential", value: 95828 },
    { name: "Prediction", value: 45020 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Detail Persebaran: {id?.toUpperCase()}
        </h1>
        <p className="text-gray-600 mb-6">
          Analisis data penjualan dan potensi ekonomi di wilayah {id}.
        </p>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={detailData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#2ecc71" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
