
class User {
    static totalUsuarios = 0;
  
    constructor(name, email) {
      this.name = name;
      this.email = email;
      User.totalUsuarios++;
    }
  
    static totalUsers() {
      return User.totalUsuarios;
    }
  }
  
  const william = new User("William", "willian@gmail.com");
  const maria = new User("Maria", "maria@gmail.com");
  
  console.log(User.totalUsers(), "usuários cadastrados");