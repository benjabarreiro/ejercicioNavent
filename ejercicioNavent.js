console.log('----------------------------------------------------------------------------------------');
console.log('                                   Problema A                                          ');
console.log('----------------------------------------------------------------------------------------');

/* HAY DOS ARRAYS, UNO VACÍO Y OTRO CON 5 ELEMENTOS. AMBOS SE PUEDEN UTILIZAR PARA PROBAR EL CÓDIGO */
let list1 = [];
let list2 = [1,2,3,4,5];

/* FUNCIÓN PARA MODIFICAR list1 */
const insert1 = function(a,b,c,d,e) {
    list1.push(a);
    list1.unshift(b);
    list1.push(c);
    list1.unshift(d);
    list1.push(e);
}

/* CASOS DE PRUEBA: DESCOMENTAR PARA TESTEAR EN CONSOLA */
//insert1(); //se insertan 5 valores undefined
//insert1(6,7,8,9,10); //se insertan los 5 numeros
//insert1("q","w","s","f","r"); // se insertan las 5 letras
//insert1([1,2,3], [4,5,6], [7,8,9], [9,8,7], [6,5,4]); //se insertan arrays
//insert1({name: 'Benjamin'}, {name: 'Juan'}, {name: 'Javier'}, {name: 'Pedro'}, {name: 'Pablo'}); // se insertan objetos

console.log('List 1:');
console.log(list1);

/* FUNCIÓN PARA MODIFICAR list2 */
const insert2 = function(a,b,c,d,e) {
    list2.push(a);
    list2.unshift(b);
    list2.push(c);
    list2.unshift(d);
    list2.push(e);
}

/* CASOS DE PRUEBA: DESCOMENTAR PARA TESTEAR EN CONSOLA */
//insert2(); //se insertan 5 valores undefined
//insert2(6,7,8,9,10); //se insertan los 5 numeros
//insert2("q","w","s","f","r"); // se insertan las 5 letras
//insert2([1,2,3], [4,5,6], [7,8,9], [9,8,7], [6,5,4]);
//insert2({name: 'Benjamin'}, {name: 'Juan'}, {name: 'Javier'}, {name: 'Pedro'}, {name: 'Pablo'});
console.log('List 2:');
console.log(list2);

console.log('----------------------------------------------------------------------------------------');
console.log('                                   Problema B                                          ');
console.log('----------------------------------------------------------------------------------------');

/* SE CREA UNA VARIABLE */

let arr3;

/* SE CREA UNA FUNCIÓN QUE RECIBE DOS ARRAYS, ESTA FUNCIÓN CONCATENA Y ORDENA AMBOS ARRAYS */
const concatSort = function(arr1, arr2) {
    if(Array.isArray(arr1) && Array.isArray(arr2)) {
        arr3 = arr1.concat(arr2).sort();
    } else {
        console.log('arr1 y arr2 deben ser arrays');
    }
}

/* CASOS DE PRUEBA: DESCOMENTAR PARA TESTEAR EN CONSOLA */
//concatSort([1,3,5,7,9], [2,4,6,8]); //Devuelve todo ok
//concatSort(5, 1); //Te pide que introduzcas un array por cada parametro de la función
//concatSort([1,2], [1,2], [1,2]); Ignora el tercer parámetro porque no existe dentro de la función
console.log(arr3);