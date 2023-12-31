import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./paginas/inicio/inicio.component";
import {ProductosComponent} from "./paginas/productos/productos.component";
 import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductoComponent } from './paginas/productos/producto/producto.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Productos', component: ProductosComponent },
  { path: 'Contactos', component: ContactoComponent},
  {path:'productos/producto/:id', component:ProductoComponent },
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
