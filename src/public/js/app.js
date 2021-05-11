/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/js/particlesjs-config.json');

window.onload = function () {
  const fondo = document.querySelector('#particles-js');
  const boton = document.querySelector('#button-login');

  boton.addEventListener('mouseover', () => fondo.classList.add('particles-dark'));
  boton.addEventListener('mouseout', () => fondo.classList.remove('particles-dark'));
};
