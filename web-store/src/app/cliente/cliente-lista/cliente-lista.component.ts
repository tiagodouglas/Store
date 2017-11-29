import { MatSnackBar } from '@angular/material';
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

  constructor(private service: ClienteService, private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.getAll();
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  getAll() {
    this.service.getAll().subscribe(data => this.clientes = data);
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      (data) => {
        this.openSnackBar(data['message'], 'Ok');
        this.getAll();
      },
      erro => console.error(erro)
    )
  }
}
