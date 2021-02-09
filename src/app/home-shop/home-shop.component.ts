import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.component.html',
  styleUrls: ['./home-shop.component.css'],
})
export class HomeShopComponent implements OnInit {
  mainProds = [
    { url: 'assets/images/one.png', category: 'New Arrival' },
    { url: 'assets/images/two.png', category: 'New Arrival' },
    { url: 'assets/images/three.png', category: 'Runnings Shoes' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
