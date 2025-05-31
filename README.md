# 📊 Simulateur d'Index Bitmap & de Jointure

Ce projet illustre les concepts d’optimisation de requêtes dans les entrepôts de données grâce aux **index bitmap** et **index de jointure**.

## 🚀 Objectifs pédagogiques
- Comprendre le rôle des index pour améliorer la performance.
- Visualiser les gains de temps selon le type d’index.
- Offrir une plateforme interactive pour tester vos propres données.

## 🧱 Fonctionnement
1. Téléversez un fichier CSV (ex: table de ventes).
2. Sélectionnez une colonne à indexer.
3. Lancez une simulation avec :
   - ✅ Index Bitmap
   - 🔁 Index de Jointure
   - ❌ Aucune indexation
4. Observez les temps de traitement simulés.
5. Consultez les représentations visuelles et les explications intégrées.

## 🧠 Concepts
| Type | Explication |
|------|-------------|
| Bitmap | Utilise un vecteur binaire pour représenter les lignes contenant une valeur. |
| Jointure | Associe une table de faits à une dimension via une clé (foreign key). |
| Sans index | Scan linéaire de toutes les lignes, peu performant sur de gros volumes. |

## 🛠️ Technologies
- Next.js 14
- Tailwind CSS
- PapaParse (CSV parser)
- Formidable (file upload)
- Visualisation simple JSON (d3 en extension possible)

## 📂 Structure
- `/pages`: pages Next.js
- `/components`: composants réutilisables
- `/styles`: style global (Tailwind)
- `/api`: upload & simulation