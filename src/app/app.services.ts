import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly _http: HttpClient) {}

  // Begin Verbose Methods

  Get<T>(
    methodService: string,
    apiUrl: string,
    methodParams: Array<any>
  ): Observable<T> {
    let EndPointRequest = `${apiUrl}${methodService}?`;
    for (const tuple of Object.keys(methodParams)) {
      EndPointRequest += `${tuple}=${methodParams[tuple]}&`;
    }
    return this._http.get<T>(EndPointRequest.slice(0, -1));
  }

  Post(
    methodService: string,
    apiUrl: string,
    methodParams: object
  ): Observable<any> {
    const EndPointRequest = `${apiUrl}${methodService}`;
    return this._http.post(EndPointRequest, methodParams);
  }

  Put(
    methodService: string,
    apiUrl: string,
    methodParams: object
  ): Observable<any> {
    const EndPointRequest = `${apiUrl}${methodService}`;
    return this._http.put(EndPointRequest, methodParams);
  }

  Delete(
    methodService: string,
    apiUrl: string,
    methodParams: HttpParams
  ): Observable<any> {
    let EndPointRequest = `${apiUrl}${methodService}?`;
    for (const tuple of Object.keys(methodParams)) {
      EndPointRequest += `${tuple}=${methodParams[tuple]}&`;
    }
    return this._http.delete(EndPointRequest.slice(0, -1));
  }
  // End Verbose Methods
}
