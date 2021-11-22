import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  public async obtenerProductos(){
    try{
      const response =await this.productoService.obtenerProductos();
      console.log(response);
      
    }catch(error){
      console.log(error);
    }
  }

}
