import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() precio: string = '';

  @Output() clic = new EventEmitter<string>();



  verProducto(){
    this.clic.emit('HOLA MUNDO')
  }
}
