// const myName = 'Cristian';
// console.log(`Mi nombre es: ${myName}`);


// const promise = new Promise((resolve, reject) =>{
//     console.log('Promesa ejecutandose!');

//     //resolve('Resuelta')
//     reject('La promesa de ha roto');
// });


// promise.then((value) => {
//     console.log('La promesa se ha resuelto con el valor:', value);
// });

// promise.catch((error) => {
// console.log(error);
// });


// console.log(promise);

// console.log('Este codigo se ejecuta antes que la Promise!');


const getAmountInBank = () => {
    const promise = new Promise((resolve, reject) => {
        resolve(1000000);
        // reject('El servidor no esta disponible')
    });
    return promise;
};

getAmountInBank()
.then((amount) => {
    // console.log(`La cantidad que tenemos en el banco es: ${amount}$`);

    return `La cantidad es: ${amount}`
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(`Error: ${error}`);
});


// fetch('...')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// });
