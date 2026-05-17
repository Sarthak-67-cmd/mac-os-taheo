# macOS Tahoe UI Clone

A beautiful, functional, web-based macOS desktop UI clone built with React, Vite, and Tailwind CSS.
Features glassmorphism effects, a functional Dock, Menu Bar, Draggable/Resizable Windows, Finder, Launchpad, and a Dark/Light Mode toggle.

## Technologies Used
- React 18
- Vite
- Tailwind CSS
- Framer Motion (for smooth Launchpad and Dock animations)
- Lucide React (for stunning modern icons)
- React Draggable (for window dragging)

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation Steps
1. Navigate to this directory in your terminal:
   ```bash
   cd macos
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### How to Run Locally
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to see the desktop in action!

## Component Explanations

### Context (`AppContext.jsx`)
Handles global state for the operating system:
- `activeApps`: Array of currently open application IDs.
- `focusedApp`: The ID of the application that currently has focus (z-index highest).
- `isDarkMode`: Toggles dark/light mode classes.
- `isLaunchpadOpen`: State to toggle the Launchpad overlay.

### App Shell (`App.jsx` & `Desktop.jsx`)
`App.jsx` renders the background wallpaper and composes the `MenuBar`, `Desktop`, `Launchpad`, and `Dock`.
`Desktop.jsx` is responsible for rendering all active window components based on the `activeApps` state.

### MenuBar (`MenuBar.jsx`)
Displays system information like Time, Date, Battery, and the current active Application name. It features a toggle for Dark/Light mode in the top right.

### Dock (`Dock.jsx`)
The iconic bottom launcher. Utilizes `framer-motion` for spring animations when hovering over app icons. Clicking an icon either opens a window or toggles the Launchpad.

### Window System (`Window.jsx`)
A reusable wrapper component that provides standard macOS window controls (Close, Minimize, Maximize). It wraps children components and uses `react-draggable` to allow dragging around the screen. 

### Apps (`apps/Finder.jsx`, `apps/Settings.jsx`)
Functional mockups of macOS built-in applications. `Finder` has a sidebar and file grid. `Settings` implements a functional appearance tab to switch themes.
