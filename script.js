var MD = 3;//misioneros derecha
var CD = 3;//canibales derecha
var MI = 0;//misioneros izquierda
var CI = 0;//canibales izquierda
var CBI = 0;//canibales barca izquierda 
var CBD = 0;//canibales barca derecha
var MBI = 0;//misioneros barca izquierda 
var MBD = 0;//misioneros barca derecha
var ladoBarca = 'derecha';//lado de la barca que tomara valores de izquierda y derecha


function subir(id){
	if(ladoBarca == 'derecha'){//verificamos si la varca esta a la derecha
		if(id[1] == 'D'){//si el id que envian dice que es derecha se continua de lo contrario se alerta al usuario 
			$('#'+id).css('display','none');//se le aplica el display none a la imagen 
			if(id[0]=='M'){//verificamos si fue un misionero o un canibal para mostrar en barca 
				if(MBD+CBD < 2){
					if(MBD+CBD == 1){
						$('#MBD2').css('display','block');//en caso de que halla algo en la barca se se hace display
					}else{									//al misionero 2
						$('#MBD1').css('display','block');//si no hay nada se hace display al misionero 1
					}
					MBD++; //se suma uno a los misioneros en barca de la derecha
				}else{
					alert('la barca esta llena');
				}
			}else{//si entra aqui es porque esta intentando subir un canibal
				if(MBD+CBD < 2){
					if(MBD+CBD == 1){
						$('#CBD2').css('display','block');//en caso de que halla algo en la barca se se hace display
					}else{									//al canibal 2
						$('#CBD1').css('display','block');//si no hay nada se hace display al canibal 1
					}
					CBD++; //se suma uno a los misioneros en barca de la derecha
				}else{
					alert('la barca esta llena');
				}
			}
		}else{
			alert('No se puede subir porque la barca esta de el otro lado')
		}
		
	}else{//en este caso la bara esta en la izquierda
		if(id[1] == 'I'){//si el id que envian dice que es Izquierda se continua de lo contrario se alerta al usuario 
			$('#'+id).css('display','none');//se le aplica el display none a la imagen 
			if(id[0]=='M'){//verificamos si fue un misionero o un canibal para mostrar en barca 
				if(MBI+CBI < 2){//se verifica cuantos tripulantes tiene la varca
					if(MBI+CBI == 1){
						$('#MBI2').css('display','block');//en caso de que halla algo en la barca se se hace display
					}else{									//al misionero 2
						$('#MBI1').css('display','block');//si no hay nada se hace display al misionero 1
					}
					MBI++; //se suma uno a los misioneros en barca de la derecha
				}else{
					alert('la barca esta llena');
				}
			}else{//si entra aqui es porque esta intentando subir un canibal
				if(MBI+CBI < 2){
					if(MBI+CBI == 1){
						$('#CBI2').css('display','block');//en caso de que halla algo en la barca se se hace display
					}else{									//al canibal 2
						$('#CBI1').css('display','block');//si no hay nada se hace display al canibal 1
					}
					CBD++; //se suma uno a los misioneros en barca de la derecha
				}else{
					alert('la barca esta llena');
				}
			}
		}else{
			alert('No se puede subir porque la barca esta de el otro lado')
		}
	}
	
//funcion para bajar un personaje de la barca
	function bajar(id){
		if(ladoBarca == 'derecha'){//verificamos el lado de la barca para saber de que lado se deven hacer los display block
			if(id[0] == 'M'){//verificamos si intenta bajar a un misionero
				if($('#MD1').css('display') == 'none'){//verificamos si el misionero de mas a la derecha tiene display none y de ser asi se cambia por display block
					$('#MD1').css('display','block');
				}else if($('#MD2').css('display') == 'none'){// se hace la verificacion con las demas imagenes
					$('#MD2').css('display','block');
				}else{//asumiendo que el control de el juego se va a llevar a cabo mediante clicks en este punto se asume que el que falta es el de la orilla 
					$('#MD3').css('display','block');
				}
				MD++;//se aumenta uno a los misioneros de la derecha y se resta a los de la barca
				MBD--;
			}else{//en este punto sabemos que el usuario lo que intenta bajar es un canibal 
				if($('#CD1').css('display') == 'none'){//verificamos si el misionero de mas a la derecha tiene display none y de ser asi se cambia por display block
					$('#CD1').css('display','block');
				}else if($('#CD2').css('display') == 'none'){// se hace la verificacion con las demas imagenes
					$('#CD2').css('display','block');
				}else{//asumiendo que el control de el juego se va a llevar a cabo mediante clicks en este punto se asume que el que falta es el de la orilla 
					$('#CD3').css('display','block');
				}
				CD++;//se aumenta uno a los cannibales de la derecha y se resta a los de la barca
				CBD--;
			}
		}else{
			if(id[0] == 'M'){//verificamos si intenta bajar a un misionero
				if($('#MI1').css('display') == 'none'){//verificamos si el misionero de mas a la Izquierda tiene display none y de ser asi se cambia por display block
					$('#MI1').css('display','block');
				}else if($('#MI2').css('display') == 'none'){// se hace la verificacion con las demas imagenes
					$('#MI2').css('display','block');
				}else{//asumiendo que el control de el juego se va a llevar a cabo mediante clicks en este punto se asume que el que falta es el de la orilla 
					$('#MI3').css('display','block');
				}
				MI++;//se aumenta uno a los misioneros de la derecha y se resta a los de la barca
				MBI--;
			}else{//en este punto sabemos que el usuario lo que intenta bajar es un canibal 
				if($('#CI1').css('display') == 'none'){//verificamos si el misionero de mas a la izquierda tiene display none y de ser asi se cambia por display block
					$('#CI1').css('display','block');
				}else if($('#CI2').css('display') == 'none'){// se hace la verificacion con las demas imagenes
					$('#CI2').css('display','block');
				}else{//asumiendo que el control de el juego se va a llevar a cabo mediante clicks en este punto se asume que el que falta es el de la orilla 
					$('#CI3').css('display','block');
				}
				CI++;//se aumenta uno a los cannibales de la derecha y se resta a los de la barca
				CBI--;
			}
		}
	}

}