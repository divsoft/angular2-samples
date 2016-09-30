import { Component } from '@angular/core';
import { ColorSelectorComponent } from './color-selector/color-selector.component';

@Component({
  selector: 'app-root',
  template : `<div class="main_box" [style.background]="color">
  <color-selector (ColorChanged)="ColorChangedHandler($event)"></color-selector>
  </div>  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
color:string ="White";
ColorChangedHandler(color:string)
{
  this.color = color;
}

}
