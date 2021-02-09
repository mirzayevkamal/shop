import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  inCart = [];
  prodsQuantity: number = 0;
  prodExist = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );



  ngOnInit() {
    this.inCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.calcQty();

    this.cartService.getPrd().subscribe((selectedProduct: Product) => {
      let found = this.inCart.find((product) => product.id === selectedProduct.id);

      if (found) found.quantity++;
      else this.inCart.push(selectedProduct);

      this.prodsQuantity = 0;
      this.calcQty();
      localStorage.setItem('cart', JSON.stringify(this.inCart));

    });

    this.cartService.watchStorage().subscribe((res)=>{
      this.inCart = JSON.parse(localStorage.getItem('cart')) || [];
      this.prodsQuantity = 0;
      this.calcQty();
    })
  }


  calcQty() {
    this.inCart.forEach((product) => {
      this.prodsQuantity += product.quantity;
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartService: CartService
  ) {}
}
