import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  rightData: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  rightDivBlockNone() {

    this.rightData = !this.rightData;
    console.log("I am in the RightComponent : ", this.rightData);

  }

}
