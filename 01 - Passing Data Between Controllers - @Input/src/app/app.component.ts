import { Component } from '@angular/core';
import { StringSplitterComponent } from './string-splitter/string-splitter.component';

@Component({
  selector: 'app-root',
  template : `<div>
  <string-splitter [Delimiter]="strDelimiter" [InitialString]="strInitialString"></string-splitter>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
 strDelimiter : string = ",";
 strInitialString : string = "I,Like,Divesh,Blog"
}
