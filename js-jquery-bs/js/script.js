// ---------------------------------------------------
// [Javascript + jQuery] Funciones
// ---------------------------------------------------
var mostrarResultados = function(texto,estilo){
    $("#mostrarResultado").val(texto);
	$("#mostrarResultado").css("background-color",estilo);
}

/* Función Constructora */
var usuario = function(nombre,fecha) {
	this.nombre = nombre;
	this.fecha = fecha;

	/* Método Privado */
	 var calcularEdad = function() {
		var hoy = new Date();
		var dia = fecha.split('/')[0];
        var mes = fecha.split('/')[1];
        var anno = fecha.split('/')[2]; 
        var hoy_anno = hoy.getYear();
        var hoy_mes = hoy.getMonth();
        var hoy_dia = hoy.getDate();
        var edad = (hoy_anno + 1900) - anno;
        if (hoy_mes < (mes - 1)) {
            edad--;
        }
        if (((mes - 1) == hoy_mes) && (hoy_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }
        return edad;
	}

	/* Método Público */
	this.presentarse = function() {
		var edad = new calcularEdad();
		var mensaje = "Hola, mi nombre es " + this.nombre + " y tengo " + calcularEdad() + " años.";
		mostrarResultados(mensaje,"green");
	}
}

/* Función Anónima */
$("#btn_calcular_edad").click(function(){
	var calcular = new usuario($("#name").val(),$("#fecha_nacimiento").val());
	calcular.presentarse();
});

// ---------------------------------------------------
// [jQuery] Básico
// ---------------------------------------------------

$("#btn_calcular_edad").click(function () {
    (new usuario($("#name").val(), $("#fecha_nacimiento").val())).presentarse();
});

$("#boton_d").click(function() {
    mostrarResultados('prueba', 'blue');
});

$("#boton_e").click(function() {
    str = '';
    $(".special").each(function() {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'red');
});


$("#boton_f").click(function() {
    str = '';
    $("ul li").each(function() {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'green');
});

$("#boton_g").click(function() {
    str = $('#thing1').text();
    $("#languages li").each(function() {
        this.innerHTML=str;
    });
    mostrarResultados(str,'yellow');
});

$("#boton_h").click(function() {
    str = '';
    $("#languages > li").each(function() {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'pink');
});






