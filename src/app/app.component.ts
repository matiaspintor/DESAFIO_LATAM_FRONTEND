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
  private numerosPagina:Array<number> = new Array<number>();
  private paginaActiva:number = 0;
  private cantidadPaginas:number;
  private isLoading:boolean = false;
  ngOnInit() {
    this.listarUsuarios(this.paginaActiva);
    
  }
  title = 'desafioLatam';

  listarUsuarios(numeroPagina:number){
    this.isLoading = true;
    this.usuarioService.listarUsuarios(numeroPagina)
    .subscribe({
      complete:()=>{
        this.isLoading = false;
      },
      next:(response)=>{
        this.numerosPagina = new Array<number>();
        console.log(response);
        this.cantidadPaginas = response.totalPages;
        this.setNumerosPaginas();
        this.listaUsuarios = response.content;
        
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

  setNumerosPaginas(){
    for(let i = 0;i<this.cantidadPaginas;i++){
      this.numerosPagina.push(i);
    }
  }
  cambiarPagina(numeroPagina:number){

    this.paginaActiva = numeroPagina;
    this.listarUsuarios(numeroPagina);
  }

  private felicitacionActiva:string = '';
  verPoema(poema:string){
    this.felicitacionActiva = poema;
  }
}
