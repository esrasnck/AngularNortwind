import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category | null; // şu anki kategori. hangi kategori ile çalışmak istiyorsam
  constructor(private categoryservice: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryservice.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category; // gelen kategori bu diye çekmiş oluyoruz. butona tıkladığımda bu adamı set ettim.html buna ulaşbilir.
  }

  getCurrentCategoryClass(category: Category) {
    // eğer dönerken(dönerken kategoriye parametre veriyoruz. ilgili kategori current kategoriye eşit ise css klasını değiştir.)
    if (category == this.currentCategory) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  setAllCategory(){
    this.currentCategory =null
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}

// constructorda private yapmamızın nedeni; bu componente servisi enjekte edecek. js de yani typescriptte constructorda bir değişken
// tanımladığında o public davranır. "dışardan component'e ulaşan kişi service e ulaşmasın diye private yapıyoruz."
