// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import { useState } from "react";
// import "leaflet/dist/leaflet.css";
// import { useNavigate } from "react-router";

// export default function SpreadDashboard() {
//   const navigate = useNavigate();
//   const [selectedProduct, setSelectedProduct] = useState("Produk A");

//   // Dummy data KPI
//   const stats = [
//     { title: "Actual Sales", value: "Rp 32.175", color: "bg-green-600" },
//     { title: "Sales Potential", value: "Rp 95.828", color: "bg-green-700" },
//     { title: "Sales Prediction", value: "Rp 45.020", color: "bg-green-800" },
//   ];

//   // Dummy GeoJSON (contoh kecil)
//   const indonesiaGeoJson = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         properties: { name: "Aceh", code: "aceh" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [95, 5.5],
//               [96, 5.5],
//               [96, 4],
//               [95, 4],
//               [95, 5.5],
//             ],
//           ],
//         },
//       },
//       {
//         type: "Feature",
//         properties: { name: "Jawa Barat", code: "jawabarat" },
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [106, -6],
//               [108, -6],
//               [108, -7.5],
//               [106, -7.5],
//               [106, -6],
//             ],
//           ],
//         },
//       },
//     ],
//   };

//   const onRegionClick = (e: any) => {
//     const region = e.target.feature.properties;
//     navigate(`/spread/${region.code}`);
//   };

//   const onEachFeature = (feature: any, layer: any) => {
//     layer.on({
//       click: onRegionClick,
//       mouseover: (e: any) => {
//         const layer = e.target;
//         layer.setStyle({ fillColor: "#2ecc71", fillOpacity: 0.5 });
//       },
//       mouseout: (e: any) => {
//         const layer = e.target;
//         layer.setStyle({ fillColor: "#FF0000", fillOpacity: 0.2 });
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-700 text-white p-4 flex justify-between items-center">
//         <h1 className="text-xl font-semibold">Dashboard Persebaran Desa</h1>
//         <div className="flex items-center gap-4">
//           <select
//             value={selectedProduct}
//             onChange={(e) => setSelectedProduct(e.target.value)}
//             className="bg-white text-gray-700 px-3 py-1 rounded"
//           >
//             <option>Produk A</option>
//             <option>Produk B</option>
//             <option>Produk C</option>
//           </select>

//           <input
//             type="month"
//             className="bg-white text-gray-700 px-3 py-1 rounded"
//             defaultValue="2025-10"
//           />
//         </div>
//       </header>

//       {/* KPI Section */}
//       <div className="grid md:grid-cols-3 gap-4 p-6">
//         {stats.map((s) => (
//           <div
//             key={s.title}
//             className={`${s.color} text-white rounded-md p-5 shadow-md text-center`}
//           >
//             <p className="text-sm opacity-80">{s.title}</p>
//             <h2 className="text-2xl font-bold mt-1">{s.value}</h2>
//             <p className="text-xs opacity-80 mt-1">in Million</p>
//           </div>
//         ))}
//       </div>

//       {/* Map */}
//       <div className="p-6">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <MapContainer
//             center={[-2, 118]}
//             zoom={5}
//             style={{ height: "70vh", width: "100%" }}
//           >
//             <TileLayer
//               attribution="&copy; OpenStreetMap"
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <GeoJSON
//               data={indonesiaGeoJson as any}
//               style={() => ({
//                 color: "#FF0000",
//                 weight: 2,
//                 fillOpacity: 0.2,
//               })}
//               onEachFeature={onEachFeature}
//             />
//           </MapContainer>
//         </div>
//         <p className="text-center text-gray-600 mt-2">Potential Gap Analysis</p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./spread.css"; // untuk style tambahan

const desaData = [
  { name: "Desa Bojong Gede", sentiment: "Positif", aktivitas: 120 },
  { name: "Desa Waringin Jaya", sentiment: "Netral", aktivitas: 90 },
  { name: "Desa Cimanggis", sentiment: "Negatif", aktivitas: 60 },
  { name: "Desa Kedung Waringin", sentiment: "Positif", aktivitas: 100 },
];

// GeoJSON sederhana untuk 4 desa (mock data)
const geoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Desa Bojong Gede" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.804, -6.482],
            [106.814, -6.482],
            [106.814, -6.472],
            [106.804, -6.472],
            [106.804, -6.482],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Desa Waringin Jaya" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.814, -6.482],
            [106.824, -6.482],
            [106.824, -6.472],
            [106.814, -6.472],
            [106.814, -6.482],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Desa Cimanggis" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.804, -6.492],
            [106.814, -6.492],
            [106.814, -6.482],
            [106.804, -6.482],
            [106.804, -6.492],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Desa Kedung Waringin" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [106.814, -6.492],
            [106.824, -6.492],
            [106.824, -6.482],
            [106.814, -6.482],
            [106.814, -6.492],
          ],
        ],
      },
    },
  ],
};

export default function SpreadDashboard() {
  const [selectedDesa, setSelectedDesa] = useState(desaData[0]);

  const onEachFeature = (feature, layer) => {
    const name = feature.properties.name;
    layer.on({
      click: () => {
        const desa = desaData.find((d) => d.name === name);
        setSelectedDesa(desa);
      },
    });
    layer.bindPopup(`<b>${name}</b>`);
  };

  const getColorBySentiment = (sentiment) => {
    switch (sentiment) {
      case "Positif":
        return "#22c55e";
      case "Negatif":
        return "#ef4444";
      default:
        return "#eab308";
    }
  };

  const style = (feature) => {
    const desa = desaData.find((d) => d.name === feature.properties.name);
    return {
      color: "#fff",
      weight: 1.5,
      fillColor: getColorBySentiment(desa?.sentiment),
      fillOpacity: 0.6,
    };
  };

  return (
    <div className="app">
      <h1>🗺️ Analisis Persebaran & Sentimen - Kawasan Bojong Gede</h1>

      <div className="content">
        <div className="map">
          <MapContainer
            center={[-6.48, 106.81]}
            zoom={14}
            style={{ height: "450px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={geoJsonData}
              style={style}
              onEachFeature={onEachFeature}
            />
          </MapContainer>
        </div>

        <div className="detail">
          <h2>📍 Detail Desa</h2>
          <p>
            <b>Nama:</b> {selectedDesa.name}
          </p>
          <p>
            <b>Sentimen:</b> {selectedDesa.sentiment}
          </p>
          <p>
            <b>Aktivitas:</b> {selectedDesa.aktivitas}
          </p>
          <p>
            <b>Deskripsi:</b> Desa ini termasuk dalam kawasan Bojong Gede, Jawa
            Barat. Sentimen masyarakat {selectedDesa.sentiment.toLowerCase()}{" "}
            dengan aktivitas sebanyak {selectedDesa.aktivitas}. Klik desa lain
            di peta untuk melihat datanya.
          </p>
        </div>
      </div>
    </div>
  );
}
