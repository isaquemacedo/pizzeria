import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { IndexComponent } from './index/index.component';
import { StoreModule } from '@ngrx/store';
import { categoriesReducer, categoriesKey } from 'src/app/core/reducers/categories-reducers';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(
      categoriesKey, categoriesReducer
    ),
    MatCardModule,
    MatListModule
  ]
})
export class CategoriesModule { }
