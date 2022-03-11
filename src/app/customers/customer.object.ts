export class Customer {
  public password: string = '123';

  constructor(
    public id: number,
    public name: String,
    public phoneNum: String,
    public email: String,
    public address: String,
    public registrationDate: String,
    public imageUrl: String
  ) {
    this.id = id;
    this.name = name;
    this.phoneNum = phoneNum;
    this.email = email;
    this.address = address;
    this.registrationDate = registrationDate;
    this.imageUrl = imageUrl;
  }
}

export const customers: Customer[] = [
  new Customer(
    0,
    'Harry Potter',
    '091234587',
    'HarryPotter@gmail.com',
    'Addis Ababa',
    '3/10/2020',
    '../../assets/customers/pp.jpg'
  ),
  new Customer(
    1,
    'Jack Sparrow',
    '0987654321',
    'JackSparrow@gmail.com',
    'Dire',
    new Date().toLocaleDateString(),
    '../../assets/customers/pp.jpg'
  ),
];
