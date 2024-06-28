document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        showMessage(true, campoA, campoB);
    } else {
        showMessage(false, campoA, campoB);
    }
});

function showMessage(valid, valorA, valorB) {
    const messageElement = document.getElementById('message');
    if (valid) {
        messageElement.textContent = `Formulário válido: ${valorB} é maior que ${valorA}.`;
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = `Formulário inválido: ${valorB} deve ser maior que ${valorA}.`;
        messageElement.className = 'message invalid';
    }
    messageElement.style.display = 'block';
}