import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Venda {
  public _id: string;
  public nome: string;
  public vendedor: string;
  public cliente: string;
  public dataVenda: Date;

}

@Injectable()
export class VendaService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:3000/venda')
  }

  public getById(id: String) {
    return this.http.get('http://localhost:3000/venda/' + id)
  }

  public submit(data: Venda) {
    if (data._id) {
      return this.http.put('http://localhost:3000/venda/' + data._id, data)
    }
    else {
      return this.http.post('http://localhost:3000/venda', data)
    }
  }

  public delete(id: string) {
    return this.http.delete('http://localhost:3000/venda/' + id)
  }
}
