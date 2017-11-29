import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ClienteService]
})
export class HomeComponent implements OnInit {
  title = 'Home'
  ativos: any;
  inativos: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.totalCliente().subscribe(data => {       
      this.ativos = data['ativos'];
      this.inativos = data['inativos'];
    });
  }
}
