import { MaterialModule } from './material.module';
import { InicioComponent } from './inicio.component';
import { LibroComponent } from './libro/libro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { LibrosService } from './services/libros.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
