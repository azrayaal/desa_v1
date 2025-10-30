
import React from 'react';
import { LuRefreshCw } from "react-icons/lu";

interface DesaHeaderProps {
  currentDesa: {
    name: string;
  };
  activeMeta: string;
  currentMeta?: {
    name: string;
  };
  selectedDesa: string;
  setSelectedDesa: (desa: string) => void;
  selectedIssue: string;
  setSelectedIssue: (issue: string) => void;
}

export const DesaHeader: React.FC<DesaHeaderProps> = ({
  currentDesa,
  activeMeta,
  currentMeta,
  selectedDesa,
  setSelectedDesa,
  selectedIssue,
  setSelectedIssue
}) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-300">
          📍 {currentDesa.name}, Kab. Bogor, Jawa Barat
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-white">
          {activeMeta === "desa" ? `Dashboard Desa ${currentDesa.name}` : `Dashboard ${currentMeta?.name}`}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {activeMeta === "desa" ? (
          <select
            value={selectedDesa}
            onChange={(e) => setSelectedDesa(e.target.value)}
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Bojonggede">Bojonggede</option>
            <option value="Megamendung">Megamendung</option>
            <option value="Cibuluh">Cibuluh</option>
          </select>
        ) : (
          <select
            value={selectedIssue}
            onChange={(e) => setSelectedIssue(e.target.value)}
            className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All Issues">All Issues</option>
            <option value="Infrastruktur">Infrastruktur</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Kesehatan">Kesehatan</option>
            <option value="Pendidikan">Pendidikan</option>
          </select>
        )}
        <button className="px-4 py-2 text-sm text-white">
          <LuRefreshCw />
        </button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Logout
        </button>
      </div>
    </div>
    </div>
  );
};
