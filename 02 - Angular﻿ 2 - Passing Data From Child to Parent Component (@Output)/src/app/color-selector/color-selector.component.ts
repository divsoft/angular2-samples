import { Component,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'color-selector',
  template: `<div class="box">
<select [(ngModel)]="SelectedColor">
 <option [ngValue]="color" *ngFor="let color of colors">{{color}}</option>
</select>
<br>
<br>
<button (click)="ColorSelected()">Change</button>
</div>`,
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  constructor() { }
  @Output() ColorChanged = new EventEmitter();

  SelectedColor:string;
  colors :string[];
  ColorSelected()
  {
      this.ColorChanged.emit(this.SelectedColor); // emit the selected color.
  }

  ngOnInit() {
    this.colors = ["orange","cyan","yellow"]; // Set all allowed colors
    this.SelectedColor = this.colors[0]; // Initialize the SelectedColor
    this.ColorChanged.emit(this.SelectedColor) // emit the Initialized color.
  }
}
