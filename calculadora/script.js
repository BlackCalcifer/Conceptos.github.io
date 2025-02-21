document.getElementById('calcular').addEventListener('click', () => {
    const peso = parseFloat(document.getElementById('peso').value) || 1;
    const unidadDosis = document.getElementById('unidad_dosis').value;
    const dosisMedica = parseFloat(document.getElementById('dosis_medica').value);
    const volumenAdministrar = parseFloat(document.getElementById('volumen_administrar').value) || 0;
    const duracionHoras = parseFloat(document.getElementById('duracion_horas').value) || 0;
    const resultadoDiv = document.getElementById('resultado');

    if (!unidadDosis || isNaN(dosisMedica)) {
        resultadoDiv.style.display = 'block';
        resultadoDiv.style.color = 'red';
        resultadoDiv.textContent = 'Por favor completa todos los campos obligatorios correctamente.';
        return;
    }

    // Cálculo de dosis
    let dosisCalculada = (unidadDosis.includes('/kg') ? dosisMedica * peso : dosisMedica);

    if (unidadDosis.includes('/h') && duracionHoras > 0) {
        dosisCalculada /= duracionHoras;
    }

    // Cálculo del volumen total y goteo
    const volumenTotal = duracionHoras > 0 ? volumenAdministrar / duracionHoras : volumenAdministrar;
    const gotasPorMinuto = duracionHoras > 0 ? (volumenTotal * 20) / (duracionHoras * 60) : 0;

    // Resultados
    resultadoDiv.style.display = 'block';
    resultadoDiv.style.color = '#155724';
    resultadoDiv.innerHTML = `
        <strong>Resultados:</strong><br>
        - Dosis calculada: ${Math.round(dosisCalculada)} ${unidadDosis.split('/')[0]}<br>
        ${volumenAdministrar ? `- Volumen total a administrar: ${volumenAdministrar} ml<br>` : ''}
        ${duracionHoras ? `- Volumen por hora: ${volumenTotal.toFixed(2)} ml/h<br>` : ''}
        ${duracionHoras ? `- Goteo: ${Math.round(gotasPorMinuto)} gotas/min<br>` : ''}
        ${duracionHoras ? `- Tiempo de administración: ${duracionHoras} horas<br>` : ''}
    `;
});
