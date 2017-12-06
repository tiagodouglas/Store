import { Modo, ModoPgtoService } from './../modo-pgto.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modo-pgto-form',
  templateUrl: './modo-pgto-form.component.html',
  styleUrls: ['./modo-pgto-form.component.css'],
  providers:[ModoPgtoService]
})
export class ModoPgtoFormComponent implements OnInit {

  private model: Modo = new Modo()
  private id: String;

  constructor(
    private service: ModoPgtoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Modo) => this.model = data);
      }
    });

  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/modo-pgto']);
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
