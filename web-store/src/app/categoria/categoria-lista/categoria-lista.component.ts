import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css'],
  providers: [PagerService, CategoriaService]
})
export class CategoriaListaComponent implements OnInit {
  private categorias: any;
  title: 'Categorias';
  public categoria: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];


  constructor(private service: CategoriaService,private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.categorias) {
      this.pager = this.pagerService.getPager(this.categorias.length, page);

      this.pagedItems = this.categorias.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.categorias = data;
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
