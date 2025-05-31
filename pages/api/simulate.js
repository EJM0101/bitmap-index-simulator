import fs from 'fs';

export default function handler(req, res) {
  const { column, method } = req.body;

  const data = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));
  const values = data.map(row => row[column]);

  const start = Date.now();
  let simulation;

  if (method === 'bitmap') {
    simulation = values.reduce((map, val) => {
      map[val] = map[val] || [];
      map[val].push(1);
      return map;
    }, {});
  } else if (method === 'join') {
    simulation = values.map(val => ({ key: val, ref: `id_${val}` }));
  } else {
    simulation = values;
  }

  const end = Date.now();

  return res.status(200).json({
    method,
    timeMs: end - start,
    simulation
  });
}