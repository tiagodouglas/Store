import { VendaListaComponent } from './venda/venda-lista/venda-lista.component';
import { ProdutoListaComponent } from './produto/produto-lista/produto-lista.component';
import { MarcaFormComponent } from './marca/marca-form/marca-form.component';
import { MarcaListaComponent } from './marca/marca-lista/marca-lista.component';
import { VendedorFormComponent } from './vendedor/vendedor-form/vendedor-form.component';
import { VendedorListaComponent } from './vendedor/vendedor-lista/vendedor-lista.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { VendaFormComponent } from './venda/venda-form/venda-form.component';
import { ModoPgtoListaComponent } from './modo-pgto/modo-pgto-lista/modo-pgto-lista.component';
import { ModoPgtoFormComponent } from './modo-pgto/modo-pgto-form/modo-pgto-form.component';


const routes: Routes = [

    // Rota raiz /
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cliente',
        component: ClienteListaComponent
    },
    {
        path: 'cliente/novo',
        component: ClienteFormComponent
    },
    {
        path: 'cliente/:id',
        component: ClienteFormComponent
    },
    {
        path: 'vendedor',
        component: VendedorListaComponent
    },
    {
        path: 'vendedor/novo',
        component: VendedorFormComponent
    },
    {
        path: 'vendedor/:id',
        component: VendedorFormComponent
    },
    {
        path: 'categoria',
        component: CategoriaListaComponent
    },
    {
        path: 'categoria/novo',
        component: CategoriaFormComponent
    },
    {
        path: 'categoria/:id',
        component: CategoriaFormComponent
    },
    {
        path: 'marca',
        component: MarcaListaComponent
    },
    {
        path: 'marca/novo',
        component: MarcaFormComponent
    },
    {
        path: 'marca/:id',
        component: MarcaFormComponent
    },
    {
        path: 'produto',
        component: ProdutoListaComponent
    },
    {
        path: 'produto/novo',
        component: ProdutoFormComponent
    },
    {
        path: 'produto/:id',
        component: ProdutoFormComponent
    },
    {
        path: 'venda',
        component: VendaListaComponent
    },
    {
        path: 'venda/novo',
        component: VendaFormComponent
    },
    {
        path: 'venda/:id',
        component: VendaFormComponent
    },
    {
        path: 'modo-pgto',
        component: ModoPgtoListaComponent
    },
    {
        path: 'modo-pgto/novo',
        component: ModoPgtoFormComponent
    },
    {
        path: 'modo-pgto/:id',
        component: ModoPgtoFormComponent
    }
    
]

export const RoutingModule = RouterModule.forRoot(routes)
