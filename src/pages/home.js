import React, { useEffect } from 'react';

function Home() {
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
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div>
      {/* Contenu de la page Home */}
      <button onClick={handleInstallClick}>Installer</button>
    </div>
  );
}

export default Home;
