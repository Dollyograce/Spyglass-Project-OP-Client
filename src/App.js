import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;