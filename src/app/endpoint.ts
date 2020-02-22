import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Endpoint {
    public endpointListarUsuarios:string = 'http://localhost:8080/usuarios/listar?numeroPagina=';
}
