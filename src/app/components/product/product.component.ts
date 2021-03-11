import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http'; // bunun vasıtasıyla artık bir backende istekte bulunabiliyoruz. reactDa axios ya da fetch ile
//yapabiliyoruz. ama angular frameworkünde bu var. api call çağrısı yapabiliyoruz.

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

// onInit ne demek? bunu implement edince ngOnInit'i implement ediyorz.
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44331/api/products/getall';
  // private kullanmamın sebebi, ben dışardan çağırmak istersem, getirebilirim. Ama private yapmamın nedeni, sadece bu classta kullancam demek.
  // httpClient'ı kullanabilmek içn onu enjekte etmek gerekiyor. Ben httpClient türünde nesne istiyorum diyorum.
  // api daki datayı karşılamaya çalışcam.
  // bana api'den product response model geliyor
  
   /*şimdilik  buna gerek kalmadı
    productResponseModel: ProductResponseModel = {
    data: this.products,
    message: '',
    success: true,
  }; // sen bir productResponseModelsin diyor sen bana üç alanı (data message ve successi vermek
  //zorundasın diyor.) */

  constructor(private httpClient: HttpClient) {} // product componentinin instance'ını yaratmak. Bellekte oluşturmak. newlemek. Constructorda bir datayı initiliza etmek
  // dışında hiç birşey yapılmaz. Constructor'ın tanımı c# da ve java da bu şekildedir. Çağrı yine yanlış öğretmiş mk.

  ngOnInit(): void {
    // productComponent ilk açıldığında çalışan metodumuzdur. bu dom'a yerleştiğinde, açıldığında çalışan komuttur.
    // constructor gibi değilmiş ama. o farklıymış.
    console.log('Init çalıştı');
    this.getProducts(); // fonksiyonu çağırdım.

  }

  // amacım burada ürünleri getirmek. Product datasını doldurmak gayretindeyim. bunun için bir ngOnInit'e de kod yazarım. ama düzenli olsun diye
  // her işi yapacak şey için operasyon yazıyoruz.(metot)

  getProducts() {
    
    // gelen datayı bu metoda map edeceksin demek.
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products = response.data;
      }); // consturctorda verdiğiniz değişken, sanki clasın içinde tanımlanmış bir değişken gibidir.

    // ben buraya direkt apiUrl dersem, aslında js de class diye birşey yok(saf js'de. ecmascriptte var. ama onlar da arka planda class değil.
    // js'de hersey aslında fonksiyon. bu arka planda iç içe fonksiyon oluşturuyor. ben buna this dediğimde, bu benim en üstteki classa karşılık geliyor. yukarda
    // tanımladığımı, this ile çağırmak zorundayım. gelen yapı any olarak kabul edildiğinden generic giriyor)
  }
}
// js de void yok. typescript de void var. js de ne döndürdüğünü belirtmek de yok. ama typescript tip güvenli bağlamda bizi
// koruyor. bu arka planda js koduna dönüşüyor.

// api'a httpClient isimli nesne vasıtasıyla kullanabiliyoruz.

// get'i subscribe edip devam ettirmek gerekiyor. Gelen response içimn ne yazacağını burada yazıyor.
//  this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{"// yanıt başarılı geldiğinde ne yapayım buraya yazılır"});
// httclinet bana şu url den işlem yap. gelen response'u buna maple. dönecek olan sonuca abone ol demek. gelen response/ yanıt buna (response'a eşleşiyor.)
