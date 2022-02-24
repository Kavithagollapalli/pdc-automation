import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductModal } from '../modals/productmodal';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-pdc-edit-product',
  templateUrl: './pdc-edit-product.component.html',
  styleUrls: ['./pdc-edit-product.component.css']
})
export class PdcEditProductComponent implements OnInit {
  public id: number = 0;
  public productModal: ProductModal = new ProductModal();
  public isSave: boolean = false;
  public isInvalid: boolean = false;
  public pdcaddProduct: FormGroup;

  constructor(private router: Router, private activated: ActivatedRoute,
    private productService: ProductService) {
    this.pdcaddProduct = new FormGroup({
      number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      productname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)])
    });
  }

  ngOnInit(): void {

    this.id = parseInt(this.activated.snapshot.paramMap.get('id') + '');
    console.log(this.id);

    this.productService.productDetails(this.id).subscribe((product: any) => {
      this.productModal = product;
      console.log(product);
    });
  }
  onUpdate(){
    this.isSave=true;
    if(this.pdcaddProduct.invalid){
      return;
    }
    else{
      this.isInvalid=true;
    }
    this.productService.updateProduct(this.productModal).subscribe((products:any) => {
      console.log(this.productModal);
      this.productModal= new ProductModal();
    })
  
   }
  clickBack() {
    this.router.navigate(['/productList']);
  }
  resetForm() {
    this.pdcaddProduct.reset();
  }
}


