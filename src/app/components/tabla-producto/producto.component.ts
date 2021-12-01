import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public productos: ProductoModel[] = [];
  constructor(private productoService: ProductoService, private router: Router ) { }

  async ngOnInit(): Promise<void> {
    this.productos = await this.obtenerProductos();
    console.log(this.productos);
    
  }

  private async obtenerProductos(): Promise<any>{
    try{
      const response =await this.productoService.obtenerProductos();
      console.log(response);
      
      return response;
      
    }catch(error){
      this.router.navigate(['/error'])
    }
  }
  public eliminarProducto(id: number){
    this.productoService.eliminarProducto(id).then(async response =>{
      if (response.message ==='deleted'){
        this.productos = await this.obtenerProductos();
        alert('Eliminado correctamente');
        
      }
    }).catch(error =>{
      console.log(error);
      
    })
  }
  public irActualizarProducto(producto: ProductoModel){
    localStorage.setItem('productoActualizar', JSON.stringify(producto));
    this.router.navigate(['/formulario-producto'])
  }
}


