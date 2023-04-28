// Mauro => [M,a,u,r,o] => string => string[]
// [M,a,u,r,o] => Mauro => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Mauro');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', rtaArray);

const rtaStr = parseStr(['M','a','u','r','o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaArray', rtaArray);
