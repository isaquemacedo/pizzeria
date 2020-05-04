import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from 'src/app/core/models/categories.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  get(): Observable<Categories> {
    return this.http.get<Categories>('http://localhost:3000/categories');
  }
}
