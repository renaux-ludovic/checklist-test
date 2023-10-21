import React, { useEffect } from 'react';
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

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
    });
  }, []);

  return (
    <div className="App">
      <CHECKLIST />
      {window.deferredPrompt && (
        <button onClick={handleInstallClick}>Installer</button>
      )}
    </div>
  );
}

export default App;
