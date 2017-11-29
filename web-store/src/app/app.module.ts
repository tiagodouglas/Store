import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClienteListaComponent,
    ClienteFormComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCardModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
