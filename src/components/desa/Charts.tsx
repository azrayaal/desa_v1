import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartsProps {
  issuesData: Array<{ name: string; value: number; color: string }>;
  sentimentData: Array<{ sentiment: string; value: number }>;
  activeMeta: string;
  currentDesa: { name: string };
}

export const Charts: React.FC<ChartsProps> = ({
  issuesData,
  sentimentData,
  activeMeta,
  currentDesa
}) => {
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <>
      {/* Share of Issues Pie Chart */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            {activeMeta === "desa" ? `Aspek: ${issuesData[0]?.name || 'All Issues'}` : `${activeMeta} Category: ${issuesData[0]?.name || 'All Issues'}`}
          </h3>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={issuesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {issuesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-4 mt-4">
          {issuesData.map((issue, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-sm text-gray-300">{issue.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sentiment Bar Chart */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {activeMeta === "desa" ? `Sentimen Masyarakat ${currentDesa.name}` : `Sentimen ${activeMeta} Desa ${currentDesa.name}`}
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sentimentData} layout="horizontal">
              <XAxis type="number" domain={[0, 6000]} />
              <YAxis type="category" dataKey="sentiment" />
              <Tooltip />
              <Bar dataKey="value" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-300">Positif</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-300">Netral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-300">Negatif</span>
          </div>
        </div>
      </div>
    </>
  );
};
