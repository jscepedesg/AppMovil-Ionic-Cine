export class Pelicula
{
  constructor(public id: number,
    public nombre: string,
    public sinopsis: string,
    public clasificacion: string,
    public duracion: number,
    public genero: string,
    public director: string,
    public reparto: string,
    public pais: string,
    public idioma: string,
    public fecha_de_estreno: string,
    public ruta_trailer: string,
    public image: string,
  )
  {

  }
}