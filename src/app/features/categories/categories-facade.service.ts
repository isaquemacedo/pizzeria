import { Injectable } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Store } from '@ngrx/store';
import { Categories } from 'src/app/core/models/categories.model';
import { ListCategories } from 'src/app/core/actions/actions';
import { categoriesKey } from 'src/app/core/reducers/categories-reducers';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacadeService {

  constructor(
    private store: Store<Categories>,
    private categoriesService: CategoriesService) {}

  loadCategories() {
    this.categoriesService.get().subscribe(
      resp => {
        this.store.dispatch(ListCategories(resp));
      }
    );
  }

  getCategories() {
    return this.store.select(categoriesKey);
  }
}
