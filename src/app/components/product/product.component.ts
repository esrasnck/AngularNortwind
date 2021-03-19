import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

// onInit ne demek? bunu implement edince ngOnInit'i implement ediyorz.
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filterText = '';
  dataLoaded = false;

  /*şimdilik  buna gerek kalmadı
    productResponseModel: ProductResponseModel = {
    data: this.products,
    message: '',
    success: true,
  }; // sen bir productResponseModelsin diyor sen bana üç alanı (data message ve successi vermek
  //zorundasın diyor.) */

  // servisi böyle injekte ettim.
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService,
  ) {} // product componentinin instance'ını yaratmak. Bellekte oluşturmak. newlemek. Constructorda bir datayı initiliza etmek
  // dışında hiç birşey yapılmaz. Constructor'ın tanımı c# da ve java da bu şekildedir. Çağrı yine yanlış öğretmiş mk.

  ngOnInit(): void {
    // productComponent ilk açıldığında çalışan metodumuzdur. bu dom'a yerleştiğinde, açıldığında çalışan komuttur.
    // constructor gibi değilmiş ama. o farklıymış.
    console.log('Init çalıştı');
    //activetedRoute a gidip kategori var mı yok mu görmem gerek
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });

    // asekron olduğu için, params bana abone olunan birşey dönüyor. yoksa anlamı yok. response'u observable ın içindeki hede oluyor
  }

  // amacım burada ürünleri getirmek. Product datasını doldurmak gayretindeyim. bunun için bir ngOnInit'e de kod yazarım. ama düzenli olsun diye
  // her işi yapacak şey için operasyon yazıyoruz.(metot)
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data; // api'lar genelde asekron olduğu için böyle yapıyoruz.
      this.dataLoaded = true; // => sekron haline getiriyor subscribe
    }); // servisten de bunu çağıryoruz. herşey mis. obsevable döndürdüğünden subscribe olabiliyoruz.
  }

  // kategori yoks ilkini varsa ikincisini kullan diye bir yapı kurcaz
  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }

  addToCart(product: Product) {
  
      this.toastrService.success('sepete eklendi', product.productName);
      this.cartService.addToCart(product); // sepete eklemek istediğimiz her yerde bunu yapabiliriz.
    
  }


}

// observable => subscribe asekron çalışıyor. js dünyasında standart olarak böyle.

// js de void yok. typescript de void var. js de ne döndürdüğünü belirtmek de yok. ama typescript tip güvenli bağlamda bizi
// koruyor. bu arka planda js koduna dönüşüyor.

// api'a httpClient isimli nesne vasıtasıyla kullanabiliyoruz.

// get'i subscribe edip devam ettirmek gerekiyor. Gelen response içimn ne yazacağını burada yazıyor.
//  this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{"// yanıt başarılı geldiğinde ne yapayım buraya yazılır"});
// httclinet bana şu url den işlem yap. gelen response'u buna maple. dönecek olan sonuca abone ol demek. gelen response/ yanıt buna (response'a eşleşiyor.)

// sana categoryId gelirse, sen product'ı değil de onu https://localhost:44331/api/products/getbycategory?categoryId=1 çalıştır dememn gerekiyor gibi=> bunun için servisler

// activatedRoute:ActivatedRoute = aktifleştirilimiş root. mevcut rout.(parametre gönderilen url gibi) angularda built in bir servis var. bu bir servis.
