import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {ProductosComponent} from "./paginas/productos/productos.component";
 import { ContactoComponent } from './paginas/contacto/contacto.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Productos', component: ProductosComponent },
  { path: 'Contactos', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
