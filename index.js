const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = 4000;

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido al servidor de descarga de videos</h1>
    <p>Para descargar un video, ve a <a href="/download?url=https://www.youtube.com/watch?v=22LuMmwQKho&format=mp4">este enlace</a></p>
  `);
});

// Ruta para descargar el video
app.get('/download', (req, res) => {
  const videoURL = req.query.url;
  const format = req.query.format || 'mp4';  // Por defecto mp4

  if (!videoURL) {
    return res.status(400).send('URL no proporcionada.');
  }

  // Cambié la ruta para guardar los videos en C:/Users/Jean/Downloads/videos
  const downloadPath = "C:/Users/Jean/Downloads/videos";  // Asegúrate de que esta carpeta exista

  // Modificado para mejorar la calidad, buscando el mejor video + mejor audio
  const command = `python -m yt_dlp -f bestvideo+bestaudio/best -o "${downloadPath}/%(title)s.%(ext)s" ${videoURL}`;

  // Verificar si la carpeta de destino existe, si no, crearla
  fs.exists(downloadPath, (exists) => {
    if (!exists) {
      fs.mkdirSync(downloadPath, { recursive: true });
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar yt-dlp: ${error}`);
        return res.status(500).send('Error al descargar el video.');
      }

      // Ver la salida de yt-dlp y comprobar si la ruta es correcta
      console.log(stdout);

      const downloadedFileName = stdout.split('\n').find(line => line.includes('Destination:')).split(':')[1].trim();
      const filePath = path.join(downloadPath, downloadedFileName);

      // Verificar si el archivo existe
      fs.exists(filePath, (exists) => {
        if (!exists) {
          console.error(`El archivo no existe en la ruta esperada: ${filePath}`);
          return res.status(404).send('El archivo no se ha encontrado.');
        }

        // Configurar los encabezados para la descarga del archivo
        res.setHeader('Content-Disposition', 'attachment; filename=' + path.basename(filePath));
        res.setHeader('Content-Type', 'video/mp4');

        // Crear un stream para el archivo y enviarlo al cliente
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        fileStream.on('error', (err) => {
          console.error('Error al enviar el archivo:', err);
          res.status(500).send('Error al enviar el archivo de video.');
        });
      });
    });
  });
});

// Iniciar el servidor en el puerto 4000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
