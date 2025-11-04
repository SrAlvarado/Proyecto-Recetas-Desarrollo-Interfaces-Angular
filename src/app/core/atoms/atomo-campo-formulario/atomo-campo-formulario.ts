import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atomo-campo-formulario',
  imports: [FormsModule],
  templateUrl: './atomo-campo-formulario.html',
  styleUrl: './atomo-campo-formulario.scss',
})
export class AtomoCampoFormulario {
valor = input<string>('');
  valorChange = output<string>();

  label = input.required<string>();
  
  placeholder = input<string>('');

  tipo = input<'text' | 'textarea'>('text'); 

  ayuda = input<string>('');

  onValorChange(nuevoValor: string) {
    this.valorChange.emit(nuevoValor);
  }
}
