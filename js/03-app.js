//Promises.

const aplicarDdescuento = new Promise((resolve, reject)=>{
  const descuento = true;
  if (descuento) {
    resolve('Descuento aplicado. :)')
  } else {
    reject('No se aplico el descuento. :(')
  };
});

aplicarDdescuento
  .then( resultado => descuento(resultado))
  .catch( error => descuento(error));

function descuento(mensaje) {
  console.log(mensaje);
}
//Hay 3 valores posibles...
//fulfilled - se cumplio.
//rejected - no se cumplio.
//pending - aun no se cumple ni se rechaza.