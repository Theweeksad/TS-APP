const withOutEnd = () => {
  while(true) {
    console.log('nunca para de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string') {
    return 'es una string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('hola'));
console.log(example([1,2,2,2]));
console.log(example(123123));
console.log(example('hola despues del fail'));

