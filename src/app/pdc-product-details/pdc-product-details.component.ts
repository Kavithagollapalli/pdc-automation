import { Component, OnInit } from '@angular/core';
import { Input, OnChanges  } from '@angular/core';
import { ProductModal } from '../modals/productmodal';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-pdc-product-details',
  templateUrl: './pdc-product-details.component.html',
  styleUrls: ['./pdc-product-details.component.css']
})
export class PdcProductDetailsComponent implements OnChanges {
  @Input() inputId: number=0; 
  public product:ProductModal=new ProductModal();
 
  constructor(private productService: ProductService) {
   }
   ngOnInit(){
 
   
  } 
   ngOnChanges(): void {
     if(this.inputId!==0)
     {
      this.productService.productDetails(this.inputId).subscribe((product:any) => {
        this.product=product;
      });
     }
  
  }


}
