const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

var QR = new QRCode(contenedorQR, {
	width: 256,
	height: 256,
	colorDark : "#000000",
	colorLight : "#ffffff",
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});