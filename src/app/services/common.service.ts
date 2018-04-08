import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CommonService {

  @Output() commonEmitter: EventEmitter<boolean> = new EventEmitter();


  divTrueFalse = false;
  constructor() { }

  //Using In Asset Fabric Component
  displaydiv() {
    setTimeout(()=>{
      this.divTrueFalse = !this.divTrueFalse;
      this.commonEmitter.emit(this.divTrueFalse);
      console.log("Calling From common Service: divTrueFalse Value is :", this.divTrueFalse);
    },10);
  }
}
