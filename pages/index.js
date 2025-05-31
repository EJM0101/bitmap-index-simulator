import React, { useState } from 'react';
import DataUploader from '@/components/DataUploader';
import SimulationPanel from '@/components/SimulationPanel';
import IndexVisualizer from '@/components/IndexVisualizer';
import ExplanationPanel from '@/components/ExplanationPanel';

export default function Home() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-6 py-10 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Titre principal */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
            ⚡ Simulateur d’Index Bitmap & de Jointure
          </h1>
          <p className="text-gray-600 text-lg">
            Testez visuellement la performance des requêtes grâce à différents types d'index.
          </p>
        </header>

        {/* Explication pédagogique */}
        <ExplanationPanel />

        {/* Téléversement de données */}
        <DataUploader onDataLoaded={setData} />

        {/* Interface de simulation */}
        {data.length > 0 && (
          <SimulationPanel table={data} onResult={setResult} />
        )}

        {/* Visualisation des résultats */}
        <IndexVisualizer result={result} />

        {/* Footer pédagogique */}
        <footer className="text-xs text-center text-gray-400 pt-8">
          Projet pédagogique • Optimisation des requêtes en entrepôt de données
        </footer>
      </div>
    </div>
  );
}