# YT Downloader - Extension

Este es un proyecto para descargar videos de YouTube a través de un servidor Node.js. Puedes usarlo con una extensión de navegador para realizar las descargas directamente desde el navegador.

## Requisitos previos

### 1. Verificar si Node.js ya está instalado

Antes de instalar **Node.js**, verifica si ya está instalado en tu sistema:

- Abre **Command Prompt** o **PowerShell**:
  - Para abrir **Command Prompt**, presiona **Windows + R**, escribe `cmd` y presiona **Enter**.
  - Para abrir **PowerShell**, presiona **Windows + X** y selecciona **Windows PowerShell**.
  
- En la terminal, escribe los siguientes comandos y presiona **Enter**:

  ```bash
  node -v
  npm -v

## Pasos de instalación y uso

### 2. Instalar Node.js en Windows

Si **Node.js** no está instalado en tu sistema, sigue estos pasos:

1. **Descargar Node.js:**
   - Ve al sitio oficial de **Node.js**: [https://nodejs.org](https://nodejs.org).
   - En la página principal, selecciona la versión **LTS** (Long Term Support), que es la más estable y recomendada para la mayoría de los usuarios.
   - Haz clic en el botón **Windows** para descargar el instalador **.msi**.

2. **Ejecutar el instalador:**
   - Una vez descargado el archivo **.msi**, haz doble clic en él para comenzar la instalación.
   - Durante la instalación, asegúrate de seleccionar las siguientes opciones:
     - **"Add to PATH"** (esto permitirá ejecutar **Node.js** y **npm** desde cualquier terminal).
     - **"npm package manager"** (esto instalará el gestor de paquetes **npm** junto con **Node.js**).
   - Haz clic en **Next** hasta que finalice la instalación.

3. **Verificar la instalación:**
   - Después de la instalación, abre nuevamente la terminal de **Command Prompt** o **PowerShell**.
   - Ejecuta los siguientes comandos para verificar que **Node.js** y **npm** estén correctamente instalados:

     ```bash
     node -v
     npm -v
     ```

   Deberías ver las versiones de **Node.js** y **npm**. Ejemplo:

   ```bash
   v18.12.1  # (versión de node.js)
   8.19.2    # (versión de npm)

### 3. Instalar dependencias del proyecto

Si ya tienes el proyecto **YT Downloader - Extension** en tu computadora y deseas instalar las dependencias necesarias, sigue estos pasos:

1. **Navega a la carpeta del proyecto:**
   - Abre la terminal de **Command Prompt** o **PowerShell**.
   - Usa el comando `cd` para cambiar el directorio al de tu proyecto. Por ejemplo:

     ```bash
     cd C:\Users\Jean\youtube-downloader
     ```

   Asegúrate de cambiar esta ruta según la ubicación de tu proyecto en tu sistema.

2. **Instalar dependencias:**
   - Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar todas las dependencias que están listadas en el archivo `package.json`:

     ```bash
     npm install
     ```

   Esto descargará e instalará todas las dependencias necesarias para que el proyecto funcione correctamente.

---

**Nota:** Si tienes problemas con alguna dependencia, puedes intentar actualizar **npm** o asegurarte de tener una versión compatible con el proyecto.


### 4. Ejecutar el servidor Node.js

Una vez que hayas instalado todas las dependencias necesarias, puedes ejecutar el servidor de Node.js. Sigue estos pasos:

1. **Iniciar el servidor:**
   - Asegúrate de estar dentro de la carpeta de tu proyecto en la terminal.
   - Ejecuta el siguiente comando para iniciar el servidor:

     ```bash
     node index.js
     ```

   Esto iniciará el servidor y deberías ver un mensaje en la terminal similar a este:

   ```bash
   Servidor corriendo en http://localhost:4000


### 5. Crear un script para iniciar el servidor automáticamente

Para facilitar el inicio del servidor, puedes crear un script que ejecute `node index.js` automáticamente cada vez que lo necesites, sin tener que escribir el comando manualmente.

Sigue estos pasos:

1. **Abrir el archivo `package.json`:**
   - Si tu proyecto aún no tiene un archivo `package.json`, crea uno ejecutando el siguiente comando en la terminal dentro de la carpeta del proyecto:

     ```bash
     npm init -y
     ```

   - Si ya tienes el archivo `package.json`, ábrelo en tu editor de texto.

2. **Agregar un script de inicio:**
   - En el archivo `package.json`, busca la sección `"scripts"`. Si no existe, añádela al final del archivo.
   - Agrega el siguiente script para iniciar el servidor:

     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```

   Esto le dice a npm que cuando se ejecute el comando `npm start`, se ejecute automáticamente `node index.js`.

3. **Iniciar el servidor con el nuevo script:**
   - Ahora, en lugar de escribir `node index.js` cada vez, puedes simplemente ejecutar el siguiente comando en la terminal:

     ```bash
     npm start
     ```

   Este comando iniciará automáticamente el servidor y podrás ver el mensaje:

   ```bash
   Servidor corriendo en http://localhost:4000

