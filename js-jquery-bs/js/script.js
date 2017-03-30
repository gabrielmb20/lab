var mostrarResultados = function(texto,estilo){
    $("#mostrarResultado").val(texto);
	$("#mostrarResultado").css("background-color",estilo);
}

/* Función Constructora */
var usuario = function(nombre,fecha) {
	/* Método Privado */
	// var calcularEdad = function{
	// 	var hoy = new Date();
	//     var nacimiento = new Date(fecha);
	//     var edad = hoy.getFullYear() - nacimiento.getFullYear();
	//     var m = hoy.getMonth() - nacimiento.getMonth();
	//     if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
	//         edad--;
	//     }
	//     return edad;
	// }

	/* Método Público */
	this.presentarse = function() {
		var m1 = "Hola, mi nombre es ";
		var m2 = " y tengo ";
		var m3 = " años.";
		var mensaje = m1.concat(nombre).concat(m2).concat(fecha).concat(m3);
		mostrarResultados(mensaje,'green');
	}
}

/* Función Anónima */
$(document).ready(function(){
  $("#boton-anonima").click(function(){
    mostrarResultados('Anonima','red');
  });

  $("#btn_calcular_edad").click(function(){
   // usuario($("#name"),$("#fecha_nacimiento"));
   // var test = new usuario('gabriel','1990-12-20');
   var test = new usuario($("#name").val(),$("#fecha_nacimiento").val());
   test.presentarse();
   });
});
