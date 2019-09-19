import { Component } from '@angular/core';
import { PeliculaService } from '../../services/peliculas.services';
import {Pelicula} from '../../models/Pelicula';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [PeliculaService]
})
export class HomePage {

  private peliculas: Pelicula[];
  private cartelera: Array<Pelicula>;
  public url: string;
  public ip:string;
  constructor(private _PeliculaService: PeliculaService) 
  {
    this.cartelera=[];
    this.ip="192.168.1.70";
    this.url="http://"+this.ip+":3700/";
  }

  
  ngOnInit()
  {
    this.getListPeliculasToCartelera();
  }

  getListPeliculasToCartelera()
  {
    this._PeliculaService.getAllPeliculasToCartelera().subscribe(
      result => {
        console.log(result);
        for(var i=0; i<result.cartelera.length;i++)
        {
          this.cartelera.push(result.cartelera[i].referenciaPelicula);
        }
        //console.log(result.peliculas.length);
        //console.log(result.peliculas[0].nombre);
        this.peliculas= this.cartelera;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
