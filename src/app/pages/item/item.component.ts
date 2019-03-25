import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../intefaces/producto-descripcion.interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion; 
  id: string; 
  

  constructor( private rout: ActivatedRoute, 
    public productoService: ProductosService) { }

  ngOnInit() {
// tslint:disable-next-line: no-unused-expression
    this.rout.params
      .subscribe( parametros => {

        console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) =>  {
            this.id = parametros['id'];
            this.producto = producto
            
          }); 
      });
  }

}
