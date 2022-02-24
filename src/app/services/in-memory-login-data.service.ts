import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LoginModal } from '../modals/loginmodal';
@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService{
  

  constructor() { }
  createDb(){
    const users:any[] = [
      {id: "kavitha", password: "12345"},
      {id: "Narayana", password: "abc123"},
      {id: "harip", password: "harip"},
      {id: "kavinary", password: "abcd143"}
    ];
    const products:any[] = [
      {id:1, name: "Chair", price: 2500},
      {id:2, name: "Wardrobe", price: 12000},
      {id:3, name:"Coffe Table", price: 8000},
      {id:4, name:"DiningTable", price: 10000},
      {id:5, name: "Sofa", price: 3500},
      {id:6, name: "Stool", price: 1500},
      {id:7, name:"Wheel Chair", price: 5000},
      {id:8, name:"Swivel Chair", price: 12000},
    ];
    return {users:users, products: products};
  }
 
}
