import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[];
  dealProduct = {
    id: 7,
    name: 'Sneakers Original Nike New',
    quantity: 1,
    price: 250,
    image: 'assets/images/deal.png',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
