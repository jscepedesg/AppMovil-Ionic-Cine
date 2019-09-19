import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public url: string;
  public ip:string;
  constructor(public _http: HttpClient)
  {
    this.ip="192.168.1.70";
    this.url="http://"+this.ip+":3700/";
  }
  //Me devulve todas las peliculas del servidor que estan en cartelera
  getAllPeliculasToCartelera(): Observable<any>
  {
    return this._http.get(this.url+'api/cartelera-peliculas/');
  }
  getPelicula(id): Observable<any>
  {
    let headers = new HttpHeaders().set('content-Type','application/json');
    return this._http.get(this.url+'api/pelicula/'+id,{headers});
  }
}