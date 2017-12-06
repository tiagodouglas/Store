import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  providers: [ProdutoService, PagerService]
})
export class ProdutoListaComponent implements OnInit {

  private produtos: any;
  title: 'produtos';
  public produto: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];

  constructor(private service: ProdutoService, private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.produtos) {
      this.pager = this.pagerService.getPager(this.produtos.length, page);

      this.pagedItems = this.produtos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.produtos = data;
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
