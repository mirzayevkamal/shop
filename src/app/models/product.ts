export class Product {
  id: number;
  quantity: number;
  name: string;
  price: number;
  image: string;

  constructor(id, quantity, name, price, image) {
    this.id = id;
    this, (quantity = quantity);
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
