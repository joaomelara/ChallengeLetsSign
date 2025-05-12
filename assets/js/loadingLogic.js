
function checkProximity() {
    // Fecha o modal de outro dispositivo
    const outroModal = bootstrap.Modal.getInstance(document.getElementById('modalOutro'));
    outroModal.hide();

    // Abre o modal de loading
    const loadingModal = new bootstrap.Modal(document.getElementById('modalLoading'));
    loadingModal.show();

    // Simula uma checagem de localização (ex: 2 segundos)
    setTimeout(() => {
        loadingModal.hide();
        const successModal = new bootstrap.Modal(document.getElementById('modalSucesso'));
        successModal.show();
    }, 2000);
}

