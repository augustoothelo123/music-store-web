function toggleFavorito(btn) {
  if (!btn.classList.contains('activo')) {
    btn.classList.add('activo');
    btn.textContent = '¡Agregado! 💚';
    alert('Producto agregado a tus favoritos');
  } else {
    btn.classList.remove('activo');
    btn.textContent = 'Agregar a favoritos ❤️';
    alert('Producto quitado de tus favoritos');
  }
}
