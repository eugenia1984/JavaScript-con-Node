/**** Ejercicios de practica ****/

// 1 - Escribir un programa que calcule el número de segundos que existe en un día
// Hay que multiplicar los segundos de un minuto por los minutos de una hora por las horas de un dia
let horas = 24;
let minutosDelDia = horas * 60;
let segundoDelDia = minutosDelDia * 60;
console.log(`El total de segundos que hay en un día es de: ${segundoDelDia}`);

// 2 - Realizar un programa que a partir de los valores ancho = 2 y alto = 5, calcule el área de un rectángulo
let ancho = 2;
let alto = 5;
let areaDeRectangulo = ancho * alto;
console.log(`El área de un rectángulo de ${ancho} de ancho y ${alto} de alto es de: ${areaDeRectangulo}`);

// 3 -Hacer un conversor de grados centígrados a Fahrenheit
// Para ello deberé multiplicar por 9/5 y sumar 32
// Por ejemplo 20 ºC = 68F
let grados = 20;
let convertidoAFahrenheit = grados * 9/5 + 32;
console.log(`20 grados centigrados pasados a fahrenheit son ${convertidoAFahrenheit}`);
