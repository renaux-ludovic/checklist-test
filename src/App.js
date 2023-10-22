
// import React, { useEffect, useState } from 'react';
// import Checklist from "./pages/checklist";

// function App() {
//   const [buttonVisible, setButtonVisible] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const handleInstallClick = () => {
//     if (window.deferredPrompt) {
//       window.deferredPrompt.prompt();
//       window.deferredPrompt.userChoice
//         .then((choiceResult) => {
//           if (choiceResult.outcome === 'accepted') {
//             console.log("L'utilisateur a accepté l'installation.");
//           } else {
//             console.log("L'utilisateur a refusé l'installation.");
//           }
//           window.deferredPrompt = null;
//           setButtonVisible(false);
//         });
//     }
//   };

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e) => {
//       e.preventDefault();
//       window.deferredPrompt = e;
//       setTimeout(() => {
//         setButtonVisible(true);
//         setLoading(false);
//       }, 2000);
//     };

//     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

//     // Toujours attendre 2 secondes, même si la notification d'installation n'est pas disponible
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => {
//       window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {loading ? (
//         <p>Chargement en cours...</p>
//       ) : (
//         buttonVisible ? (
//           <button onClick={handleInstallClick}>Installer</button>
//         ) : (
//           <Checklist />
//         )
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import Checklist from "./pages/checklist";

function App() {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [loading, setLoading] = useState(true);

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
          setButtonVisible(false);
        });
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setTimeout(() => {
        setButtonVisible(true);
        setLoading(false);
      }, 2000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Toujours attendre 2 secondes, même si la notification d'installation n'est pas disponible
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        buttonVisible ? (
          <button onClick={handleInstallClick}>Installer</button>
        ) : (
          window.deferredPrompt ? null : <Checklist />
        )
      )}
    </div>
  );
}

export default App;
