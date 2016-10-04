import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[clickOnce]'
})
export class ClickOnceDirective {

  constructor(private hostElement:ElementRef) { 
    
  }

@HostListener('click',['$event'])
OnElementClick()
  {
     this.hostElement.nativeElement.disabled = true;
  }
}
