import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModal } from '../modals/productmodal';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pdc-product-list',
  templateUrl: './pdc-product-list.component.html',
  styleUrls: ['./pdc-product-list.component.css']
})
export class PdcProductListComponent implements OnInit {
  public productList:ProductModal[] =[];
  public productListCopy:ProductModal[]=[];
  public isDeletebtn:boolean=false;
  public deleteProductId:number = 0;
  public deleteNumber:number=0;

  constructor(private productService: ProductService, private router: Router, 
    private activated: ActivatedRoute) { }

    ngOnInit(): void {

      this.getProducts();
    
  }
  getProducts(){
    this.productService.productList().subscribe((products:any)=>{
      this.productList = products;
      this.productListCopy=products;
    });
  }
  searchKeyup(event:any): void{
    let searchText = event.target.value;
    this.productList = this.productListCopy.filter(products => {
      let obj:any = products;
      const valuesArray = Object.keys(obj).map(key => obj[key]);
      const commaJoinedValues = valuesArray.join(" ").toLocaleLowerCase();
      return commaJoinedValues.indexOf(searchText.toLocaleLowerCase()) !==-1;
    });
  }
  
  addProductList(){
    this.router.navigate(['/addproductlist']);
  }
  isDelete(id:any){
    this.isDeletebtn=false;
    this.productService.isDelete(this.deleteProductId).subscribe((products) => {
     this.deleteNumber=0;
    })
  }
  deleteProduct(id:any){
  this.deleteProductId=id;
  }
  editProduct(id:any) {
    this.router.navigate(['/editproduct', id]);

  }
}
