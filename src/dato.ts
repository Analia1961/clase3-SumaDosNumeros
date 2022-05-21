//CLASE 3 - Lunes 25 de abril de 2022
//SECUENCIA

// Ejercicio: Suma de Dos Números

/*
• Leemos los números cargados desde el teclado en los campos 
(dato1 y dato2), y luego los guardamos en las variables
• Realizamos la operación suma con las variables, guardando 
el resultado en otra variable numérica y luego mostramos el 
valor de dicha variable (resultado) por consola.
*/

//… funcionalidad de ingreso de datos …

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número: ";
rotulo2.innerHTML = "Ingrese el segundo número: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  console.log("el primer número es ", primerNumero);

  let segundoNumero: number = Number(dato2.value);
  console.log("el segundo número es ", segundoNumero);

  let resultado: number = primerNumero + segundoNumero;
  console.log("El resultado de la suma es ", resultado);
});
