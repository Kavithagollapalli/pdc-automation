import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public userName: string | null = '';
  public isLogin: boolean = false;
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.userName = localStorage.getItem("username");
    this.isLogin = this.userName ? true : false;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }

    return this.isLogin;
  }

}
