import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { VendedorService, Vendedor } from './../vendedor.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css'],
  providers: [VendedorService]
})
export class VendedorFormComponent implements OnInit {
  private model: Vendedor = new Vendedor()
  private id: String;
  checked = true;
  constructor( private service: VendedorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Vendedor) => this.model = data);
      }
      this.model.status = true;
    });
  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/vendedor']);
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
