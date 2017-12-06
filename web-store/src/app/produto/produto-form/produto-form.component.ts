import { MarcaService, Marca } from './../../marca/marca.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService, Categoria } from '../../categoria/categoria.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService, MarcaService, CategoriaService]
})
export class ProdutoFormComponent implements OnInit {

  private model: Produto = new Produto()
  private id: String;
  private categorias: any;
  private marcas: any;

  constructor(
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.categorias = this.categoriaService.getAll();
    this.marcas = this.marcaService.getAll();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Produto) => this.model = data);
      }
    });

  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/produto']);
      },
      function (error) {
        console.error(error);
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
