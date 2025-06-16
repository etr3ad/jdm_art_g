
document.querySelectorAll('.car img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});
