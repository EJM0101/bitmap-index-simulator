import React, { useState } from 'react';

export default function SimulationPanel({ table, onResult }) {
  const [column, setColumn] = useState('');
  const [method, setMethod] = useState('bitmap');

  const handleSimulate = async () => {
    const res = await fetch('/api/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ column, method })
    });
    const json = await res.json();
    onResult(json);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">⚙️ Paramètres de simulation</h2>
      <label className="block mb-1">Colonne cible :</label>
      <select value={column} onChange={e => setColumn(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="">Sélectionner</option>
        {table.length > 0 && Object.keys(table[0]).map(key => (
          <option key={key}>{key}</option>
        ))}
      </select>

      <label className="block mb-1">Méthode :</label>
      <select value={method} onChange={e => setMethod(e.target.value)} className="p-2 border rounded w-full mb-4">
        <option value="bitmap">Index Bitmap</option>
        <option value="join">Index de Jointure</option>
        <option value="none">Sans Index</option>
      </select>

      <button onClick={handleSimulate} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Lancer la simulation
      </button>
    </div>
  );
}