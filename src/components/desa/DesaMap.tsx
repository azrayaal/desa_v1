import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';

interface DesaMapProps {
  desaData: Record<string, any>;
  selectedDesa: string;
  setSelectedDesa: (desa: string) => void;
  activeMeta: string;
}

export const DesaMap: React.FC<DesaMapProps> = ({
  desaData,
  selectedDesa,
  setSelectedDesa,
  activeMeta
}) => {
  if (activeMeta === "M" || activeMeta === "E" || activeMeta === "A") return null;

  // Fix untuk icon marker
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });

  const desaLocations = Object.values(desaData).map((desa: any) => ({
    name: desa.name,
    lat: desa.lat,
    lng: desa.lng,
    population: desa.population,
    area: desa.area,
    leader: desa.leader
  }));

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Peta Lokasi Desa</h3>
      <div className="h-96">
        <MapContainer
          center={[desaData[selectedDesa]?.lat || -6.5, desaData[selectedDesa]?.lng || 106.8]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="bottomright" />
          {desaLocations.map((desa, index) => (
            <Marker key={index} position={[desa.lat, desa.lng]}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{desa.name}</h3>
                  <p className="text-sm text-gray-600">👥 {desa.population} jiwa</p>
                  <p className="text-sm text-gray-600">🏠 {desa.area}</p>
                  <p className="text-sm text-gray-600">👑 {desa.leader}</p>
                  <button
                    onClick={() => setSelectedDesa(desa.name)}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Pilih Desa
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
