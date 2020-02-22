import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppServiceService} from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private usuarioService:AppServiceService){}
  private listaUsuarios:Observable<any>;
  ngOnInit() {
    this.listarUsuarios(0);
  }
  title = 'desafioLatam';

  listarUsuarios(numeroPagina:number){
    this.usuarioService.listarUsuarios(numeroPagina)
    .subscribe({
      complete:()=>{

      },
      next:(response)=>{
        console.log(response);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
