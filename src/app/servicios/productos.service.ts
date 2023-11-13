import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private urlProducto= 'https://fakestoreapi.com/products';
  obtenerProductos(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  obtenerUnProductoporId(id: number): Observable<Producto>{
    const url = `${this.urlProducto}/${id}`;
    return this.http.get<Producto>(url)
  }

}


