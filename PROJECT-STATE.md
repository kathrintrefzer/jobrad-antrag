# PROJECT-STATE.md

Kanonische Quelle für Projektzustand und Issue-Nummer des JobRad-Antrag-Prototyps. `documentation/project-state.md` bleibt als Verlauf aus Modul 1 bestehen und wird nicht parallel gepflegt.

## Issue

- **AGO-397 – Progress Indicator** (JobRad Arbeitgeber Onboarding)

## Stack

| Bereich | Technologie / Version |
|---|---|
| Framework | React 18.3.1 |
| TypeScript | 5.7.3 |
| Vite | 6.4.3 |
| Tailwind CSS | 4.3.3 (`@tailwindcss/vite` 4.3.3) |
| Paketmanager | npm |

## package.json-Scripts

- `npm run dev` – Vite-Dev-Server (URL: `http://localhost:5173/`)
- `npm run build` – `tsc -b && vite build` (TypeScript-/Vite-Produktions-Build)
- `npm run preview` – Vite-Preview-Server

## Verbindliche Dateien

- `src/components/ApplicationStep.tsx`
- `src/components/ApplicationForm.tsx`
- `src/components/ProgressIndicator.tsx`
- `src/tokens.ts`
- `src/App.tsx`

## Prototyp-Umfang

Vertikaler Prototyp-Slice: `ApplicationForm` rendert den vorbereiteten Antragsschritt „Freigabe durch deinen Arbeitgeber" und integriert darüber `ProgressIndicator`. Vier Schritte: „Freigabe", „Rad auswählen", „Bike-Services", „Abschluss". Der erste Schritt ist aktiv.

## Build-Status

- `npm run build`: erfolgreich verifiziert (Vite 6.4.3, `tsc -b && vite build`, 31 Module, `dist/` erzeugt in ~314 ms)
- `npm run dev`: Vite-Dev-Server startet, URL `http://localhost:5173/`, HTTP 200
