import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/buffer';
// import 'rxjs/add/observable/of';

// import { Observable } from 'rxjs/Observable';

import { BehaviorSubject, ReplaySubject } from 'rxjs/Rx';


@Injectable()
export class SqlDatabaseService {

  public TriggerMenu = new Subject();

  constructor() { }

}
