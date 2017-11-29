import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
  providers: [ClienteService, PagerService]
})
export class ClienteListaComponent implements OnInit {
  private clientes: any;
  title: 'Clientes';
  public cliente: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];

  constructor(private service: ClienteService, private snackbar: MatSnackBar, private pagerService: PagerService) { }

  ngOnInit() {

    this.getAll();
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    this.pager = this.pagerService.getPager(this.clientes.length, page);

    this.pagedItems = this.clientes.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  getAll() {
    this.service.getAll().subscribe(data => {       
      this.clientes = data;
      this.setPage(1);;
    });
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
