import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { VendaService } from './../venda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-lista',
  templateUrl: './venda-lista.component.html',
  styleUrls: ['./venda-lista.component.css']
})
export class VendaListaComponent implements OnInit {

  private vendas: any;
  title: 'Vendas';
  public venda: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];

  constructor(private service: VendaService, private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.vendas) {
      this.pager = this.pagerService.getPager(this.vendas.length, page);

      this.pagedItems = this.vendas.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.vendas = data;
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
