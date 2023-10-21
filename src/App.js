import React from 'react';
import CHECKLIST from "./checklist";
function App() {
  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log("L'utilisateur a accepté l'installation.");
          } else {
            console.log("L'utilisateur a refusé l'installation.");
          }
          window.deferredPrompt = null;
        });
    }
  };

  return (
    <div className="App">
      <CHECKLIST />
      <button onClick={handleInstallClick}>Installer</button>
    </div>
  );
}

export default App;
