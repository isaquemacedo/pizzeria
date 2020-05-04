import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesFacadeService } from '../categories-facade.service';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categories$: Observable<Array<Category>>;

  constructor(private categoriesFacadeService: CategoriesFacadeService) {
    this.categories$ = this.categoriesFacadeService.getCategories();
  }

  ngOnInit() {
    this.categoriesFacadeService.loadCategories();
  }

  selectCategorie(id) {
    console.log(id);
  }

}
