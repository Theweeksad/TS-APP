const prices: (number | string)[] = [1,2,3,4,4, 'hola'];
prices.push(1);
prices.push('1');

// const user: [string, number] = ['nicobytes', 15];

let user: [string, number, boolean];
user = ['hola', 23, false];

const [username, age] = user;
console.log(username);
console.log(age);
