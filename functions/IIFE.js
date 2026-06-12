// Uma IIFE (Immediately Invoked Function Expression)
// é um padrão em que uma função JavaScript é executada assim que é definida

// Ex: 01
(function sum(a, b) {
  console.log(a + b);
})(7, 6);

//Ex: 02
const task = (() => {
  console.log("Estudar javascript");
})();
