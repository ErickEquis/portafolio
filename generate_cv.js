const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

async function createCV() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Fonts
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    // Layout constants
    const margin = 50;
    const contentWidth = width - 2 * margin;
    let yPosition = height - margin;

    // Colors
    const colorPrimary = rgb(0, 0, 0); // Black
    const colorSecondary = rgb(0.4, 0.4, 0.4); // Grey
    const colorAccent = rgb(0.1, 0.3, 0.6); // Dark Blue for links/highlights

    // Helper: Draw Text
    const drawText = (text, size, font, color = colorPrimary, x = margin) => {
        page.drawText(text, { x, y: yPosition, size, font, color });
        // yPosition is managed manually after drawing
    };

    // Helper: Draw Wrapped Text
    const drawWrappedText = (text, size, font, color = colorPrimary, maxWidth = contentWidth, indent = 0) => {
        const words = text.split(' ');
        let line = '';
        for (const word of words) {
            const testLine = line + word + ' ';
            const textWidth = font.widthOfTextAtSize(testLine, size);
            if (textWidth > maxWidth) {
                drawText(line, size, font, color, margin + indent);
                yPosition -= size + 4; // Line height
                line = word + ' ';
            } else {
                line = testLine;
            }
        }
        drawText(line, size, font, color, margin + indent);
        yPosition -= size + 6; // Spacing after block
    };

    // Helper: Draw Line
    const drawLine = () => {
        page.drawLine({
            start: { x: margin, y: yPosition + 5 },
            end: { x: width - margin, y: yPosition + 5 },
            thickness: 1,
            color: colorSecondary,
            opacity: 0.5
        });
        yPosition -= 15;
    };

    // Helper: Section Title
    const drawSectionTitle = (title) => {
        yPosition -= 10;
        drawText(title.toUpperCase(), 12, fontBold, colorPrimary);
        yPosition -= 14;
        drawLine();
    };

    // --- CONTENT ---

    // 1. Header
    drawText('Erick Santillán Suárez', 26, fontBold, colorPrimary);
    yPosition -= 32;
    drawText('Desarrollador de Sistemas Full Stack', 14, fontRegular, colorSecondary);
    yPosition -= 25;

    // Contact Info (Single Line or Two lines)
    const contactInfo = '+52 55 5414 9576  |  ericksantillan95.01@gmail.com  |  México, CDMX';
    drawText(contactInfo, 10, fontRegular, colorPrimary);
    yPosition -= 14;
    drawText('Portafolio: https://erickequis.github.io/portafolio/', 10, fontRegular, colorAccent);
    yPosition -= 30;

    // 2. Profile
    drawSectionTitle('Perfil Profesional');
    drawWrappedText(
        'Desarrollador apasionado con sólida experiencia en backend y frontend. Comprometido con la mejora continua y la adopción de nuevas tecnologías. Busco aportar soluciones eficientes y escalables que impulsen el crecimiento organizacional.',
        10, fontRegular
    );
    yPosition -= 10;

    // 3. Experience
    drawSectionTitle('Experiencia Profesional');

    // Experience Item 0 (New)
    drawText('Credibusiness', 12, fontBold, colorPrimary);
    drawText('Dic 2024 – Actualmente', 10, fontRegular, colorSecondary, width - margin - fontRegular.widthOfTextAtSize('Dic 2024 – Actualmente', 10));
    yPosition -= 14;
    drawText('Desarrollador de Sistemas', 11, fontOblique, colorPrimary);
    yPosition -= 16;
    drawWrappedText('• Desarrollo y mantenimiento de sistemas internos.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition += 2;
    drawWrappedText('• Aseguramiento de calidad y eficiencia en el código entregado.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition -= 10;

    // Experience Item 1
    drawText('INFOTEC', 12, fontBold, colorPrimary);
    drawText('Nov 2023 – Sep 2024', 10, fontRegular, colorSecondary, width - margin - fontRegular.widthOfTextAtSize('Nov 2023 – Sep 2024', 10)); // Right aligned date
    yPosition -= 14;
    drawText('Desarrollador de Sistemas', 11, fontOblique, colorPrimary);
    yPosition -= 16;
    drawWrappedText('• Desarrollo full stack (Backend & Frontend).', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition += 2; // Adjust spacing for list
    drawWrappedText('• Modelado de bases de datos y optimización de consultas.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition += 2;
    drawWrappedText('• Implementación de pruebas (Testing) y documentación técnica.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition -= 10;

    // Experience Item 2
    drawText('CFE-TEIT', 12, fontBold, colorPrimary);
    drawText('Nov 2022 – Nov 2023', 10, fontRegular, colorSecondary, width - margin - fontRegular.widthOfTextAtSize('Nov 2022 – Nov 2023', 10));
    yPosition -= 14;
    drawText('Desarrollador de Sistemas', 11, fontOblique, colorPrimary);
    yPosition -= 16;
    drawWrappedText('• Desarrollo y mantenimiento de sistemas internos.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition += 2;
    drawWrappedText('• Aseguramiento de calidad y eficiencia en el código entregado.', 10, fontRegular, colorPrimary, contentWidth, 10);
    yPosition -= 10;

    // 4. Skills
    drawSectionTitle('Conocimientos Técnicos');

    // Helper for Skill Categories
    const drawSkillCategory = (category, skills) => {
        drawText(category + ':', 10, fontBold, colorPrimary);
        const catWidth = fontBold.widthOfTextAtSize(category + ':', 10);
        drawWrappedText(skills, 10, fontRegular, colorPrimary, contentWidth - catWidth - 10, catWidth + 10);
    };

    drawSkillCategory('Backend', 'NodeJs, Express, Sequelize, SQL, Bash, Java, Python, Flask');
    drawSkillCategory('Frontend', 'HTML5, CSS3, Bootstrap, JavaScript, TypeScript, Angular, React, NextJs');
    drawSkillCategory('DevOps', 'Git, Docker, Nginx, PM2, Linux Env, ETL');
    yPosition -= 10;

    // 5. Education
    drawSectionTitle('Formación Académica');

    drawText('Licenciatura en Economía (Pasante)', 11, fontBold);
    drawText('2016 - 2021', 10, fontRegular, colorSecondary, width - margin - fontRegular.widthOfTextAtSize('2016 - 2021', 10));
    yPosition -= 14;
    drawText('Instituto Politécnico Nacional', 10, fontRegular);
    yPosition -= 18;

    drawText('Licenciatura en Matemáticas (En curso)', 11, fontBold);
    drawText('2017 - Presente', 10, fontRegular, colorSecondary, width - margin - fontRegular.widthOfTextAtSize('2017 - Presente', 10));
    yPosition -= 14;
    drawText('UnADM (Universidad Abierta y a Distancia de México)', 10, fontRegular);
    yPosition -= 18;

    // 6. Languages & Soft Skills
    drawSectionTitle('Idiomas y Habilidades');
    drawText('• Idiomas: Inglés (B1), Chino (A1)', 10, fontRegular);
    yPosition -= 14;
    drawText('• Soft Skills: Trabajo en equipo, Organización, Adaptabilidad, Aprendizaje rápido.', 10, fontRegular);

    // Footer
    page.drawText('Generado por Antigravity', {
        x: margin,
        y: 20,
        size: 8,
        font: fontOblique,
        color: rgb(0.6, 0.6, 0.6)
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('CV_Erick_Santillan_Refinado.pdf', pdfBytes);
    console.log("CV generado exitosamente: CV_Erick_Santillan_Refinado.pdf");
}

createCV();
