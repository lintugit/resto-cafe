import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient){ }
  getMenu(){
    return this.http.get('https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad');
  }
}
