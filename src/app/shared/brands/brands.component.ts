import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands = [
    { url: 'assets/images/brand1.png' },
    { url: 'assets/images/brand2.png' },
    { url: 'assets/images/brand3.png' },
    { url: 'assets/images/brand4.png' },
    { url: 'assets/images/brand5.png' },
    { url: 'assets/images/brand6.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
