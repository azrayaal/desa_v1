import React from 'react';

interface StrukturPemerintahanProps {
  currentDesa: {
    name: string;
    leader: string;
  };
  activeMeta: string;
}

export const StrukturPemerintahan: React.FC<StrukturPemerintahanProps> = ({
  currentDesa,
  activeMeta
}) => {
  if (activeMeta !== "desa") return null;

  const strukturData = [
    {
      position: "Kepala Desa",
      name: currentDesa.leader,
      description: "Pemimpin tertinggi desa, bertanggung jawab atas pembangunan dan kesejahteraan masyarakat",
      gradient: "from-blue-600 to-blue-700",
      textColor: "text-blue-100",
      descColor: "text-blue-200",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      position: "Sekretaris Desa",
      name: "Budi Santoso",
      description: "Mengelola administrasi desa, dokumentasi, dan koordinasi kegiatan pemerintahan",
      gradient: "from-green-600 to-green-700",
      textColor: "text-green-100",
      descColor: "text-green-200",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      position: "Ketua BPD",
      name: "Siti Nurhaliza",
      description: "Mewakili aspirasi masyarakat, mengawasi kinerja pemerintah desa",
      gradient: "from-purple-600 to-purple-700",
      textColor: "text-purple-100",
      descColor: "text-purple-200",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      position: "Kasi Pemerintahan",
      name: "Ahmad Wijaya",
      description: "Mengelola urusan pemerintahan, keamanan, dan ketertiban masyarakat",
      gradient: "from-orange-600 to-orange-700",
      textColor: "text-orange-100",
      descColor: "text-orange-200",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      position: "Kasi Kesejahteraan",
      name: "Rina Sari",
      description: "Mengkoordinasikan program kesejahteraan, kesehatan, dan pendidikan masyarakat",
      gradient: "from-pink-600 to-pink-700",
      textColor: "text-pink-100",
      descColor: "text-pink-200",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      position: "Kasi Pelayanan",
      name: "Dedi Kurniawan",
      description: "Menyediakan pelayanan publik, administrasi kependudukan, dan perizinan",
      gradient: "from-teal-600 to-teal-700",
      textColor: "text-teal-100",
      descColor: "text-teal-200",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Struktur Pemerintahan Desa {currentDesa.name}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          {strukturData.slice(0, 3).map((item, index) => (
            <div key={index} className={`flex items-center gap-3 p-4 bg-gradient-to-r ${item.gradient} rounded-lg`}>
              <img 
                src={item.image}
                alt={item.position}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className={`${item.textColor} text-sm`}>{item.position}</div>
                <div className="text-white font-semibold">{item.name}</div>
                <div className={`${item.descColor} text-xs`}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {strukturData.slice(3, 6).map((item, index) => (
            <div key={index} className={`flex items-center gap-3 p-4 bg-gradient-to-r ${item.gradient} rounded-lg`}>
              <img 
                src={item.image}
                alt={item.position}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className={`${item.textColor} text-sm`}>{item.position}</div>
                <div className="text-white font-semibold">{item.name}</div>
                <div className={`${item.descColor} text-xs`}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
