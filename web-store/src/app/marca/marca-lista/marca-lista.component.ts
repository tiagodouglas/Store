import { Component, OnInit } from '@angular/core';
import { PagerService } from './../../services/pager.service';
import { MatSnackBar } from '@angular/material';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-lista',
  templateUrl: './marca-lista.component.html',
  styleUrls: ['./marca-lista.component.css'],
  providers: [PagerService, MarcaService]
})
export class MarcaListaComponent implements OnInit {
  private marcas: any;
  title: 'Marcas';
  public marca: any;
  public searchString: string;
  pager: any = {};
  pagedItems: any[];


  constructor(private service: MarcaService,private snackbar: MatSnackBar, private pagerService: PagerService) { }

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

    if (this.marcas) {
      this.pager = this.pagerService.getPager(this.marcas.length, page);

      this.pagedItems = this.marcas.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.marcas = data;
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
