document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.ul-menu').classList.toggle('show');
});

ScrollReveal().reveal('.header', {delay: 100});
ScrollReveal().reveal('.cont1', {delay: 250});
ScrollReveal().reveal('.parte2', {delay: 170});
ScrollReveal().reveal('.cont2', {delay: 250});
ScrollReveal().reveal('.baner-2', {delay: 170});
ScrollReveal().reveal('.redes', {delay: 170});
ScrollReveal().reveal('.coment', {delay: 200});






$(document).ready(function(){

//Al hacer clic en cualquier img ejecutamos la acción
$('.parte2 img').click(function() {
	//Capturamos el src de la img
	var postimg= $(this).attr('src');
	//Agregamos el src a una href simbólico
	$('#verimagenes').attr('href',postimg);
	//Hacemos clic en el enlace para activar el visor
	$('#verimagenes').click();
});

});



$(document).ready(function(){

	//Al hacer clic en cualquier img ejecutamos la acción
	$('.parte3 img').click(function() {
		//Capturamos el src de la img
		var postimg= $(this).attr('src');
		//Agregamos el src a una href simbólico
		$('#verimagenes').attr('href',postimg);
		//Hacemos clic en el enlace para activar el visor
		$('#verimagenes').click();
	});
	
	});

