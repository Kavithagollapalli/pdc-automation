import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdcLoginComponent } from './pdc-login/pdc-login.component';
import { PdcProductListComponent } from './pdc-product-list/pdc-product-list.component';
import { PdcAddProductlistComponent } from './pdc-add-productlist/pdc-add-productlist.component';
import { PdcEditProductComponent } from './pdc-edit-product/pdc-edit-product.component';
import { AuthGuard } from './services/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'login', component: PdcLoginComponent},
  {path: 'productList', component: PdcProductListComponent, canActivate: [AuthGuard]},
  {path: 'addproductlist', component: PdcAddProductlistComponent, canActivate: [AuthGuard]},
  {path: 'editproduct/:id', component: PdcEditProductComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: '**', component: PagenotfoundComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule {

 }
