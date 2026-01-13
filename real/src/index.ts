class User {
  email: string;
  name: string;
  private city: string = "El Wak";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

let user = new User("j@j.com", "John Doe");
