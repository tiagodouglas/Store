import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Cliente {
  public _id: string;
  public nome: string;
  public endereco: string;
  public cidade: string;
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

}
