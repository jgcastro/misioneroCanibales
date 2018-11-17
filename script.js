
var DERECHA = 0;
var IZQUIERDA = 1;
var ladoBarca = DERECHA;//lado de la barca que tomara valores de izquierda y derecha

// funcion que detecta cuando se le hace click a uno de los contenedores de fragmento de tierra que contiene las imagenes
$('#fragmentoTierraDer').click(function(e){

	if(ladoBarca == DERECHA){

		identObjetoSeleccionado(e); // funcion que se encarga de identificar si selecciono una imagen

	}else{

		alert('Error, seleccione unicamente los personajes del lado en donde se encuentra la barca!');

	}

});

// funcion que detecta cuando se le hace click a uno de los contenedores de fragmento de tierra que contiene las imagenes
$('#fragmentoTierraIzq').click(function(e){

	if(ladoBarca == IZQUIERDA){

		identObjetoSeleccionado(e); // funcion que se encarga de identificar si selecciono una imagen

	}else{

		alert('Error, seleccione unicamente los personajes del lado en donde se encuentra la barca!');

	}

	

});


function indetObjetoSeleccionado(e){

	let imagen = $(e.target); // obteniendo el objeto seleccionado
	let barca = null;
	let contPersonajesBarca = null;

	if(imagen.hasClass('canibales')){

		barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		contPersonajesBarca = $('#barca').find("img").length;

		if(contPersonajesBarca < 2){

			imagen.remove();
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');

		}else{

			alert('no hay mas campo en la barca');

		}

	}else if($(e.target).hasClass('misioneros')){
		
		imagen = $(e.target); // obteniendo el objeto seleccinado
		barca = $('#barca');
		// identificando cuantas imagenes tiene la barca
		contPersonajesBarca = $('#barca').find("img").length;

		if(contPersonajesBarca < 2){

			imagen.remove();//se remueve la imagen de el contenedor
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
			//se agrega la imagen a la barca
		}else{

			alert('no hay mas campo en la barca');

		}
	}

}


$('#barca').click(function(e){//cuando hace click en el contenedor e.target detecta exactammente a cual objeto se le hace el click

	var imagen = $(e.target); // obteniendo el objeto clickeado
	var contenedorImagen = null; // variable que identifica el contenedor en donde se almacenara la imagen que se elimine de la barca

	// verificando si la imagen se trata de un canibal o de un misionero
	if(imagen.hasClass('canibales')){

		// verificando el lado en donde se encuentra la barca para saber si el contenedor en donde se almacenara la imagen del canibal es el de la derecha o el de la izquierda
		if(ladoBarca == DERECHA){

			contenedorImagen = $('#contCanibalesDer');
			
		}else{

			contenedorImagen = $('#contCanibalesIzq');

		}

		// eliminando la imagen de la barca y agregandola en el contenedor
		imagen.remove();
		contenedorImagen.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
	

	}else if(imagen.hasClass('misioneros')){ // verificando si la imagen es un misionero
		
		if(ladoBarca == DERECHA){ // verificando el lado en donde se encuentra la barca

			contenedorImagen = $('#contMisionerosDer');
			
		}else{

			contenedorImagen = $('#contMisionerosIzq');

		}

		// eliminando la imagen de la barca y agregandola en el contenedor
		imagen.remove();
		contenedorImagen.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
	}

});


// funcion que se encarga de mover la barca
$('#moverBarca').click(function (){

	// identificando cuantas imagenes tiene la barca
	let contPersonajesBarca = $('#barca').find("img").length;

	// verificando si la barca tiene algun personaje en su interior
	if(contPersonajesBarca > 0){

		// verificando la posición de la barca
		if(ladoBarca == DERECHA){

			// codigo para animar la barca a la izquierda

		}else{

			// codigo para animar la barca a la derecha

		}

	}else{

		alert('Por favor, agregue un personaje dentro de la barca para poderla mover!');

	}

})
