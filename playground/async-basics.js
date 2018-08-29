console.log('starting app');

setTimeout(() => {
  console.log('Inside of Callback')
}, 2000);

setTimeout(() => {
  console.log('Second timout')
}, 0);

console.log('finishing up');
