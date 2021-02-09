import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() inputType: string;
  @Input() control: FormControl;
  @Input() inputLabel: string;
  constructor() {}

  ngOnInit(): void {}
}
