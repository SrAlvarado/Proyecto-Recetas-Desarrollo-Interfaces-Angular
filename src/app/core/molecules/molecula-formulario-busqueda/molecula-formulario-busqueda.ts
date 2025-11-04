import { Component, input, output, signal } from '@angular/core';
import { AtomoCampoBusqueda } from '../../atoms/atomo-campo-busqueda/atomo-campo-busqueda';
import { AtomoBoton } from '../../atoms/atomo-boton/atomo-boton';

@Component({
  selector: 'app-molecula-formulario-busqueda',
  imports: [AtomoCampoBusqueda, AtomoBoton],
  templateUrl: './molecula-formulario-busqueda.html',
  styleUrl: './molecula-formulario-busqueda.scss',
})
export class MoleculaFormularioBusqueda {
  placeholder = input<string>('Buscar recetas...');
  
  terminoBusqueda = signal<string>(''); 

  buscar = output<string>();

  onBuscar() {
    this.buscar.emit(this.terminoBusqueda());
  }
  onTerminoChange(nuevoTermino: string) {
    this.terminoBusqueda.set(nuevoTermino);
  }
}
