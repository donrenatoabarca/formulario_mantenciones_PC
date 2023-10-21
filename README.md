# formulario_mantenciones_PC


1. Configurar el Entorno:
Node.js y npm: Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargar e instalar Node.js desde su sitio web oficial.


2. Crear la Estructura del Proyecto:
Crea un Nuevo Directorio: Crea un nuevo directorio para tu proyecto en tu sistema de archivos.

Inicia un Proyecto Node.js: Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando para iniciar un nuevo proyecto Node.js:


Copy code

npm init -y

3. Instalar Dependencias:
Express: Para manejar las solicitudes HTTP y las rutas del servidor.
Body-Parser: Para analizar los datos del formulario.
Exceljs: Para crear y manejar archivos de Excel.
Ejecuta el siguiente comando en la terminal para instalar estas dependencias:

npm install express body-parser exceljs --save


4. Crear el Servidor Node.js:
server.js:

const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  // Aquí procesa los datos del formulario y crea la plantilla de Excel
  // ...
  // Código para crear el archivo de Excel usando ExcelJS
  // ...
  res.download('ruta/del/archivo.xlsx'); // Descargar el archivo de Excel
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});


5. Crear el Formulario HTML:
public/index.html:

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Mantenimiento de Equipos de PC</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .form-container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 100%;
            width: 400px;
        }
        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="url"],
        .form-group textarea {
            width: calc(100% - 20px);
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        .form-group button {
            background-color: #4caf50;
            color: white;
            padding: 14px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .form-group button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Formulario de Mantenimiento de Equipos de PC</h2>
        <form id="formulario">
            <div class="form-group">
                <label for="marcaTemporal">Marca Temporal:</label>
                <input type="text" id="marcaTemporal" name="marcaTemporal" required>
            </div>
            <div class="form-group">
                <label for="numeroSerie">Número de Serie:</label>
                <input type="text" id="numeroSerie" name="numeroSerie" required>
            </div>
            <div class="form-group">
                <label for="nombreEquipo">Nombre del Equipo:</label>
                <input type="text" id="nombreEquipo" name="nombreEquipo" required>
            </div>
            <div class="form-group">
                <label for="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required>
            </div>
            <div class="form-group">
                <label for="usuario">Usuario Asignado:</label>
                <input type="text" id="usuario" name="usuario" required>
            </div>
            <div class="form-group">
                <label for="descripcionProblema">Descripción del Problema:</label>
                <textarea id="descripcionProblema" name="descripcionProblema" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="accionesRealizadas">Acciones Realizadas:</label>
                <textarea id="accionesRealizadas" name="accionesRealizadas" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="piezasReemplazadas">Piezas Reemplazadas:</label>
                <textarea id="piezasReemplazadas" name="piezasReemplazadas" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="estadoEquipo">Estado del Equipo:</label>
                <input type="text" id="estadoEquipo" name="estadoEquipo" required>
            </div>
            <div class="form-group">
                <label for="costoMantenimiento">Costo del Mantenimiento:</label>
                <input type="text" id="costoMantenimiento" name="costoMantenimiento" required>
            </div>
            <div class="form-group">
                <label for="tiempoInactividad">Tiempo de Inactividad:</label>
                <input type="text" id="tiempoInactividad" name="tiempoInactividad" required>
            </div>
            <div class="form-group">
                <label for="fechaFinalizacion">Fecha de Finalización:</label>
                <input type="text" id="fechaFinalizacion" name="fechaFinalizacion" required>
            </div>
            <div class="form-group">
                <label for="observaciones">Observaciones:</label>
                <textarea id="observaciones" name="observaciones" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="firmaTecnico">Firma del Técnico:</label>
                <input type="text" id="firmaTecnico" name="firmaTecnico" required>
            </div>
            <div class="form-group">
                <label for="fotoAntes">Foto del Antes (Enlace):</label>
                <input type="url" id="fotoAntes" name="fotoAntes" required>
            </div>
            <div class="form-group">
                <label for="fotoDespues">Foto del Después (Enlace):</label>
                <input type="url" id="fotoDespues" name="fotoDespues" required>
            </div>
            <div class="form-group">
                <label for="recomendaciones">Recomendaciones:</label>
                <textarea id="recomendaciones" name="recomendaciones" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
</body>
</html>


6. Estilizar el Formulario (Opcional):
public/styles.css: Estiliza tu formulario según tus necesidades.

7. Manejar el Formulario con JavaScript (Opcional):
public/script.js: Utiliza JavaScript para validar el formulario antes de enviar los datos al servidor.

8. Procesar los Datos del Formulario y Crear el Archivo Excel:
Dentro de server.js, procesa los datos del formulario y crea el archivo de Excel usando la librería ExcelJS. Consulta la documentación de ExcelJS para aprender cómo crear y manejar archivos de Excel.

9. Prueba y Ejecución:
Ejecuta tu servidor Node.js usando el comando node server.js.
Abre un navegador y accede a http://localhost:3000 para probar el formulario.


