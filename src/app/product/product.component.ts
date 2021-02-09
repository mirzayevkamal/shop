import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  @Input() products:[];
  @Input() categoryName: String;
  @Output() productAdder = new EventEmitter<any>();

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  addToCart(product:Product){
    this.cartService.sendPrd(product)
  }

  showProduct(product:Product){
    this.cartService.handleSending(product);
    this.router.navigateByUrl('/shop-single');
  }

}
