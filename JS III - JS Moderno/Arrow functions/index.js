function normalSum(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
};
console.log(`Soma anônima: ${anonymousSum(2, 2)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma Arrow Function: ${arrowSum(2, 2)}`);

const arrowSub = (a, b) => a - b;

console.log(`Arrow Subtração: ${arrowSub(5, 2)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 21;
console.log(`Dobro Arrow : ${double(number)}`);

const towns = ["Prontera", "Izlude", "Payoin", "Alberta", "Geffen"];

const startingWithP = twons.filter((town) => town[o] === "P");

console.log(startingWithP);
