const video = document.getElementById('cameraStream');
const canvas = document.getElementById('photoCanvas');
const btnCapture = document.getElementById('btnCapture');
const btnConfirm = document.getElementById('btnConfirm');
const btnRetry = document.getElementById('btnRetry');

let stream;

const startCamera = async () => {
    try {
        // Disable the capture button until the camera is ready
        btnCapture.disabled = true;

        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;

        // Wait for the video to be ready
        video.onloadedmetadata = () => {
            video.play();
            btnCapture.disabled = false; // Enable the capture button once the camera is ready
        };

        video.classList.remove('d-none');
        canvas.classList.add('d-none');
        btnCapture.classList.remove('d-none');
        btnConfirm.classList.add('d-none');
        btnRetry.classList.add('d-none');
    } catch (err) {
        console.error('Erro ao acessar a câmera:', err.message);
        alert('Não foi possível acessar sua câmera. Tente outro dispositivo.');

        // Close the camera modal if it's open
        const modalCameraEl = document.getElementById('modalCamera');
        const modalCamera = bootstrap.Modal.getInstance(modalCameraEl);
        if (modalCamera) modalCamera.hide();
    }
};

document.getElementById('modalCamera').addEventListener('shown.bs.modal', startCamera);

// Capture the photo
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

// Retry taking the photo
btnRetry.addEventListener('click', () => {
    canvas.classList.add('d-none');
    video.classList.remove('d-none');
    btnCapture.classList.remove('d-none');
    btnConfirm.classList.add('d-none');
    btnRetry.classList.add('d-none');
});

// Confirm the photo
btnConfirm.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL('image/png');
    console.log('Foto confirmada (base64):', dataUrl);
    // Here you can send the photo to the server or proceed with the flow
    bootstrap.Modal.getInstance(document.getElementById('modalCamera')).hide();
    stream.getTracks().forEach(track => track.stop());
});

// Stop the camera when the modal is closed
document.getElementById('modalCamera').addEventListener('hidden.bs.modal', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
});