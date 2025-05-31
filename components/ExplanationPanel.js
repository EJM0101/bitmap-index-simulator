import React from 'react';

export default function ExplanationPanel() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">🧠 Concepts Pédagogiques</h2>
      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
        <li><strong>Index Bitmap :</strong> Accélère les recherches sur des colonnes à faible cardinalité (ex: sexe, région).</li>
        <li><strong>Index de Jointure :</strong> Précalcule les relations entre tables, utile pour les entrepôts de données.</li>
        <li><strong>Sans Index :</strong> La base scanne ligne par ligne, ce qui est lent avec beaucoup de données.</li>
        <li><strong>Simulation :</strong> Compare les performances de chaque approche sur vos données importées.</li>
      </ul>
    </div>
  );
}