import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HttpClient, } from '@angular/common/http';


@Component({
  selector: 'app-restful',
  templateUrl: './restful.component.html',
  styleUrls: ['./restful.component.css']
})


export class RestfulComponent implements OnInit {
a;
  constructor(private Http: Http) {
    ///////////////////////GET////////////////////
    var xxxx = this.Http.get('https://api.github.com/users/seeschweiler').subscribe((data: any) => {
      this.a = data._body;
      console.log("API Data is : ", this.a);
    });
//////==================POST==========================
    const req = this.Http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'Ram',
      body: 'Kumar',
      userId: 6
    }).subscribe((res:any) => {
     let  abcd = res._body;
      console.log("POST RESPONSE",abcd);
    },
      err => {
        console.log("Error occured");
      }
    );
  }
/////////===============


  ngOnInit() {
  }

}
