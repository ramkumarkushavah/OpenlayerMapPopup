import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestcurdService {

  constructor(private HttpClient:HttpClient) {
    this.HttpClient.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("API Data is : "+ data);
    });
  }
}
