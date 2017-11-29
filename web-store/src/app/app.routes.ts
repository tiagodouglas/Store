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
    }
]

export const RoutingModule = RouterModule.forRoot(routes)
