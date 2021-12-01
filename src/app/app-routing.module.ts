import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
//import { IndexComponent } from './components/index/index.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Producto1Component } from './components/producto1/producto1.component';
import { ProductoComponent } from './components/tabla-producto/producto.component';

const routes: Routes = [
  { path : 'producto', component: Producto1Component},
  { path : 'formulario-producto', component: FormularioProductoComponent},
  { path : '', component: ContenidoComponent},
  { path : 'error', component: ErrorComponent}
 // { path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
