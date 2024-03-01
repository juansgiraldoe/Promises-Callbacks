//De callback hell a promises.

const paises = [];

const nuevoPais = pais => new Promise( resolve => {
setTimeout(() => {
  paises.push(pais);
  resolve(`Agregado: ${pais}`);
}, 2000);
});

nuevoPais('Alemania')
  .then((result) => {
    console.log(result);
    mostrarPaises();
    return nuevoPais('Francia');
  })
  .then( (result) => {
    console.log(result);
    mostrarPaises();
    return nuevoPais('Canada');
  })
  .then( (result) => {
    console.log(result);
    mostrarPaises();
  });

function mostrarPaises() {
  console.log(paises);
};