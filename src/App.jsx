import React from "react";
import VirtualSky from "./lib/VirtualSky/VirtualSky";
import './App.css'

function App() {
  const config = {
    azOff: 0,
    height: 700,
    width: 1000,
    latitude: 51.746449,
    longitude: 19.620693,
    time: new Date(),
    skyColors: ["#000", "#100050"],
    gridAzColor: "#100050",
    gridEqColor: "#105000",
    gridGalColor: "#500020",
    language: "en",
    visibility: {
      starMag: 6,
      showStarLabels: false,
      showPlanets: true,
      showPlanetsOrbit: true,
      showPlanetsLabels: false,
      showSunMoon: true,
      showConstellations: true,
      showConstellationBoundaries: false,
      showConstellationLabels: false,
      showAzLabels: true,
      showAzGrid: true,
      showEqGrid: false,
      showGalGrid: false,
      showGalaxy: false,
      showInfo: true
    }
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#08060d'
    }}>
      <h1 style={{ color: '#fff', marginBottom: '20px' }}>Virtual Sky Demo</h1>
      <div style={{ 
        position: 'relative', 
        width: '1000px', 
        height: '700px',
        border: '1px solid #2e303a',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <VirtualSky id="startmap" config={config} />
      </div>
      <p style={{ marginTop: '20px', color: '#9ca3af' }}>
        Drag to move the sky map.
      </p>
    </div>
  );
}

export default App;
