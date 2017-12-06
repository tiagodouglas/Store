import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
  providers: [CategoriaService]
})
export class CategoriaFormComponent implements OnInit {

  private model: Categoria = new Categoria()
  private id: String;
  checked = true;

  constructor(
    private service: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Categoria) => this.model = data);
      }
    });

  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/categoria']);
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
