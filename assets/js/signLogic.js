const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

function toggleSignatureMode(mode, element) {
    const typedContainer = document.getElementById('typedSignatureContainer');
    const drawnContainer = document.getElementById('drawnSignatureContainer');

    // Toggle visibility of signature modes
    if (mode === 'typed') {
        typedContainer.style.display = 'block';
        drawnContainer.style.display = 'none';
    } else if (mode === 'drawn') {
        typedContainer.style.display = 'none';
        drawnContainer.style.display = 'block';
    }

    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.btn-group-toggle .btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    element.classList.add('active');
}

function saveCanvasAndSign() {
    try {
        // Convert the canvas content to a data URL (base64 string)
        const dataURL = canvas.toDataURL('image/png');

        // Save the data URL to localStorage
        localStorage.setItem('signatureImage', dataURL);
        localStorage.setItem("signed", true);
        console.log('Signature saved to localStorage:', dataURL);

        window.location.href = "conclusion.html";

    } catch (error) {

    }

}

function saveSignNameAndSign() {
    const userData = JSON.parse(localStorage.getItem("formData"));

    if (document.getElementById("nameInput").value == "") {
        alert("Por favor, preencha o campo");
        return false;
    } else if (document.getElementById("nameInput").value == userData.name) {
        localStorage.setItem("signed", true);
        return true;
    } else {
        localStorage.setItem("signed", true);
        localStorage.setItem("signatureName", document.getElementById("nameInput").value);
        return true;
    }
}