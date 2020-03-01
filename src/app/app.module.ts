import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BaseApiService } from "./api/base-api.service";
import { AuthorizationService } from "./api/authorization.service";
import { IonicStorageModule } from "@ionic/storage";
import { StorageService } from "./services/storage.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({}),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: "__cookery",
      version: 0.1
    }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BaseApiService,
    AuthorizationService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
