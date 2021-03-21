import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      // ürün eklerken, formda olmasını istediğimiz alanları buraya yazıyoruz.
      productName: ['', Validators.required], //ilk değer, productName'in default'U
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (response) => {
          console.log(response);
          this.toasterService.success(response.message, 'Başarılı'); // asekron olduğun obsevable, toaster her türlü çalışır. o yüzden buraya yazdık
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            console.log(responseError.error.Errors); // array geldiğinden foreachde ya da forda döncez
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toasterService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
              
            }

       
          }
        }
      ); //=> başarısız olursa kodu
    } else {
      this.toasterService.error('Formunuz eksik', 'Dikkat');
    }
  }
}

/*
FormBuilder: reactive Form'un servisi. Bir form html ile, burada yazacağımız kontrolleri birbiri ile ilişkilendirdiğimiz nokta.
html de bir form oluşturmaya yarıyor. Bu bir servis. injectible

 this.productAddForm.value => formdaki alanların karşılığını verir. obje şeklinde çalışır. bunu ekleyebilmek için, bunu product haline
 getirmemiz gerekir.

  Object.assign({},this.productAddForm.value) => product model için bir obje(sınıf oluşturuyor.) içi bomboş (dolu da olabilridi ekleyebilirdik)
  bu sınıfn içine this.productAddForm.value  bunları ekliyor demek

  add yapabilmek için, önce formun valid olup olmadığını kontrol etmek gerekiyor. ikinci olarak da service ihtiyac var. o da;=>
  private productService:ProductService (tabiki)

  add fonsiyonumuz, observable olduğundan, sonunda subcribe edilmesi gerekiyor. bu bilgi bize api dan geliyor(zaten)
*/
