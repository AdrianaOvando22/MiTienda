import { Component,OnInit,EventEmitter,Input,Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Producto } from 'src/app/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements  OnInit {
  @Input() producto?: Producto;

  constructor(private route: ActivatedRoute ,
    private productosService: ProductosService,
    private location: Location) {}

  ngOnInit() {
    this.getProduct();
  }
  goBack(): void {
    this.location.back();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.obtenerUnProductoporId(id)
      .subscribe(producto => this.producto = producto);
  }
}
