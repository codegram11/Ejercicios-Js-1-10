/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto,
 *  pe. miFuncion("Hola Mundo") devolverá 10.
 */


const contadorCadena = (cadena) => {
    let tipo = typeof cadena === typeof ' ' ? true : false;

    if (tipo) {
        return cadena.length;
    } else {
        return 'Este dato no es una cadena';
    }

}

console.log(contadorCadena('mI CASA'))



/**2) Programa una función que te devuelva el texto recortado según el número de caracteres 
 * indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
 * */

const textoRecortado = (cadena, num) => {
    let ban = ((typeof cadena === typeof '') && Object.is(typeof num, typeof 1)) ? true : false;
    if (ban) {
        return cadena.slice(0, num);
    } else {
        return 'Indica Datos Correctos ';
    }
}

console.log(textoRecortado('Hola Mundo', 6));

/**3) Programa una función que dada una String te devuelva un Array de textos separados 
 * por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 
 * */

const textoSeparado = (cadena, caracter) => {
    let ban = typeof cadena === typeof '' ? true : false;
    if (ban) {
        return cadena.split(caracter);
    } else {
        return 'Indica Datos Correctos ';
    }
}

console.log(textoSeparado('Hola Mundo', ' '));

/**4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 *  devolverá Hola Mundo Hola Mundo Hola Mundo. 
 * */

const repetirTexto = (cadena, repetir) => {
    let ban = (typeof cadena === typeof ' ') && (Object.is(typeof repetir, typeof 1)) ? true : false;
    if (ban) {
        for (let i = 0; i < repetir; i++) {
            console.log(cadena);
        }
    } else {
        console.log('Indica Datos Correctos')
    }
}

repetirTexto('hola', 4)