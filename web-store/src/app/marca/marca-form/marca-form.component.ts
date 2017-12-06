import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Marca, MarcaService } from './../marca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css'],
  providers: [MarcaService]
})
export class MarcaFormComponent implements OnInit {
  private model: Marca = new Marca()
  private id: String;
  constructor( private service: MarcaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.service.getById(this.id).subscribe((data: Marca) => this.model = data);
      }
    });    
  }

  submit() {
    let roteador = this.router;
    this.service.submit(this.model).subscribe(
      function (data) {
        // this.openSnackBar(data['message'], 'Ok');
        roteador.navigate(['/marca']);
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
