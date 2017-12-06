import { ModoPgtoFilterPipe } from './modo-pgto/categoria-filter.pipe';
import { CategoriaFilterPipe } from './categoria/categoria-filter.pipe';
import { VendedorFilterPipe } from './vendedor/vendedor-filter.pipe';
import { ClienteFilterPipe } from './cliente/cliente-filter.pipe';
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
import { VendedorListaComponent } from './vendedor/vendedor-lista/vendedor-lista.component';
import { VendedorFormComponent } from './vendedor/vendedor-form/vendedor-form.component';
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { MarcaListaComponent } from './marca/marca-lista/marca-lista.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';
import { ProdutoListaComponent } from './produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { VendaListaComponent } from './venda/venda-lista/venda-lista.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { ModoPgtoListaComponent } from './modo-pgto/modo-pgto-lista/modo-pgto-lista.component';
import { ModoPgtoFormComponent } from './modo-pgto/modo-pgto-form/modo-pgto-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MarcaFilterPipe } from './marca/marca-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClienteListaComponent,
    ClienteFormComponent,
    TitleComponent,
    ClienteFilterPipe,
    ModoPgtoFilterPipe,
    MarcaFilterPipe,
    VendedorFilterPipe,
    CategoriaFilterPipe,
    VendedorListaComponent,
    VendedorFormComponent,
    CategoriaListaComponent,
    CategoriaFormComponent,
    MarcaListaComponent,
    MarcaFormComponent,
    ProdutoListaComponent,
    ProdutoFormComponent,
    VendaListaComponent,
    VendaFormComponent,
    ModoPgtoListaComponent,
    ModoPgtoFormComponent
  ],
  imports: [
    NgbModule,
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
