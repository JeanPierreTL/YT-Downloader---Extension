document.getElementById("downloadButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const format = "mp4"; // O el formato que elijas
  
      // Enviar la solicitud al servidor para descargar el video
      fetch(`http://localhost:4000/download?url=${encodeURIComponent(url)}&format=${format}`)
        .then(response => {
          if (response.ok) {
            alert("Descarga iniciada!");
          } else {
            alert("Error en la descarga");
          }
        })
        .catch(error => {
          alert("No se pudo conectar al servidor: " + error);
        });
    });
  });
  