/*
Podemos simplificar esta linea de codigo en:

let titulo = document.querySelector("h1");

titulo.innerHTML = "Adivina el número";

let descripcionJuego = document.querySelector("p");

descripcionJuego.innerHTML = "Inserta un número entre el 1 y el 10";

*/
let numerosGenerados = [];
let intentos = 1;
let maximo = 10;
let aleatorio = generarNumeroAleatorio();



function asignarTexto(elemento,texto){
   document.querySelector(elemento).innerHTML = texto;
}

asignarTexto("h1","Adivina el número");
/*
onClick = "texto javascript"

Una funcion es un bloque de codigo 
que ejecuta una tarea y que puede o no
devolver un valor
*/


function verificarIntento (){
    
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(numeroUsuario === aleatorio){
        asignarTexto("p",`Acertaste el numero en ${intentos} ${(intentos===1)?"intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        intentos++;
        if(aleatorio>numeroUsuario){
            asignarTexto("p","El numero secreto es mayor");
        }else{
            asignarTexto("p","El numero secreto es menor");
        }
        limpiarCampo();
    }
  
}

function reiniciar (){
    aleatorio = generarNumeroAleatorio(1,10);
    limpiarCampo();
    document.querySelector("p").innerHTML = "";
    
    document.getElementById("reiniciar").setAttribute("disabled",true);
    intentos = 1
}
const limpiarCampo = ()=>{
    document.querySelector("#numeroUsuario").value = "";
}

//FUNCION PARA GENERAR UN NUMERO ALEATORIO
function generarNumeroAleatorio(){

    let numeroAleatorio = Math.floor((Math.random()*maximo)+1);

    console.log(numeroAleatorio);


    if(numerosGenerados.length == maximo){
        console.log(`numerosGenerados.length == maximo ${numerosGenerados.length}  == ${maximo}`)
        document.querySelector("h1").innerHTML = "Todos los numeros han sido sorteados";
    }else{
        if(numerosGenerados.includes(numeroAleatorio)){
            return generarNumeroAleatorio();
        }else{
            numerosGenerados.push(numeroAleatorio);
            console.log(numerosGenerados);
            return numeroAleatorio;
        }
    }

}




