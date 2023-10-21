import React from 'react';
import './App.css';
import CHECKLIST from './checklist';

function App() {
  // Fonction pour gérer le clic sur le bouton d'installation
  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log("L'utilisateur a installé l'application.");
        }
        window.deferredPrompt = null;
      });
    }
  };

  return (
    <div className="App">
      <CHECKLIST />
      <button onClick={handleInstallClick}>Installer l'application</button>
    </div>
  );
}

export default App;
