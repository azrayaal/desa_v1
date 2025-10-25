import React from 'react';

interface DesaFooterProps {
  currentDesa: {
    name: string;
    population: number;
    area: string;
    leader: string;
    achievements: string[];
  };
  activeMeta: string;
}

export const DesaFooter: React.FC<DesaFooterProps> = ({
  currentDesa,
  activeMeta
}) => {
  if (activeMeta === "M" || activeMeta === "E" || activeMeta === "A") return null;

  return (
    <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span>👥</span>
            <span>Populasi: {currentDesa.population.toLocaleString()} jiwa</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏠</span>
            <span>Luas: {currentDesa.area}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏆</span>
            <span>{currentDesa.achievements[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Desa {currentDesa.name}</span>
          </div>
        </div>
        <div className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString('id-ID', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
          })}, {new Date().toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })} WIB
        </div>
      </div>
    </div>
  );
};
