import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';

@Component({
  selector: 'app-vendedor-lista',
  templateUrl: './vendedor-lista.component.html',
  styleUrls: ['./vendedor-lista.component.css'],
  providers: [VendedorService, PagerService]
})
export class VendedorListaComponent implements OnInit {
  private vendedores: any;
  title: 'Vendedores';
  public vendedor: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];


  constructor(private service: VendedorService, private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.vendedores) {
      this.pager = this.pagerService.getPager(this.vendedores.length, page);

      this.pagedItems = this.vendedores.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.vendedores = data;
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
