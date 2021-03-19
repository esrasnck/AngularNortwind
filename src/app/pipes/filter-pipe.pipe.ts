import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {

    filterText =filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Product)=> p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

  // value: değiştirmek istediğimiz değer => değişmesini istediğim data => array filtrenecek. donüs tipi yine product[]
}

// array fonksiyonları : map , filter

// js büyük küçük harf duyarlı. bu yüzden gelen text'i küçük harfe (genellikle) yada büyük harfe çevircez

// eğer filtertext varsa, onu küçük harfe çevir. yoksa boş de.
// return'den sonra: filterText varsa, value 'u filtrele ve o şarta uyan yeni bir diziye uygula. bu şart nedir?
// Js deki filter senin ürünlerini tek tek dolaşıyor. foreach yapıyor bir nevi => indexof ile=> bir string'in içinde var mı? bu bize
// true döndürür. -1'den farklıysa yani varsa, onları yeni bir array yapıp onu döndüryor. yoksa, value'u aynen döndür. index of= bulamazsa -1 bulursa başlangıç indexini döndürür.