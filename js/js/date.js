
var myFunction = function() {
    var now = new Date();
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();
    var t = document.createTextNode(year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second);
    document.body.appendChild(t);
}

window.onload= function (){
    var btn= document.getElementById("boton1");
    btn.onclick=myFunction;
};


