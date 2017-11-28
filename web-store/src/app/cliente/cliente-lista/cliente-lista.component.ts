import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
  providers: [ClienteService]
})
export class ClienteListaComponent implements OnInit {
  private clientes: any
  title: 'Clientes'

  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.clientes = data);
  }

  

}
