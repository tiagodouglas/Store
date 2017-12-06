import { ModoPgtoService } from './../modo-pgto.service';
import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modo-pgto-lista',
  templateUrl: './modo-pgto-lista.component.html',
  styleUrls: ['./modo-pgto-lista.component.css'],
  providers: [ModoPgtoService, PagerService]
})
export class ModoPgtoListaComponent implements OnInit {

  private modos: any;
  title: 'Categorias';
  public modo: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];


  constructor(private service: ModoPgtoService,private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.modos) {
      this.pager = this.pagerService.getPager(this.modos.length, page);

      this.pagedItems = this.modos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.modos = data;
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
