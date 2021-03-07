import { Component } from '@angular/core'; // component deklarasyonunu kullanabilmek için onu angular core dan import etmek gerekiyor.
//using gibi

// component yapısını bana veren typescript. arka planda bunu javascripte çeviriyor.
@Component({ // deklarasyon - attribute : klassa calışma anında anlam yükleyen imza. typescriptte @ ile bunu yapıyoz. c# da köşeli parantez gibi
  selector: 'app-root', // index-html'deki html tag'ini bir sayfada göstermek için buna selector diyoruz. html tagı gibi kullanabilirsin demek. app-root'u yazıp
  // kullanabilmesinin tek sebebi budur.
  templateUrl: './app.component.html', // component: html'in datasını yönettiğimiz yer
  styleUrls: ['./app.component.css'] // bu component'ın html'in css isini koyduğumuz yer. array şeklinde. çünkü birden fazla css olabilir.
})
export class AppComponent { // süslü parantez, obje demek. 
  title = 'northwind'; // bu componentin bir tane datası var. js de veritipi vermiyoruz. ama typescript tip günvenlidir. title:string diyebiliriz.
  // title:string ='birşey' => gibi
  user:string ="Engin Demirog"

 // any herşey olabilir demek. yazmasak da olurmuş. her veri türü olabilir. süslü parantez obje demek.
  // product:any={ //obje notasyonu => obje isimlendirmelerinde camelCase kullanıyoruz. c#'da property olarak kullanıyorduk gibi.
  //   productId:1,
  //   productName:'Bardak',
  //   categoryId:1,
  //   unitPrice:5
  // }

  // product1:any={productId:2,productName:'Camera',categoryId:1,unitPrice:5}
  // product2:any={productId:3,productName:'Laptop',categoryId:1,unitPrice:5} 
  // product3:any={productId:4,productName:'Mouse',categoryId:1,unitPrice:5}
  // product4:any={productId:5,productName:'Keyboard',categoryId:1,unitPrice:5}
  // product5:any={productId:6,productName:'Kardan Adam',categoryId:1,unitPrice:5}

  // products =[this.product,this.product1,this.product2,this.product3,this.product4,this.product5] // array olunca böyle oluyor. this çokomelli : o an çalıştığınız obje
  // anlamına geliyor this
}

// bir component sadece bir class iken, ben bunun component olduğunu deklarasyon ile anlatıyorum. Kimin componentsin? app.component.html
// in datasını yönetecek olan componentsin. ./ ise aynı klasör demek (app.component.ts ile aynı klasörde bulunan html demek)