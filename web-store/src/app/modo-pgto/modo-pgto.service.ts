import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Modo{
  public _id: string;
  nome: String;
  descricao: String
}
@Injectable()
export class ModoPgtoService {

  constructor(private http: HttpClient) { }
  
    public getAll() {
      return this.http.get('http://localhost:3000/modo-pgto')
    }
  
    public getById(id: String){
      return this.http.get('http://localhost:3000/modo-pgto/' + id)
    }
  
    public submit(data: Modo) {
      if(data._id) {
        return this.http.put('http://localhost:3000/modo-pgto/' + data._id, data)
      }
      else {
        return this.http.post('http://localhost:3000/modo-pgto', data)
      }
    }
  
    public delete(id: string) {
      return this.http.delete('http://localhost:3000/modo-pgto/' + id)  
    }
  

}
