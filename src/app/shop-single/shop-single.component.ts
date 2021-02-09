import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css'],
})
export class ShopSingleComponent implements OnInit {
  product: Product;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService
      .handleGetting()
      .pipe(first())
      .subscribe((res) => {
        this.product = res;
        localStorage.setItem('insingle', JSON.stringify(this.product))
      });
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.sendPrd(this.product);
  }

  incrementQty(){
    let prodsInLocal = JSON.parse(localStorage.getItem('cart'));
    if(prodsInLocal.length > 0){
      let found = prodsInLocal.find(prod=> prod.id === this.product.id);
      this.product.quantity++;
      found.quantity++;
      localStorage.setItem('insingle', JSON.stringify(this.product));
      this.cartService.setItem('cart', prodsInLocal);
    } else{
      localStorage.setItem('cart', JSON.stringify([this.product]))
    }
  }

  decrementQty(){
    let prodsInLocal = JSON.parse(localStorage.getItem('cart'));
    let found = prodsInLocal.find(prod=> prod.id === this.product.id);
    if(found.quantity > 1){
      this.product.quantity-=1;
      found.quantity-=1;
      localStorage.setItem('insingle', JSON.stringify(this.product));
      this.cartService.setItem('cart', prodsInLocal);
    }
  }


}
