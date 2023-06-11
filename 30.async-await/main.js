//console.log('Pedimos un pokemon a la API');


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then((res) => res.json)
//   .then((response) => {
//     console.log('respuesta:', response);
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });

// console.log('> ya hemos pedido el pokemon de la API');

// ASYNC AWAIT
const main = async () => {
  console.log('Pedimos un pokemon a la API');

  let pokemon = null;

  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const response = await res.json();
    console.log('respuesta:', response);


    pokemon = response;
  } catch (err) {
    console.log('Error:', err)
  }

  //..
  console.log('> ya hemos pedido el pokemon de la API');
};

main().then(() => {
  console.log(' La funcion main ha terminado')
});
