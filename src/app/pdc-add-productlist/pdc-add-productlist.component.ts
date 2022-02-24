import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ProductModal } from '../modals/productmodal';

@Component({
  selector: 'app-pdc-add-productlist',
  templateUrl: './pdc-add-productlist.component.html',
  styleUrls: ['./pdc-add-productlist.component.css']
})
export class PdcAddProductlistComponent implements OnInit {
  public pdcaddProduct: FormGroup;
  public isSave:boolean= false;
  public productList:ProductModal[] =[];
  public isInvalid:boolean = false;
  public productModal: ProductModal = new ProductModal();

  constructor(private router: Router, private productService: ProductService) { 
    this.pdcaddProduct = new FormGroup({
      number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      productname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
    });
  }
  ngOnInit(): void {
    this.productService.productList().subscribe((products:any)=>{
       console.log(this.productModal);
    })  
  
  }
  onSave(){
    this.isSave=true;
    if(this.pdcaddProduct.invalid){
      return;
    }
    else{
      this.isInvalid=true;
    }
    this.productService.addProduct(this.productModal).subscribe((products:any) => {
      console.log(this.productModal);
      this.productModal= new ProductModal();
    })
  
   }
   clickBack(){
     this.router.navigate(['/productList']);
   }
  resetForm(){
    this.pdcaddProduct.reset();
  }
}
