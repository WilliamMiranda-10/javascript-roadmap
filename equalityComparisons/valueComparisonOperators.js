let n1 = "5"; //converte a string para number
let n2 = 5;

//exemplos ==
console.log("123" == 123); //true
console.log(0 == false);
console.log(1 == true);
console.log(n1 == n2); //true

//exemplos: === compara tanto o valor quanto o tipo se e number, string, boolean etc

console.log("123" === 123); //false
console.log(0 === false); // false
console.log(n1 === n2); // false
console.log(null === undefined); //false
console.log(NaN === NaN) //false

// object.is Parecido com ===, mas trata casos especiais de forma diferente.

console.log(Object.is(n1, n2)); //false
console.log(Object.is(NaN, NaN)); //true
