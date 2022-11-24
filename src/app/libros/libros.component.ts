import { LibrosService } from './../services/libros.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: 'libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: any[] = [];

  constructor(private librosService: LibrosService) {}
  private libroSuscription!: Subscription;

  eliminarLibro(libro: string) {}

  guardarLibro(f) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.libroSuscription =  this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSuscription.unsubscribe();
  }
}
