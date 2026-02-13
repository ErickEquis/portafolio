const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdf(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (error) {
        console.error("Error reading PDF:", error);
    }
}

readPdf('src/assets/cv.pdf');
