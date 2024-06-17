class user {
  constructor(n) {
    this.name = n
  }

  normal() {
    console.log(this.name)
  }
}

const u1 = new user('abhishek')
u1.normal()
