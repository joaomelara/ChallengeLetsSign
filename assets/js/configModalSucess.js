const modalSucesso = new bootstrap.Modal(document.getElementById('modalSucesso'), {
    backdrop: 'static',
    keyboard: false
});

// Substitui o uso automático do `data-bs-toggle` para garantir que seja aberto com as opções corretas
document.querySelectorAll('[data-bs-target="#modalSucesso"]').forEach(btn => {
    btn.addEventListener('click', function () {
        modalSucesso.show();
    });
});