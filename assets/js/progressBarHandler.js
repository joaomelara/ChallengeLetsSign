
document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    'index.html',
    'tokenVerification.html',
    'authentication.html',
    'signing.html',
    'abobrinah.html',
  ];

  const currentPage = window.location.pathname.split('/').pop();
  const currentIndex = pages.indexOf(currentPage);

  if (currentIndex !== -1) {
    const progressPercent = ((currentIndex + 1) / pages.length) * 100;
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }
  }
});
