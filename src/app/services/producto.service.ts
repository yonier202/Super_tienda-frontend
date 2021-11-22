import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  public agregarProducto(producto: any){}
  public actualizarProducto(producto: any){}
  public elimibarProducto(id: number){}
}
