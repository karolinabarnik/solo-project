function toggleMenu() {
  document.querySelector('.main-menu').classList.toggle('show')
}

document.querySelector('.fas.fa-bars').addEventListener('click', function(e) {
	e.preventDefault();
	toggleMenu()
});

