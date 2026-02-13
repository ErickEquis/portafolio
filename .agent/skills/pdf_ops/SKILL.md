---
name: pdf_ops
description: Operaciones para leer, procesar y crear archivos PDF usando Node.js
---

# Manipulación de PDF

Esta skill proporciona capacidades para leer texto de archivos PDF y crear nuevos documentos PDF programáticamente.

## Dependencias
Esta skill requiere las siguientes librerías npm. Si no están instaladas, instálalas primero:
```bash
npm install pdf-parse pdf-lib
```

## Capacidades

### 1. Leer Texto de un PDF
Para extraer texto de un archivo PDF, crea y ejecuta un script de Node.js con el siguiente patrón:

```javascript
const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    console.log(data.text);
}

readPdf('ruta/al/archivo.pdf');
```

### 2. Crear un PDF Simple
Para crear un nuevo PDF, usa `pdf-lib`. Aquí tienes un ejemplo básico:

```javascript
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

async function createPdf(outputPath, content) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText(content, {
        x: 50,
        y: height - 4 * 12,
        size: 30,
        font: font,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);
}

createPdf('nuevo-documento.pdf', 'Hola Mundo desde Antigravity!');
```

### 3. Modificar un PDF Existente
Puedes abrir y modificar PDFs existentes:

```javascript
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function modifyPdf(inputPath, outputPath) {
    const existingPdfBytes = fs.readFileSync(inputPath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    
    firstPage.drawText('Modificado por Antigravity', {
        x: 5,
        y: 5,
        size: 12
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPath, pdfBytes);
}
```
