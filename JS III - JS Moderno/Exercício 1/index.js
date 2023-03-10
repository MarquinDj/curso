const media = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  let av = sum / numbers.length;
  console.log(av);
};

media(2, 6, 3, 7, 4);

const mediaPonderada = (...numbers) => {
  const denominador = numbers.reduce((accum, { n, p }) => accum + n * p, 0);

  const divisor = numbers.reduce((accum, number) => accum + number.p, 0);

  const resp = denominador / divisor;

  console.log(resp);
};

mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 });

const mediana = (...numbers) => {
  const arr = [...numbers];
  const denominador = arr.length;

  if (denominador % 2 !== 0) {
    i = Math.floor(denominador / 2);
    console.log(arr[i]);
  } else {
    i = denominador / 2 - 1;
    j = denominador / 2;

    const result = (arr[i] + arr[j]) / 2;

    console.log(result);
  }
};

mediana(15, 14, 8, 7, 3);

const moda = (...numbers) => {
  const qtd = numbers.map((n) => [n, numbers.filter((q) => n === q).length]);

  qtd.sort((a, b) => b[1] - a[1]);
  return qtd[0][0];
};

console.log(moda(3, 4, 5, 6, 4, 5, 6));
