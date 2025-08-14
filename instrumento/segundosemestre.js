document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnPDF").addEventListener("click", function() {
        const contenido = document.getElementById("contenido"); // Selecciona el contenido a convertir en PDF

        html2pdf()
            .from(contenido)
            .save("documento.pdf"); // Guarda el archivo como "documento.pdf"
    });
});
