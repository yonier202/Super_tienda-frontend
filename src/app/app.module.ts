import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoComponent } from './components/tabla-producto/producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './services/producto.service';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { Producto1Component } from './components/producto1/producto1.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
    NotFoundComponent,
    ContenidoComponent,
    Producto1Component,
    ErrorComponent,
    FormularioProductoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
