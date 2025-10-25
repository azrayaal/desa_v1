import React, { useState } from 'react';
import { 
  DesaHeader, 
  MetaNavigation, 
  StrukturPemerintahan, 
  Charts, 
  Tables, 
  DesaMap, 
  DesaFooter, 
  MetaSections 
} from '../../components/desa';
import { desaData, metaData } from '../../constants/desaData';
import { desaProducts, desaExports, desaTalents } from '../../constants/metaData';

export default function DesaDashboardRefactored() {
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedDesa, setSelectedDesa] = useState("Bojonggede");
  const [activeMeta, setActiveMeta] = useState("desa");

  // Get current data based on selected desa
  const currentDesa = desaData[selectedDesa];
  const currentMeta = metaData[activeMeta as keyof typeof metaData];
  const currentProducts = desaProducts[selectedDesa];
  const currentExports = desaExports[selectedDesa];
  const currentTalents = desaTalents[selectedDesa];

  // Prepare data for charts and tables
  const issuesData = activeMeta === "desa" ? currentDesa.issues : currentMeta?.issues || [];
  const topPeopleData = activeMeta === "desa" ? currentDesa.topPeople : currentMeta?.topPeople || [];
  const sentimentData = activeMeta === "desa" 
    ? [
        { sentiment: "Positif", value: currentDesa.sentiment.positive },
        { sentiment: "Netral", value: currentDesa.sentiment.neutral },
        { sentiment: "Negatif", value: currentDesa.sentiment.negative }
      ]
    : currentMeta 
    ? [
        { sentiment: "Positif", value: currentMeta.sentiment.positive },
        { sentiment: "Netral", value: currentMeta.sentiment.neutral },
        { sentiment: "Negatif", value: currentMeta.sentiment.negative }
      ]
    : [];
  const recentArticles = activeMeta === "desa" ? currentDesa.articles : currentMeta?.articles || [];
  const wordCloud = activeMeta === "desa" ? currentDesa.wordCloud : [];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <DesaHeader
        currentDesa={currentDesa}
        activeMeta={activeMeta}
        currentMeta={currentMeta}
        selectedDesa={selectedDesa}
        setSelectedDesa={setSelectedDesa}
        selectedIssue={selectedIssue}
        setSelectedIssue={setSelectedIssue}
        setActiveMeta={setActiveMeta}
      />

      {/* META Navigation */}
      <MetaNavigation
        activeMeta={activeMeta}
        setActiveMeta={setActiveMeta}
      />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Struktur Pemerintahan */}
            <StrukturPemerintahan
              currentDesa={currentDesa}
              activeMeta={activeMeta}
            />

            {/* Charts */}
            <Charts
              issuesData={issuesData}
              sentimentData={sentimentData}
              activeMeta={activeMeta}
              currentDesa={currentDesa}
            />

            {/* Tables */}
            <Tables
              topPeopleData={topPeopleData}
              recentArticles={recentArticles}
              wordCloud={wordCloud}
              activeMeta={activeMeta}
              currentDesa={currentDesa}
            />
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* META Sections */}
            <MetaSections
              activeMeta={activeMeta}
              currentDesa={currentDesa}
              currentProducts={currentProducts}
              currentExports={currentExports}
              currentTalents={currentTalents}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Map */}
            <DesaMap
              desaData={desaData}
              selectedDesa={selectedDesa}
              setSelectedDesa={setSelectedDesa}
              activeMeta={activeMeta}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <DesaFooter
        currentDesa={currentDesa}
        activeMeta={activeMeta}
      />
    </div>
  );
}
