import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animations';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {

  }
}
