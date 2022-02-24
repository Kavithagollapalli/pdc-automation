import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdcHeaderComponent } from './pdc-header/pdc-header.component';
import { PdcLoginComponent } from './pdc-login/pdc-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from './services/in-memory-login-data.service';
import { PdcProductListComponent } from './pdc-product-list/pdc-product-list.component';
import { ProductService } from './services/product.service';
import { PdcAddProductlistComponent } from './pdc-add-productlist/pdc-add-productlist.component';
import { PdcProductDetailsComponent } from './pdc-product-details/pdc-product-details.component';
import { PdcEditProductComponent } from './pdc-edit-product/pdc-edit-product.component';
import { AuthGuard } from './services/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    PdcHeaderComponent,
    PdcLoginComponent,
    PdcProductListComponent,
    PdcAddProductlistComponent,
    PdcProductDetailsComponent,
    PdcEditProductComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryLoginDataService ,  { dataEncapsulation: false }, 

    )
  ],
  providers: [LoginService, 
              ProductService,
              AuthGuard
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
