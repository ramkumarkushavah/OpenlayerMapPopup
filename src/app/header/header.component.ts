import { Component, OnInit, Input } from '@angular/core';
import { AssetfabricComponent } from '../pages/asset/assetfabric/assetfabric.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() assetInstance:AssetfabricComponent;

  data: boolean = false;
  
  constructor( public CommonService : CommonService) { 
   
  }

  ngOnInit() {
    console.log(" ** Calling From Header for Asset Fabric Component : ", this.assetInstance);
  }

  divBlockNone() {
    this.data = !this.data; // true become false and false become true
    console.log("I am in HeaderComponent : ",this.data);
  }
  asset() {
    
    this.CommonService.displaydiv();
    console.log("Calling From Header Component for displayDiv() method of common service");

  }

  login() {
    console.log("Calling From Header for Login Component");
  }

  body(){
    console.log("Calling from header component");
  }

  restful(){
    console.log("Calling for Restful Component from header");

  }
  sqlData(){

    console.log("Calling from Header for sqlData");
  }
}
