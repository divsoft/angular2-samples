import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'string-splitter',
  template: `<div>
    <ul>
      <li *ngFor="let item of items"> 
      {{item}}
      </li>
    </ul>
  </div>
  `
})
export class StringSplitterComponent implements OnInit {
  @Input() Delimiter;
  @Input() InitialString;
  items:string[];  
  ngOnInit() {
   this.items = this.InitialString.split(",");
  }
}
