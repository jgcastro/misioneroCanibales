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
	

}