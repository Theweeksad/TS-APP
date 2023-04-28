let anyVar : any;
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = [];
anyVar = 1;
anyVar = {};

let isNew : boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

let unKnownVar : unknown;
unKnownVar = true;
unKnownVar = null;
unKnownVar = undefined;
unKnownVar = [];
unKnownVar = 1;
unKnownVar = {};

if(typeof unKnownVar === 'string') {
  unKnownVar.toUpperCase();
}

if(typeof unKnownVar === 'boolean') {
  let isNewV2: boolean = unKnownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
console.log(parse);

