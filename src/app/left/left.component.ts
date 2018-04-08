import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { RightComponent } from './../right/right.component';
import { FooterComponent } from './../footer/footer.component';
import { BodyComponent } from './../body/body.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  @Input() headerInstance: HeaderComponent;
  @Input() rightInstance:RightComponent;
  @Input() footerInstance:FooterComponent;
  @Input() bodyInstance:BodyComponent;

  leftData:boolean = false;
 

  constructor() {

   }

  ngOnInit() {

    console.log("headerInstance Value : ",this.headerInstance);
    console.log("rightInstance Value : ",this.rightInstance);
    console.log("footerInstance Value : ",this.footerInstance);
    console.log("bodyInstance Value : ", this.bodyInstance);
    
  }

  displayheaderdiv() {

    // Calling Method of HeaderComponent 'divBlockNone();'
    this.headerInstance.divBlockNone();
    console.log("I am in LeftComponent : ",this.headerInstance);
  }

  displayrightdiv(){

    this.rightInstance.rightDivBlockNone();
    console.log("I am in the left Component :", this.rightInstance);
  }

  displayleftdiv(){

    this.leftData = !this.leftData;
    console.log("I am in the Left Component : ", this.leftData);
  }
  displayfooterdiv(){
    this.footerInstance.footerDivBlockNone();
    console.log("I am in the Left Component", this.footerInstance);
  }
  displaybodydiv(){

    this.bodyInstance.bodyDivBlockNone();

  }


}
