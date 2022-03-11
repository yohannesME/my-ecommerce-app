export class Admin {
  constructor(public email: string, public password: string) {
    this.email = email;
    this.password = password;
  }

  //   public get getEmail(): string {
  //     return this.email;
  //   }

  //   public get getPass(): string {
  //     return this.password;
  //   }

  //   public set setEmail(v: string) {
  //     this.email = v;
  //   }

  //   public set setPass(v: string) {
  //     this.password = v;
  //   }
}

export const admins = [
  new Admin('logan@gmail.com', '123'),
  new Admin('johnathen@gmail.com', 'pass'),
];
