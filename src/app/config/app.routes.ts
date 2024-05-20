import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { InventarioComponent } from '../views/inventario/inventario.component';
import { InformeComponent } from '../views/informe/informe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'inventario', title: 'Inventario', component: InventarioComponent },
    { path: 'informe/:value', title: 'Informe', component: InformeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
