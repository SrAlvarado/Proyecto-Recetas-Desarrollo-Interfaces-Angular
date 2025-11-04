import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-titulo-formulario',
  imports: [],
  templateUrl: './atomo-titulo-formulario.html',
  styleUrl: './atomo-titulo-formulario.scss',
})
export class AtomoTituloFormulario {
  texto = input.required<string>();
}
