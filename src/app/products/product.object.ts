export class Product {
  constructor(
    public id: number,
    public name: String,
    public description: String,
    public imageUrl: String,
    public price: number
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price;
  }
}
