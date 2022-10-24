import React from 'react';
import logo from './logo.svg';
import './App.css';
import ForceGraph3D from 'react-force-graph-3d';
import myData from "./miserables.json";

function App() {
  return (
    <ForceGraph3D
      graphData={myData}
    />
  );
}

export default App;
