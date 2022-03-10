export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imageUrl: string,
    public price: number
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price;
  }
}

export const products: Product[] = [
  new Product(
    1,
    'nike',
    `Description. NIKE, Inc., together with its subsidiaries, designs,
develops, markets, and sells athletic footwear, apparel,
equipment, and accessories worldwide. The company offers NIKE
brand products in six categories, including running, NIKE
basketball, the Jordan brand, football, training, and sportswear.`,
    `../../assets/products/Nike.jpg`,
    1000
  ),
  new Product(
    2,
    'Puma',
    `Puma SE, branded as Puma, is a German multinational corporation
  that designs and manufactures athletic and casual footwear,
  apparel and accessories, which is headquartered in Herzogenaurach,
  Bavaria, Germany. Puma is the third largest sportswear
  manufacturer in the world.`,
    `../../assets/products/puma.jpeg`,
    1000
  ),
  new Product(
    3,
    'Sketcher',
    `What kind of brand is Skechers? Image result for skechers detail
  Skechers USA, Inc. is an American footwear company. Headquartered
  in Manhattan Beach, California, the brand was founded in 1992 and
  is now the third largest athletic footwear brand in the United
  States.`,
    '../../assets/products/sketchers.jpg',
    1000
  ),
];
