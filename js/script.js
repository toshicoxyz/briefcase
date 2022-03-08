
let saludo = "Hola";
let nombre = 'Juan';

let test = ` ${saludo}, ${nombre} `;
console.log(test);


const lista = [1,2,3,4,5];

lista.forEach(function(el,index) {
    console.log(`<h1 id="${index}">${el}</h1>`);
});

console.log(true && false);
console.log(this);
console.log(Date()); 

console.clear();

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function miFuncion(params) {
    console.log(params.length);
}
miFuncion(Object);
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function miFuncion2(str,rec) {
    console.log(str.substring(0,rec));
}   
miFuncion2("Hola Mundo",4);

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function miFuncion3(str,sep) {
    const myArray = str.split(" ");
    return myArray;
}   
const array = miFuncion3("hola que tal"," ");
console.log(array);

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function miFuncion4(str,rep) {
    return str.repeat(rep);;
}   
const x = miFuncion4("Hola Mundo ",3);
console.log(x);
console.clear();

//..........................................
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function miFuncion5(str){
    return str.split("").reverse().join("");
}   
const y = miFuncion5("Hola Mundo");
console.log(y);

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarNumero = (str,str2) =>  {
    console.log(str,str2);
} 
contarNumero("hola mundo adios mundo","mundo");

console.clear();
let cadena = "hola mundo adios mundo";
let str = /mundo/gi;

console.log(str);

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const regex  = /^\[(.*?)\](\(.*?\))$/;
const str = '[Google](http://www.google.com)';
    
const replacement = '<a> href = "$2">$1</a>';
const result = str.replace(regex, replacement);
console.log(result);
    
    