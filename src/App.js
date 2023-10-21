// import React, { useEffect, useState } from 'react';
// import Checklist from "./pages/checklist";

// function App() {
//   const [buttonClicked, setButtonClicked] = useState(false);

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
//           setButtonClicked(true); 
//         });
//     }
//   };

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e) => {
//       e.preventDefault();
//       window.deferredPrompt = e;
//     };

//     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

//     return () => {
//       window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <Checklist />
//       {!buttonClicked && <button onClick={handleInstallClick}>Installer</button>}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import Checklist from "./pages/checklist";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

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
          setButtonClicked(true); 
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
    <div className="App">
      {!buttonClicked ? null : <Checklist />}
      {!buttonClicked && <button onClick={handleInstallClick}>Installer</button>}
    </div>
  );
}

export default App;
