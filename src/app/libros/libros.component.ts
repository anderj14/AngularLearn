import { LibrosService } from './../services/libros.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html',
})
export class LibrosComponent {

  libros: any[] = [];

  constructor(private librosService: LibrosService){
    this.libros = librosService.obtenerLibros();
  }

  eliminarLibro(libro: string){
  }

  guardarLibro(f){
    if(f.valid){
    }
  }
}
