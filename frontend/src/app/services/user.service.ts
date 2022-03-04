import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }
  //aqui estoy ejecunta la url del register que quiere utilizar
  registerUser(user: any) {
    return this._http.post<any>(this.env + 'user/register', user);
  }
  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); //esta condicional se utiliza solo cuando devuelve true o false si esta o no esta el token
  }

  getToken() {
    return localStorage.getItem('token'); //este va por el token y solo devuelve el token
  }

  logout(){
    localStorage.removeItem('token')
  }
}
