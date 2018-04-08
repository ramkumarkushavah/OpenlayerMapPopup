import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as ol from 'openlayers';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  bodyData : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  bodyDivBlockNone(){
    this.bodyData = !this.bodyData;
    console.log("I am in the Body Component : ",this.bodyData);
  }

  ngAfterViewInit(){

  

  }


}
