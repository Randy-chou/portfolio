import React from 'react';
import Header from './components/Header';
import Project from './components/pages/Project';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <main className="min-vh-100" id = "mainBody">
      <Header/>
      <div className="h-auto">
        <Project/>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
