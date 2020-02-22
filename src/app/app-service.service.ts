import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Endpoint} from './endpoint';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient,
    private endpoint:Endpoint) { }

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Cache-Control': 'no-cache'
      })
  };

  public listarUsuarios(numeroPagina:number):Observable<any>{
    return this.http.get(this.endpoint.endpointListarUsuarios + numeroPagina, this.httpOptions);
  }
}
