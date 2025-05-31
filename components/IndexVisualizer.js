import React from 'react';

export default function IndexVisualizer({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">📊 Résultat de la simulation</h2>
      <p className="mb-2">Méthode : <strong>{result.method}</strong></p>
      <p>Temps estimé : <strong>{result.timeMs} ms</strong></p>
      <pre className="mt-4 p-2 bg-gray-100 rounded overflow-auto text-sm">{JSON.stringify(result.simulation, null, 2)}</pre>
    </div>
  );
}