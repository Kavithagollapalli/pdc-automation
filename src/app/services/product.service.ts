import { Injectable } from '@angular/core';
import { ProductModal } from '../modals/productmodal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  productList(){
    const url = 'app/products/';
    return this.http.get(url,this.httpOptions);
  }

  addProduct(productModal:ProductModal){
    const url = 'app/products/';
    return this.http.post(url,productModal,this.httpOptions);
  }
  isDelete(id:number){
    const url = 'app/products/'+ id;
    return this.http.delete(url,this.httpOptions);

  }
  productDetails(id:number){
    const url = `app/products/`+ id;
    return this.http.get(url,this.httpOptions);
  }
  updateProduct(productModal:ProductModal){
    const url = 'app/products/';
    return this.http.put(url,productModal,this.httpOptions);
  }

}
