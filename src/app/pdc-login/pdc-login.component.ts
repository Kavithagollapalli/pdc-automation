import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModal } from '../modals/loginmodal';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pdc-login',
  templateUrl: './pdc-login.component.html',
  styleUrls: ['./pdc-login.component.css']
})
export class PdcLoginComponent implements OnInit {
  public pdcLogin: FormGroup;
  public isSubmit: boolean = false;
  public loginModal: LoginModal = new LoginModal();
  public isInvalid:boolean = false;

  constructor(private loginService: LoginService,  private router: Router ) {
    this.pdcLogin = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(30),
      Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]*$/)]),
      password: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    this.isSubmit = true;
    if (this.pdcLogin.invalid) 
    {
      return;
    }   
    this.loginService.doLogin(this.loginModal).subscribe((users: any) => {
     
      if (users.id === this.loginModal.username && users.password === this.loginModal.password) 
      {         
        localStorage.setItem("username", this.loginModal.username);
        
        this.router.navigate(['/productList']);   
      }     
      else{
        this.isInvalid=true;
      }      
    }, 
    error=>{
      this.isInvalid=true;
    });
  }  
  ngOnInit(): void {
  }
}
