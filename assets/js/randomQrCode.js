const modalOutro = document.getElementById('modalOutro');
const qrCodeImg = document.getElementById('qrCode');

modalOutro.addEventListener('shown.bs.modal', () => {
  const randomId = Math.random().toString(36).substring(2, 10);
  const fakeUrl = `https://not-a-real-site.com/${randomId}`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(fakeUrl)}`;
  qrCodeImg.src = qrApiUrl;
});