import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/tutorial.model';

const baseUrl = 'https://localhost:44309/api/v1/product/All';

@Injectable({
  providedIn: 'root'
})
export class ProductAllService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductDto[]> {
    
    return this.http.get<ProductDto[]>(baseUrl);
  }

/*  get(id: any): Observable<Tutorial> {
    console.log('2');
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log('3');
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    console.log('4');
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    console.log('4');
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }*/
}
