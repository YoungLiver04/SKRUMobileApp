import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

  const CONFIG ={
    apiUrl: 'http://192.168.1.50:3000/',
  }
@Injectable()
export class AppSettingsProvider {

  constructor(public http: Http) {
    console.log('Hello AppSettingsProvider Provider');
  }
  public getApiUrl() {
    return CONFIG.apiUrl;
  }


}
