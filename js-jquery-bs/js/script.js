var mostrarResultados = function(texto,estilo){
    $("#mostrarResultado").val(texto);
	$("#mostrarResultado").css("background-color",estilo);
}


$(document).ready(function(){
  $("#boton-anonima").click(function(){
    mostrarResultados('Anonima','red');
  });
});

function mytest(){
	$('#mostrarResultado').val('prueba');
	alert("Hello");
}
