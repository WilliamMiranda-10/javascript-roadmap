class User {
  static totalUsers = 0;
  constructor(name) {
    this.name = name;
    User.totalUsers++;
  }
}
// a Class possui totalUsers

// as instancias possui william -> name , joao -> name
const william = new User("William");
const joao = new User("João");

console.log(User.totalUsers); // 2

//-----------------------------------------------------------//

class User1 {
  static totalUsers = 0;
  constructor(name) {
    this.name = name;
    User1.totalUsers++;
  }

  static showName() {
    console.log(this.name);
  }
}

const jose = new User1("José")

User1.showName() // undefined -> pois nao criamos nenhum user.name = "José"
