import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';  // proje içinde tanımlı ama her yerde kullanmak zorunda değilsin diye böyle oluyor

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // reactive formu kullanmak için bu gerekli (import da önemli.)
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })  // bu nodifikasyon sistemini root dan itibaren, projemiz için kullanılabilir demek.
    
  ],
  providers: [ // global injection kısmı. tüm servisler için izin veriyoz gibi
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// farklı yerlerden getirebileceğimiz paketler / moduller var. httpClient injection burada yapılıyor.