import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
      {
        id: 0,
        quantity: 1,
        name: 'Stylish Bag',
        price: 99,
        image: 'assets/images/product1.png',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Sunglasses',
        price: 154,
        image: 'assets/images/product2.png',
      },
      {
        id: 2,
        quantity: 1,
        name: 'Gray Fitness T-Shirt',
        price: 564,
        image: 'assets/images/product3.png',
      },
      {
        id: 3,
        quantity: 1,
        name: 'Google Smart Watch',
        price: 4785,
        image: 'assets/images/product4.png',
      },
      {
        id: 4,
        quantity: 1,
        name: 'Replica T-Shirt',
        price: 15,
        image: 'assets/images/product5.png',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Sunglasses',
        price: 154,
        image: 'assets/images/product2.png',
      },
      {
        id: 2,
        quantity: 1,
        name: 'Gray Fitness T-Shirt',
        price: 564,
        image: 'assets/images/product3.png',
      },
      {
        id: 3,
        quantity: 1,
        name: 'Google Smart Watch',
        price: 4785,
        image: 'assets/images/product4.png',
      },
      {
        id: 4,
        quantity: 1,
        name: 'Replica T-Shirt',
        price: 15,
        image: 'assets/images/product5.png',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Sunglasses',
        price: 154,
        image: 'assets/images/product2.png',
      },
      {
        id: 2,
        quantity: 1,
        name: 'Gray Fitness T-Shirt',
        price: 564,
        image: 'assets/images/product3.png',
      },
      {
        id: 3,
        quantity: 1,
        name: 'Google Smart Watch',
        price: 4785,
        image: 'assets/images/product4.png',
      },
      {
        id: 4,
        quantity: 1,
        name: 'Replica T-Shirt',
        price: 15,
        image: 'assets/images/product5.png',
      },
      {
        id: 1,
        quantity: 1,
        name: 'Sunglasses',
        price: 154,
        image: 'assets/images/product2.png',
      },
      {
        id: 2,
        quantity: 1,
        name: 'Gray Fitness T-Shirt',
        price: 564,
        image: 'assets/images/product3.png',
      },
      {
        id: 3,
        quantity: 1,
        name: 'Google Smart Watch',
        price: 4785,
        image: 'assets/images/product4.png',
      },
      {
        id: 4,
        quantity: 1,
        name: 'Replica T-Shirt',
        price: 15,
        image: 'assets/images/product5.png',
      },
      {
        id: 3,
        quantity: 1,
        name: 'Google Smart Watch',
        price: 4785,
        image: 'assets/images/product4.png',
      },
      {
        id: 4,
        quantity: 1,
        name: 'Replica T-Shirt',
        price: 15,
        image: 'assets/images/product5.png',
      },
  ];

  getAllProducts() {
    return this.products;
  }

  constructor(private http: HttpClient) {}
}
