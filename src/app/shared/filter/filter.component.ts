import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  @Output() searchFilter = new EventEmitter();
  @Output() priceFilter = new EventEmitter();
  @Input() isEmpty: boolean;

  constructor() {}

  ngOnInit(): void {}

  searchNow(term) {
    return this.searchFilter.emit(term);
  }

  filterByPrice(min,max){
   this.priceFilter.emit({min,max})
  }
}
