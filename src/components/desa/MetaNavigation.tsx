import React from 'react';

interface MetaNavigationProps {
  activeMeta: string;
  setActiveMeta: (meta: string) => void;
}

export const MetaNavigation: React.FC<MetaNavigationProps> = ({
  activeMeta,
  setActiveMeta
}) => {
  const metaOptions = [
    { id: "desa", name: "Dataset Desa", color: "bg-blue-600" },
    { id: "M", name: "M", color: "bg-green-600" },
    { id: "E", name: "E", color: "bg-yellow-600" },
    { id: "T", name: "T", color: "bg-purple-600" },
    { id: "A", name: "A", color: "bg-pink-600" }
  ];

  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-3">
      <div className="flex items-center justify-center gap-2">
        {metaOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveMeta(option.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeMeta === option.id
                ? `${option.color} text-white`
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {option.id === "desa" ? (
              <div className="flex items-center gap-2">
                <img 
                  src="/images/desaicon.svg" 
                  alt="Desa Icon" 
                  className="w-5 h-5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {option.name}
              </div>
            ) : (
              option.name
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
