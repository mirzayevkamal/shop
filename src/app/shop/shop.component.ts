import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products = [];
  filteredProds = [];
  ifEmpty: boolean = false;
  noProds: boolean = false;
  p: number = 1;

  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addToCart(product: Product) {
    this.cartService.sendPrd(product);
  }

  showProduct(product: Product) {
    this.cartService.handleSending(product);
    this.router.navigateByUrl('/shop-single');
  }

  searchHandler(term: string) {
    let foundprods = [];

    this.products.forEach((prod, index) => {
      if (prod.name.toUpperCase().includes(term.toUpperCase())) {
        foundprods.push(this.products[index]);
      } else {
        this.products = this.productService.getAllProducts();
      }
    });

    this.products = foundprods;
    if (term.length < 1) {
      this.products = this.productService.getAllProducts();
    }
  }
  priceFilterHandler(event) {
    this.noProds = false;
    if (event.min === '' || event.max === '') {
      return (this.ifEmpty = true);
    }
    this.products = this.productService.getAllProducts();
    let filteredProds = [];
    filteredProds = this.products.filter(
      (prod) => prod.price > event.min && prod.price < event.max
    );
    this.ifEmpty = false;
    this.products = filteredProds;
    if (this.products.length < 1) {
      this.noProds = true;
    }
  }
}
