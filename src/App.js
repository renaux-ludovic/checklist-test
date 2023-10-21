import React from 'react';

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
      <button onClick={handleInstallClick}>Installer l'application</button>
    </div>
  );
}

export default App;
