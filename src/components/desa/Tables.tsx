import React from 'react';

interface TablesProps {
  topPeopleData: Array<{ name: string; people: number; total: number }>;
  recentArticles: Array<{ title: string; source: string; time: string }>;
  wordCloud: string[];
  activeMeta: string;
  currentDesa: { name: string };
}

export const Tables: React.FC<TablesProps> = ({
  topPeopleData,
  recentArticles,
  wordCloud,
  activeMeta,
  currentDesa
}) => {
  return (
    <>
      {/* Top People Table */}
      {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "A" && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            {activeMeta === "desa" ? `Tokoh Desa Terpopuler ${currentDesa.name}` : `Tokoh ${activeMeta} Terpopuler`}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">No</th>
                  <th className="text-left py-2">Nama</th>
                  <th className="text-left py-2">Mention</th>
                  <th className="text-left py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {topPeopleData.map((person, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2">{index + 1}</td>
                    <td className="py-2">{person.name}</td>
                    <td className="py-2 text-blue-400">{person.people}</td>
                    <td className="py-2 text-green-400">{person.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Recent Articles */}
      {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "A" && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            {activeMeta === "desa" ? `Berita Terkini Desa ${currentDesa.name}` : `Berita Terkini ${activeMeta}`}
          </h3>
          <div className="space-y-4">
            {recentArticles.map((article, index) => (
              <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                <h4 className="font-medium text-white mb-2">{article.title}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{article.source}</span>
                  <span>{article.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Word Cloud */}
      {activeMeta !== "M" && activeMeta !== "E" && activeMeta !== "A" && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">
            {activeMeta === "desa" ? `Kata Kunci Populer ${currentDesa.name}` : `Kata Kunci Populer ${activeMeta}`}
          </h3>
          <div className="flex flex-wrap gap-2">
            {wordCloud.map((word, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
