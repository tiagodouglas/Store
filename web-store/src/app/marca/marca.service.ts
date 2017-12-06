import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Marca{
  public _id: string;
  nome: String;
}

@Injectable()
export class MarcaService {


  constructor(private http: HttpClient) { }
  
    public getAll() {
      return this.http.get('http://localhost:3000/marca')
    }
  
    public getById(id: String){
      return this.http.get('http://localhost:3000/marca/' + id)
    }
  
    public submit(data: Marca) {
      if(data._id) {
        return this.http.put('http://localhost:3000/marca/' + data._id, data)
      }
      else {
        return this.http.post('http://localhost:3000/marca', data)
      }
    }
  
    public delete(id: string) {
      return this.http.delete('http://localhost:3000/marca/' + id)  
    }

}
