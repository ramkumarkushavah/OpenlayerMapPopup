import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { SqlDatabaseService } from "../../services/sql-database.service"

@Component({
  selector: 'app-sql-data-show',
  templateUrl: './sql-data-show.component.html',
  styleUrls: ['./sql-data-show.component.css']
})
export class SqlDataShowComponent implements OnInit {
  title;
  tenantAdmin;
  tenantId;
  column;
  tenantName;
  dataArrays;

  menuJSON = {
    "key": this.tenantId,
    "column": this.column
  }

  constructor(public SqlDatabaseService: SqlDatabaseService, private http: Http) {

    this.SqlDatabaseService.TriggerMenu.subscribe((res: any) => {


      this.title = res.TenantName;
      this.tenantAdmin = res.TenantAdmin;

      // this.SqlDatabaseService.getDomainName.next(res.TenantName);

      this.menuJSON.key = res.TenantId;


      this.tenantId = res.TenantId;

      this.tenantName = res.TenantName;

    });

    // this.SqlDatabaseService.ListTriggerMenu.subscribe(listdata => {
    //   this.dataArrays = listdata;// data Array Coming from DB
    // });
  }

  ngOnInit() {
    
  }

}
