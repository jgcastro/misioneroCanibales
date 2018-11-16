
var ladoBarca = 'derecha';//lado de la barca que tomara valores de izquierda y derecha
// funcion que detecta cuando se le hace click a la barca
$('.contenedor').click(function(e){//cuando hace click en el contenedor e.target detecta exactammente a cual objeto se le hace el click

	console.log(e.target);

	if($(e.target).hasClass('canibales')){

		var imagen = $(e.target);
		var barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		var contUsuariosBarca = $('#barca').find("img").length;
		console.log(contUsuariosBarca);
		console.log(imagen.attr('class'));
		console.log(imagen.attr('src'));

		if(contUsuariosBarca < 2){

			imagen.remove();
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');

		}else{

			alert('no hay mas campo en la barca');

		}

	}else if($(e.target).hasClass('misioneros')){
		var imagen = $(e.target);
		var barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		var contUsuariosBarca = $('#barca').find("img").length;
		console.log(contUsuariosBarca);
		console.log(imagen.attr('class'));
		console.log(imagen.attr('src'));

		if(contUsuariosBarca < 2){

			imagen.remove();//se remueve la imagen de el contenedor
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
			//se agrega la imagen a la barca
		}else{

			alert('no hay mas campo en la barca');

		}
	}

});


$('#barca').click(function(e){//cuando hace click en el contenedor e.target detecta exactammente a cual objeto se le hace el click

	console.log(e.target);

	if($(e.target).hasClass('canibales')){

		var imagen = $(e.target);
		var barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		var contUsuariosBarca = $('#barca').find("img").length;
		console.log(contUsuariosBarca);
		console.log(imagen.attr('class'));
		console.log(imagen.attr('src'));

		if(contUsuariosBarca < 2){

			imagen.remove();
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');

		}else{

			alert('no hay mas campo en la barca');

		}

	}else if($(e.target).hasClass('misioneros')){
		var imagen = $(e.target);
		var barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		var contUsuariosBarca = $('#barca').find("img").length;
		console.log(contUsuariosBarca);
		console.log(imagen.attr('class'));
		console.log(imagen.attr('src'));

		if(contUsuariosBarca < 2){

			imagen.remove();//se remueve la imagen de el contenedor
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
			//se agrega la imagen a la barca
		}else{

			alert('no hay mas campo en la barca');

		}
	}

});
