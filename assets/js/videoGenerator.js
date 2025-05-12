const video = document.getElementById('cameraStream');
const canvas = document.getElementById('photoCanvas');
const btnCapture = document.getElementById('btnCapture');
const btnConfirm = document.getElementById('btnConfirm');
const btnRetry = document.getElementById('btnRetry');

let stream;

const startCamera = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.classList.remove('d-none');
        canvas.classList.add('d-none');
        btnCapture.classList.remove('d-none');
        btnConfirm.classList.add('d-none');
        btnRetry.classList.add('d-none');
    } catch (err) {
        console.error('Erro ao acessar a câmera:', err.message);
        alert('Não foi possível acessar sua câmera. Tente outro dispositivo.');

        // Fecha o modal da câmera, se estiver aberto
        const modalCameraEl = document.getElementById('modalCamera');
        const modalCamera = bootstrap.Modal.getInstance(modalCameraEl);
        if (modalCamera) modalCamera.hide();
    }
};


document.getElementById('modalCamera').addEventListener('shown.bs.modal', startCamera);

// Captura a foto
btnCapture.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    video.classList.add('d-none');
    canvas.classList.remove('d-none');
    btnCapture.classList.add('d-none');
    btnConfirm.classList.remove('d-none');
    btnRetry.classList.remove('d-none');
});

// Refazer a foto
btnRetry.addEventListener('click', () => {
    canvas.classList.add('d-none');
    video.classList.remove('d-none');
    btnCapture.classList.remove('d-none');
    btnConfirm.classList.add('d-none');
    btnRetry.classList.add('d-none');
});

// Confirmar a foto
btnConfirm.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL('image/png');
    console.log('Foto confirmada (base64):', dataUrl);
    // Aqui você pode enviar para o servidor ou prosseguir no fluxo.
    bootstrap.Modal.getInstance(document.getElementById('modalCamera')).hide();
    stream.getTracks().forEach(track => track.stop());
});

// Ao fechar o modal, parar a câmera
document.getElementById('modalCamera').addEventListener('hidden.bs.modal', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
});