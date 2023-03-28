// for (var i = 0; i < 5; i++) {
// console.log(`El valor de i es: ${i}`);
// }

// // for (VALOR INICIAL; COMPARACION; OPERCAION TRAS CADA LOOP) {
// //     CONTENIDO
// // }

// for (var j = 10; j >= 0; j--) {
//     console.log(`El valor de j es: ${j}`);
// }

// for (var x = 10; x >= 0 ; x -= 3){
//     console.log(`El valor de x es: ${x}`);
// }

var timesRepeated = 0;
var sentence = 'La programacion me gusta'

 for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a'){
        timesRepeated += 1;
    }

}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)