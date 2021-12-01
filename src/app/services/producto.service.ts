import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductoModel } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Promise<any>{
    const url =`${environment.apiUrl}/obtenerProductos`
    return this.http.get(url).toPromise();
  }
  public obtenerProducto(id: number){}
  public agregarProducto(producto: any){
    const url = `${environment.apiUrl}/agregarProducto`
    return this.http.post(url, producto).toPromise();
  }
  public actualizarProducto(producto: ProductoModel): Promise<any> {
    const url = `${environment.apiUrl}/actualizarProducto/${producto.idproducto }`
    return this.http.put(url, producto).toPromise();
  }
  public eliminarProducto(id: number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarProducto/${id}`).toPromise();
  }
}
