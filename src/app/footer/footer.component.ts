import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerData : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  footerDivBlockNone(){
    this.footerData = !this.footerData;
    console.log("I am in the Footer Component : ", this.footerData);
  }

}
