import getSecuenceLenght from "./functions/getSecuenceLenght.js";
import getSecondLongestAndSum from "./functions/getSecondLongestAndSum.js";

console.log("Longitud de la secuencia para 3: ", getSecuenceLenght(3));
console.log("Longitud de la secuencia para 7: ", getSecuenceLenght(7));

let secLongThousand = getSecondLongestAndSum(1000);
let secLongTenThousand = getSecondLongestAndSum(10000);

console.log(
  "La segunda secuencia más larga para 1000 es: ",
  secLongThousand.secondLongest
);
console.log(
  "La suma de todos los elementos para 1000 es: ",
  secLongThousand.sum
);

console.log(
  "La segunda secuencia más larga para 10000 es: ",
  secLongTenThousand.secondLongest
);
console.log(
  "La suma de todos los elementos para 10000 es: ",
  secLongTenThousand.sum
);
