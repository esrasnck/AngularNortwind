import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number,rate:number): number {
    return value + (value*rate/100);
  }

}

// transform(value: unknown, ...args: unknown[]): unknown {
  // value : pipe 'ınızın değiştirmeye çalıştığı değer. (unitPrice'ın kendisi)
//unkown : dönüş tipi
// args : parametreler. unknown array olarak tutuluyor.

/*  transform(value: number,rate:number): number {
    return 0; => ilk değer, pipe'ımızın değiştirmek istediği değer ikinci değer ise ilk parametremiz. başka bir parametre varsa yanına
    yazarız. 
    transform(value: number,rate:number, x:number) => gibi
  } */