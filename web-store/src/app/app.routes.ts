import { VendedorFormComponent } from './vendedor/vendedor-form/vendedor-form.component';
import { VendedorListaComponent } from './vendedor/vendedor-lista/vendedor-lista.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'


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
    }
]

export const RoutingModule = RouterModule.forRoot(routes)
