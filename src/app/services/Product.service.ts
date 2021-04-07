import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/Product.model';
import { ProductYearDto, SalesForYear } from '../models/ProductForYear';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

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
    let year45 = model.year?.toString();
   // body.set('@parameter', '2000');
    var url: string = "/api/v1/NextSale/GetSalesForYear?year=";
    
    return this.http.get<any>(`${baseUrl}${url}`+year45);
    /*
if (year45){
    let param= new HttpParams()
    
    param.append('year', year45.toString());
    console.log('ingress2345',year45.toString()); 
    return this.http.get<any>(`${baseUrl}${url}`, {params:param});
  }
  else{
    
    console.log('ingress2345'); 
    let params= new HttpParams()
 
    params.append('year', '2000');
     return this.http.get<any>(`${baseUrl}${url}`, {params:params});
    
  }
 */
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
