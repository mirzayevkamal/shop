import { Injectable } from '@angular/core';
import { Subject,Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private subject = new Subject();
  private storageListener= new Subject<string>();
  private toSingleSender = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('insingle')));
  cartTotal = 0;

  watchStorage(): Observable<any> {
    return this.storageListener.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
    this.storageListener.next('changed');
    this.cartTotal = 0;
    JSON.parse(localStorage.getItem('cart')).forEach((item) => {
      this.cartTotal += item.price * item.quantity;
    });
  }

  getTotal(){
    return this.cartTotal;
  }

  getPrd(){
    return this.subject.asObservable();
  }

  sendPrd(product){
    this.subject.next(product);
  }

  handleSending(product:Product){
    this.toSingleSender.next(product)
  }

  handleGetting(){
    return this.toSingleSender.asObservable();
  }

  stopGetting(){
    this.toSingleSender.complete();
  }

  constructor() { }
}
