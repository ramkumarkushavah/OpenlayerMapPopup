
// Default / Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { BodyComponent } from './body/body.component';
import { SettingComponent } from './setting/setting.component';
import { AssetsettingComponent } from './setting/assetsetting/assetsetting.component';
import { AssetfabricComponent } from './pages/asset/assetfabric/assetfabric.component';
import { LoginComponent } from './pages/login/login.component';
import { RestfulComponent } from './TestConcepts/restful/restful.component'
import { SqlDataShowComponent } from './pages/sql-data-show/sql-data-show.component';




// Default Services
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


// Custom Services RestcurdService
import { CommonService } from './services/common.service';
import { RestcurdService } from './TestConcepts/restcurd.service';
import { SqlDatabaseService } from './services/sql-database.service';








const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'asset', component: AssetfabricComponent },
  { path: 'login', component: LoginComponent },
  { path: 'assetSetting', component: AssetsettingComponent },
  { path: 'restful', component: RestfulComponent },
  { path: 'sqlData', component: SqlDataShowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    RightComponent,
    BodyComponent,
    SettingComponent,
    AssetsettingComponent,
    AssetfabricComponent,
    LoginComponent,
    RestfulComponent,
    SqlDataShowComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule, HttpClientModule
  ],
  providers: [CommonService,RestcurdService, SqlDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
