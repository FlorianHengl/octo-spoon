# Escape Room - Spiel

Ein interaktives Escape-Room-Spiel mit 10 Missionen, entwickelt mit HTML5, JavaScript und Electron.

## 🎮 Features

- 10 verschiedene Missionen
- Timer und Hintsystem
- Persistente Spielstände
- Portable Windows-EXE
- Tastatur-Shortcuts

## 🚀 Installation

### Mit vorkompilierter EXE (Windows)

1. Gehe zu [Releases](../../releases)
2. Lade `Escape-Room.exe` herunter
3. Doppelklick zum Starten

### Von Quelle bauen

```bash
# Projekt klonen
git clone https://github.com/DEIN_USERNAME/escape-room.git
cd escape-room

# Dependencies installieren
npm install

# Entwicklungsmodus
npm start

# Windows EXE bauen
npm run build-win

# Für alle Systeme bauen
npm run build-all
```

## ⌨️ Tastatur-Shortcuts

| Shortcut | Funktion |
|----------|----------|
| Ctrl+Shift+Home | Zur Startseite zurück |
| Ctrl+Shift+R | Alle Timer zurücksetzen |

## 📁 Projektstruktur

```
escape-room/
├── index.html          # Mission-Auswahl-Menü
├── mission.html        # Universal Mission-Player
├── mission-engine.js   # Game-Engine
├── missions-config.js  # Mission-Daten
├── style.css          # Styling
├── main.js            # Electron-Entry-Point
├── package.json       # Dependencies
└── .github/workflows/
    └── build.yml      # GitHub Actions Build
```

## 🔧 Entwicklung

### Neue Mission hinzufügen

Mission-Daten in `missions-config.js` unter `MISSIONS_DATA.missions` hinzufügen.

### Lokale Entwicklung

```bash
npm start
```

### Debugging

DevTools: Ctrl+Shift+I im Spiel

## 📦 Build mit GitHub Actions

Automatische Builds bei jedem Push/Tag:

1. Änderungen pushen
2. GitHub Actions baut automatisch
3. EXE in [Artifacts](../../actions) verfügbar
4. Für Release-Tag auch als [Release](../../releases) verfügbar

### Release erstellen

```bash
git tag v1.0.0
git push --tags
```

## 📝 Lizenz

MIT

## 👤 Autor

Erstellt mit Electron + Electron-Builder
