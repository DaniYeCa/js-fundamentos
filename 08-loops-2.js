var count = 0;

while(count <= 10) {
    console.log(`La cuenta va por ${count}`);

    count++;
}

var negativeCount = 10;

while(negativeCount >= 0) {
    console.log(`La cuenta va por ${negativeCount}`);

    negativeCount--;
}

console.log(`---------------`);

var timesRepeated = 0;
var sentence = 'La programacion me gusta'

while (i < sentence.length) {
    if (sentence[i] === 'a'){
        timesRepeated += 1;
    }

    i++
}

 for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'm'){
        timesRepeated += 1;
    }

}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)
