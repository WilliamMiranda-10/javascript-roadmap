function data(lastName, age) {
  this.lastName = lastName;
  this.age = age;

  this.dataAnonymous = function () {
    setTimeout(function () {
      console.log(this.lastName); // undefined
      console.log(this.age);   // undefined
    }, 2000);
  };

  this.dataArrow = function(){
    setTimeout(()=>{
        console.log(this.lastName) // william
        console.log(this.age)    // 30
    },2000)
  }
}

const res = new data("William", "30");

res.dataAnonymous(); //undefined undefined

res.dataArrow() // William 30
