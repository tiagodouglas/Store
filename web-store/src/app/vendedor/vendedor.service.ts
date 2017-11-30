import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Vendedor {
  public _id: string;
  public nome: string;
  public endereco: string;
  public telefone: string;
  public cpf: number;
  public dataCadastro: Date;
  public dataAlteracao: Date;
  public status: Boolean;
}


@Injectable()
export class VendedorService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:3000/vendedor')
  }

  public getById(id: String){
    return this.http.get('http://localhost:3000/vendedor/' + id)
  }

  public submit(data: Vendedor) {
    if(data._id) {
      return this.http.put('http://localhost:3000/vendedor/' + data._id, data)
    }
    else {
      return this.http.post('http://localhost:3000/vendedor', data)
    }
  }

  public delete(id: string) {
    return this.http.delete('http://localhost:3000/vendedor/' + id)  
  }

}
