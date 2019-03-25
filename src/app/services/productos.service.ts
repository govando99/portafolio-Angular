import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../intefaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-6ab98.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
      });

    });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-6ab98.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string) {

    if ( this.productos.length === 0 ) {
        this.cargarProductos().then( () => {
        this.filtrarProducto( termino );
        });
    } else {
      this.filtrarProducto( termino );
    }
  }

  private filtrarProducto( termino: string) {
    // console.log(this.productos);
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productoFiltrado.push( prod );
      }
    });
  }
}
