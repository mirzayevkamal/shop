import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  prodsInCart = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.prodsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.calcTotal()

    this.cartService.watchStorage().subscribe((res) => {
      this.prodsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    });
  }

  deleteProduct(product) {
    this.prodsInCart = this.prodsInCart.filter(
      (prod) => prod.id !== product.id
    );
    this.setNewValues();
  }

  calcTotal() {
    this.prodsInCart.forEach((item) => {
      this.cartTotal += item.price * item.quantity;
    });
  }

  incrementQty(product) {
    let found = this.prodsInCart.find(
      (selectedProd) => selectedProd.id === product.id
    );
    if (found) {
      found.quantity += 1;
    }
    this.setNewValues();
  }

  decrementQty(product) {
    let found = this.prodsInCart.find(
      (selectedProd) => selectedProd.id === product.id
    );
    if (found) {
      found.quantity -= 1;
      if (found.quantity === 0) {
        this.prodsInCart = this.prodsInCart.filter(
          (prd) => prd.id !== product.id
        );
      }
    }
    this.setNewValues();
  }

  setNewValues() {
    this.cartService.setItem('cart', this.prodsInCart);
    this.cartTotal = 0;
    this.calcTotal();
  }
}
