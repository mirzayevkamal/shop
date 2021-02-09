import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  @Input() dealProduct: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.cartService.sendPrd(product)
  }

}
