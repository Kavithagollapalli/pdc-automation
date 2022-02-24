import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdc-header',
  templateUrl: './pdc-header.component.html',
  styleUrls: ['./pdc-header.component.css']
})
export class PdcHeaderComponent implements OnInit {
    public userName:string| null = '' ;
    public isLogin:boolean= false;
  constructor(private router:Router) {
  
   }

   ngOnInit(): void {
   
    this.userName = localStorage.getItem("username");
    this.isLogin=this.userName ? true : false;  
  }
  doLogout(){
    this.isLogin=false;
    this.userName=null;
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }

}
