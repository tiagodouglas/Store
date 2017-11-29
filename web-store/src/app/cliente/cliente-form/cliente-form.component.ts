import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from '../cliente.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
  providers: [ClienteService]
})
export class ClienteFormComponent implements OnInit {
  private model: Cliente = new Cliente()
  private id: String;
  checked = true;

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Cliente) => this.model = data);
      }
      this.model.status = true;
    });

  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/cliente']);
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
