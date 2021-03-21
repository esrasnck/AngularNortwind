import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent}, //herhangi birşey verilmezse, ana sayfa ne olsun? => path  // ancak constructorda değişiyor. onun dışında sabit. router outlette ne göstercez? burada yazılıyor
  // hiç birşey yazılmazsa, productComponent'i aç demek 
  {path:"products",component:ProductComponent}, // eğer birisi local host'un sonuna yani 4200'ün sonuna products derse, productcomponenti aç
  {path:"products/category/:categoryId",component:ProductComponent},
  // id=1  demek  :categoryId demek
  {path:"products/add",component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// pathMatch:full demek, bu bizim anasayfamızla ilgili demek. başka birşey gelirse hesaba katma demek.
//  routes mevzusu: birşey demezsek, product componenti getir. sonunda / products dersek de bunu getir demek.
//  {path:"",pathMatch:"full",component:ProductComponent} domain ismi ve bunlar olursa bunu getir diyor.


// category'e tıkladığımız zaman, o kategorideki ürünleri getirmek istiyoruz. dolayısıyla bizim product componente 
// parametre göndermemiz gerekiyor. sen ürünleri listeleyeceksin ama o seçtiğim kategorideki ürünleri getirmemiz gerekiyor