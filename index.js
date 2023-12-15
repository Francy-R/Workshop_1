// Ejercicio 1.A
/*
  De un operario se conoce su sueldo y años de antigüedad. Se pide crear 
  un programa que lea los datos de entrada y muestre en consola el valor 
  booleano de las siguientes comparaciones:
  i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o 
  superior a 10 años?
  ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 
  años?
  iii. ¿El sueldo es mayor o igual a $2000 US?

const sueldo = prompt("Por favor ingrese su sueldo")
const antiguedad = prompt("Por favor ingrese su antiguedad")

//Ejercio 1.A i
//alert("Su suedlo es" + sueldo)
// prueba 1 -> sueldo 3000 y antiguedad 10
const sueldoInferior2000 = Number(sueldo) < 2000 //F
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10 // V  || F = V
const ejercicioa = sueldoInferior2000 && antiguedad10 // F && V = F
console.log("respuesta 1.a: " + ejercicioa)

// Ejercio 1.A ii
// prueba 1 -> sueldo 3000 y antiguedad 10
const antiguedadmenor10 = Number(antiguedad) < 10 //F
const ejercicioii = sueldoInferior2000 || antiguedadmenor10  // F || F = F
console.log("respuesta 1.b: "+ ejercicioii)

//Ejercicio 1.A iii
// prueba 1 -> sueldo 3000 y antiguedad 10
const ejercicioiii = !sueldoInferior2000
console.log("respuesta ejercicio 1.c: "+ejercicioiii)

*/
/* EJERCICIO B
 La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
 un descuento del 50% para compras mayores o iguales a los $100.000 
 COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
 muestre en consola el valor booleano que indique si la compra recibe o no 
 el descuento.*/

// const valorCompra = prompt("Ingrese el valor de la compra")
// const compraMayor1000= Number(valorCompra)< 100000
// const ejerciciob = !compraMayor1000
// console.log("respuesta a ejercicio B: "+ejerciciob);

/* EJERCICIO C
Crear una fórmula para saber si un número es o no es un múltiplo de 2.
*/

// const numero = prompt("Ingrese el numero")
// const esMultiplo = Number(numero)% 2 == 0;
// console.log("El resultado del ejercicio C es: "+esMultiplo)


/* EJERCICIO D 
 Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte
*/

// const nombre = prompt("Ingrese el nombre del empleado")
// const salario = prompt("Ingrese el salario basico por hora")
// const horas = prompt("Ingrese la cantidad de horas laboradas")

// const salarioMensual = Number(salario) * Number(horas);
// const subsidio = salarioMensual <= 700000;
// console.log("Nombre Empleado: "+nombre)
// console.log("Salario basico mensual: "+salarioMensual)
// console.log("Recibe subsidio: "+subsidio)


/* EJERCICIO E
Hacer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal.
*/

// const letra = prompt("Ingrese una letra miniscula")
// const esVocal = letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"
// console.log("resultado: "+esVocal)

/* EJERCICIO F
El aeropuerto El Dorado se encuentra en remodelación y requiere un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales para nacionales y extranjeros. Se le solicita diseñar este 
programa para que reciba el primer dígito de un número de pasaporte y 
que muestre el valor booleano que indique si el turista es del país o 
extranjero. Todos los No. de pasaporte que inicien con la letra A son 
nacionales.*/

// const digito = prompt("Ingrese el primer digito de su pasaporte")
// const letra = digito == "A"
// console.log("El pasaporte es nacional: "+letra) 

/* EJERCICIO 2
Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10; crear 
un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
siguientes operaciones algebraica:

*/
// const a = 4;
// let b = 7;
// let c = 2 * b;
// let x = a ;
// let y = 3 * x;
// const u = 6;
// const w = 10
// let z;
// const puntoA = a / (b * c);
// const puntoB = Math.pow(a, 2) + Math.pow(b,92);
// const puntoC = (x + y) / (u + (w / a));
// const puntoD = x / y * (z + w);

// console.log("Resultado punto 2.A: "+ puntoA)
// console.log("Resultado punto 2.B: "+ puntoB)
// console.log("Resultado punto 2.C: "+ puntoC)
// console.log("Resultado punto 2.D: "+ puntoD)

/* EJERCICIO 3
 Tabla de verdad A
*/
const t = true;
const f = false;

console.log("NOT p \n",!t,"\n",!t,"\n", !f, "\n", !f)
console.log("NOT p AND q \n", !t && t, "\n", !t && f, "\n", !f && t,"\n", !f && f,)

/*EJERCICIO B*/
console.log("NOT p \n",!t,"\n",!t,"\n", !f, "\n", !f)
console.log("NOT q \n", !t,"\n", !f,"\n", !t,"\n", !f)
console.log("NOT p AND NOT q\n", !t && !t,"\n", !t && !f, "\n", !f && !t,"\n", !f && !f)