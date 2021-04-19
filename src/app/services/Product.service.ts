import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/Product.model';
import { ProductYearDto, SalesForYear } from '../models/ProductForYear';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Guid } from 'guid-typescript';
import { ResponseMessage } from '../models/ResponseMessage.model';

const baseUrl = 'https://localhost:44309';

@Injectable({
  providedIn: 'root'
})
export class ProductAllService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductDto[]> {

    var url: string = "/api/v1/product/All";

    return this.http.get<ProductDto[]>(`${baseUrl}${url}`);
  }

  getProductForYear(model: ProductYearDto): Observable<SalesForYear[]> {

    let body = new URLSearchParams();
    let year = model.year?.toString();
    var url: string = "/api/v1/NextSale/GetSalesForYear?year=";
    return this.http.get<any>(`${baseUrl}${url}` + year);
  }

  
    getProductForId(id: string): Observable<ProductDto> {

    let body = new URLSearchParams();
    let Id =id;
    var url: string = "/api/v1/product/GetProductId?Id=";
    return  this.http.get<ProductDto>(`${baseUrl}${url}` + Id );
  }

  
  DeleteProductForId(id: string): Observable<ProductDto> {

    let body = new URLSearchParams();
    let Id =id;
    var url: string = "/api/v1/product/GetProductId?Id=";
    return  this.http.get<ProductDto>(`${baseUrl}${url}` + Id );
  }

  setProduct(model: ProductDto): Observable<ResponseMessage> {
console.log('modelvale',model);
    var url: string = "/api/v1/product/CreteProduct";

    model.id = Guid.create().toString();

    let bodyConvert = JSON.stringify(model);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<any>(`${baseUrl}${url}`, bodyConvert, httpOptions);
    
  }


  /*  create(data: any): Observable<any> {
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
