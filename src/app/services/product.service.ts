import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // bunun vasıtasıyla artık bir backende istekte bulunabiliyoruz. reactDa axios ya da fetch ile
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';
//yapabiliyoruz. ama angular frameworkünde bu var. api call çağrısı yapabiliyoruz.


@Injectable({ // bu bir enjekte edilecek servise demek
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44331/api/';
  // private kullanmamın sebebi, ben dışardan çağırmak istersem, getirebilirim. Ama private yapmamın nedeni, sadece bu classta kullancam demek.
  // httpClient'ı kullanabilmek içn onu enjekte etmek gerekiyor. Ben httpClient türünde nesne istiyorum diyorum.
  // api daki datayı karşılamaya çalışcam.
  // bana api'den product response model geliyor
  constructor(private httpClient: HttpClient) { }

  // dönüş tipi observable. veri tipim productResponseModel.
  getProducts():Observable<ListResponseModel<Product>> { // subscribe olunabilir bir response model döeneceksinn
    let newPath=this.apiUrl + "products/getall"

    // gelen datayı bu metoda map edeceksin demek.
    return this.httpClient.get<ListResponseModel<Product>>(newPath); // consturctorda verdiğiniz değişken, sanki clasın içinde tanımlanmış bir değişken gibidir.

    // ben buraya direkt apiUrl dersem, aslında js de class diye birşey yok(saf js'de. ecmascriptte var. ama onlar da arka planda class değil.
    // js'de hersey aslında fonksiyon. bu arka planda iç içe fonksiyon oluşturuyor. ben buna this dediğimde, bu benim en üstteki classa karşılık geliyor. yukarda
    // tanımladığımı, this ile çağırmak zorundayım. gelen yapı any olarak kabul edildiğinden generic giriyor)
  }
  
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newpath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId

    return this.httpClient.get<ListResponseModel<Product>>(newpath);
  }
 
  // Product eklemek için kullandığım metot => , 'den sonrası product nesnesi.=> hangi adrese ne gönderiyim.
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl +"products/add", product)
  }
}

// bir component httpclient'ı kullanmaz => httpClient'ı buraya koyduk.