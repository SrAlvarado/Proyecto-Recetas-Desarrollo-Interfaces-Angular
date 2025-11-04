import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atomo-campo-busqueda',
  imports: [FormsModule],
  templateUrl: './atomo-campo-busqueda.html',
  styleUrl: './atomo-campo-busqueda.scss',
})
export class AtomoCampoBusqueda {
  valor = input<string>('')
  valorChange = output<string>();
  placeholder = input<string>('Buscar...')

  onValorChange(nuevoValor: string) {
    this.valorChange.emit(nuevoValor);
  }
} 