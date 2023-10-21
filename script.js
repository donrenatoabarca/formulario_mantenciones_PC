const express = require('express');
const bodyParser = require('body-parser');
const XlsxPopulate = require('xlsx-populate');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
    const { marcaTemporal, numeroSerie, nombreEquipo, ubicacion, usuario, descripcionProblema, accionesRealizadas, piezasReemplazadas, estadoEquipo, costoMantenimiento, tiempoInactividad, fechaFinalizacion, observaciones, firmaTecnico, fotoAntes, fotoDespues, recomendaciones } = req.body;

    // Ruta de tu archivo Excel
    const excelFilePath = 'formulario.xlsx';

    // Lee el archivo Excel
    const workbook = await XlsxPopulate.fromFileAsync(excelFilePath);

    // Obtén la hoja de cálculo
    const sheet = workbook.sheet('Sheet1'); // Reemplaza 'Sheet1' con el nombre de tu hoja

    // Encuentra la próxima fila vacía en la hoja de cálculo
    const nextEmptyRow = sheet.usedRange().end('down').rowIndex() + 1;

    // Escribe los datos en la próxima fila vacía
    sheet.cell(`A${nextEmptyRow}`).value(new Date());
    sheet.cell(`B${nextEmptyRow}`).value(marcaTemporal);
    sheet.cell(`C${nextEmptyRow}`).value(numeroSerie);
    sheet.cell(`D${nextEmptyRow}`).value(nombreEquipo);
    sheet.cell(`E${nextEmptyRow}`).value(ubicacion);
    sheet.cell(`F${nextEmptyRow}`).value(usuario);
    sheet.cell(`G${nextEmptyRow}`).value(descripcionProblema);
    // ... agrega más celdas según tus campos

    // Guarda los cambios en el archivo Excel
    await workbook.toFileAsync(excelFilePath);

    res.send('Datos guardados en el archivo Excel.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
