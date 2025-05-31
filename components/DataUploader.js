import React from 'react';

export default function DataUploader({ onDataLoaded }) {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/data', {
      method: 'POST',
      body: formData
    });

    const json = await res.json();
    onDataLoaded(json.data);
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold text-indigo-600 mb-2">📁 Téléversez un fichier CSV</h2>
      <input type="file" accept=".csv" onChange={handleChange} className="block" />
    </div>
  );
}