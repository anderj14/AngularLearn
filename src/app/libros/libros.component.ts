import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html',
})
export class LibrosComponent {
  libros = ['Matematica I', 'Algoritmos basico', 'Algebra nivel basico'];

  eliminarLibro(libro: string){
    this.libros = this.libros.filter(p => p !== libro);
  }

  guardarLibro(f){
    if(f.valid){
      this.libros.push(f.value.nombreLibro);
    }
  }
}
