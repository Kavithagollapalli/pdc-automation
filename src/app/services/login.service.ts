import { Injectable } from '@angular/core';
import { LoginModal } from '../modals/loginmodal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  doLogin(loginModal:LoginModal){
    const url = `api/users/${loginModal.username}`;
    return this.http.get(url,this.httpOptions);
 
  }
  
}
