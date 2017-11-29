import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Cliente {
  public _id: string;
  public nome: string;
  public endereco: string;
  public cidade: string;
  public numero: number;
  public estado: string;
  public cep: number;
  public telefone: string;
  public dataCadastro: Date;
  public dataAlteracao: Date;
  public status: Boolean;
}


@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:3000/cliente')
  }

  public getById(id: String){
    return this.http.get('http://localhost:3000/cliente/' + id)
  }

  public submit(data: Cliente) {
    if(data._id) {
      return this.http.put('http://localhost:3000/cliente/' + data._id, data)
    }
    else {
      return this.http.post('http://localhost:3000/cliente', data)
    }
  }

  public delete(id: string) {
    return this.http.delete('http://localhost:3000/cliente/' + id)  
  }

  public totalCliente(){
    return this.http.get('http://localhost:3000/totalCliente');
  }

}
