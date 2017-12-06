import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Produto {
  public _id: string;
  public nome: string;
  public precoUnitario: number;
  public categoria: string;
  public marca: string;

}

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:3000/produto')
  }

  public getById(id: String) {
    return this.http.get('http://localhost:3000/produto/' + id)
  }

  public submit(data: Produto) {
    if (data._id) {
      return this.http.put('http://localhost:3000/produto/' + data._id, data)
    }
    else {
      return this.http.post('http://localhost:3000/produto', data)
    }
  }

  public delete(id: string) {
    return this.http.delete('http://localhost:3000/produto/' + id)
  }


}
