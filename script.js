
// funcion que se encarga de identificar si se le hizo un click a un canibal o un misionero dentro del contenedor
function identObjetoSeleccionado(e){

	let imagen = $(e.target); // obteniendo el objeto seleccionado
	let barca = null;
	let contPersonajesBarca = null;

	if(imagen.hasClass('canibales')){

		barca = $('#barca');
		// identificando cuantas imagenes tiene la barca de canibales y de misioneros
		contPersonajesBarca = $('#barca').find(".misioneros").length+$('#barca').find(".canibales").length;

		if(contPersonajesBarca < 2){

			imagen.remove();
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');

		}else{

			alert('no hay mas campo en la barca');

		}

	}else if($(e.target).hasClass('misioneros')){
		
		imagen = $(e.target); // obteniendo el objeto seleccinado
		barca = $('#barca');
		// identificando cuantas imagenes tiene la barca de canibales y de misioneros
		contPersonajesBarca = $('#barca').find(".misioneros").length+$('#barca').find(".canibales").length;

		if(contPersonajesBarca < 2){

			imagen.remove();//se remueve la imagen de el contenedor
			barca.append('<img class='+imagen.attr("class")+' src='+imagen.attr("src")+' alt="">');
			//se agrega la imagen a la barca
		}else{

			alert('no hay mas campo en la barca');

		}
	}

}

// funcion que se encarga de verificar si el jugador a ganado o a perdido o si continua jugando
function continuarJugando(){

	// variable para identificar cuantos personajes quedan de cada uno
	let contCanibalesDerecha = 0;
	let contMisionerosDerecha = 0;
	let contCanibalesIzquierda = 0;
	let contMisionerosIzquierda = 0;
	let numAzar = 0;
	
	// verificando el lugar en donde se encuentra la barca para contar los canibales que esta contiene

		contCanibalesDerecha = $('#fragmentoTierraDer').find(".canibales").length;
		contMisionerosDerecha = $('#fragmentoTierraDer').find(".misioneros").length;
		contCanibalesIzquierda = $('#fragmentoTierraIzq').find(".canibales").length;
		contMisionerosIzquierda = $('#fragmentoTierraIzq').find(".misioneros").length;
	
	

	//tambien hay que sumar los canibales de la barca
	if(ladoBarca == DERECHA){
		contCanibalesDerecha += $('#barca').find(".canibales").length;
		contMisionerosDerecha += $('#barca').find(".misioneros").length;
	}else{
		contCanibalesIzquierda += $('#barca').find(".canibales").length;
		contMisionerosIzquierda += $('#barca').find(".misioneros").length;
	}
		console.log(contCanibalesDerecha);
	console.log(contMisionerosDerecha);
	console.log(contCanibalesIzquierda);
	console.log(contMisionerosIzquierda);
	// verificando si hay mas canibales que misioneros del lado de la barca
	if(contCanibalesDerecha > contMisionerosDerecha && contMisionerosDerecha > 0 ){

		// obteniendo un numero al azar para obtener uno de los modals del perdedor
		numAzar = Math.round(Math.random())+1;

		// mostrando el modal y reproduciendo el audio
		$('#modalPerdedor'+numAzar).css('display', 'block');
		$('#modalPerdedor'+numAzar).find('audio')[0].play();
		
		return false;
	}else if(contCanibalesIzquierda > contMisionerosIzquierda && contMisionerosIzquierda > 0){
		

		numAzar = Math.round(Math.random())+1;

		$('#modalPerdedor'+numAzar).css('display', 'block');
		$('#modalPerdedor'+numAzar).find('audio')[0].play();
		
		return false;

	}else{
		return true;

	}

}

var DERECHA = 0;
var IZQUIERDA = 1;
var ladoBarca = DERECHA;//lado de la barca que tomara valores de izquierda y derecha
// funcion para saber cuando el documento esta listo



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
			console.log('escanibal');

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
	setTimeout(gano(),1000);

});


// funcion que se encarga de mover la barca
$('#moverBarca').click(function (){

	// identificando cuantas imagenes tiene la barca de canibales y de misioneros
	let	contPersonajesBarca = $('#barca').find(".misioneros").length+$('#barca').find(".canibales").length;
	let numAzar = 0;

	console.log('click '+contPersonajesBarca);

	// verificando si la barca tiene algun personaje en su interior
	if(contPersonajesBarca > 0){

		// verificando la posición de la barca
		if(ladoBarca == DERECHA){
			
			console.log('barca a la derecha');

			if(continuarJugando()){ // funcion que verifica si ha perdido a causa de que hayan mas canibales que misioneros en una de las fracciones de tierra

				// codigo para animar la barca a la izquierda
				$('#barca').removeClass('moverDerecha').addClass('moverizquierda');
				ladoBarca = IZQUIERDA;

			}else{

				// mostrar modal perdedor
				alert('Ha perdido el juego!');


			}

		}else{

			console.log('barca a la izquierda');
			
			if(continuarJugando()){// funcion que verifica si ha perdido a causa de que hayan mas canibales que misioneros en una de las fracciones de tierra

				// codigo para animar la barca a la derecha
				$('#barca').removeClass('moverizquierda').addClass('moverDerecha');
				ladoBarca = DERECHA;

			}else{

				// mostrar modal perdedor
				alert('Ha perdido el juego!');

			}

		}

	}else{

		alert('Por favor, agregue un personaje dentro de la barca para poderla mover!');

	}
	setTimeout(continuarJugando,1000);

});

$('.cerrar').click(function(){

	$('.modal').css('display', 'none');


})


//funcion que comprueba si gano el juego
function gano(){
	let contCanibalesIzquierda = 0;
	let contMisionerosIzquierda = 0;
		contCanibalesIzquierda = $('#fragmentoTierraIzq').find(".canibales").length;
		contMisionerosIzquierda = $('#fragmentoTierraIzq').find(".misioneros").length;
		if(contCanibalesIzquierda + contMisionerosIzquierda == 6){
			
			// mostrando el modal de ganador
			$('#modalGanador').css('display', 'block');
			
			return true;
		}else{
			return false;
		}
}

$('#Iniciar').click(function(){
	location.reload();
});