import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Categoria{
  public _id: string;
  nome: String;
  descricao: String
}

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }
  
    public getAll() {
      return this.http.get('http://localhost:3000/categoria')
    }
  
    public getById(id: String){
      return this.http.get('http://localhost:3000/categoria/' + id)
    }
  
    public submit(data: Categoria) {
      if(data._id) {
        return this.http.put('http://localhost:3000/categoria/' + data._id, data)
      }
      else {
        return this.http.post('http://localhost:3000/categoria', data)
      }
    }
  
    public delete(id: string) {
      return this.http.delete('http://localhost:3000/categoria/' + id)  
    }
  
 

}
