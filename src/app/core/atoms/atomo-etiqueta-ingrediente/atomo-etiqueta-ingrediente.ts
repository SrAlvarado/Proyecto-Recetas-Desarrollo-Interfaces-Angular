import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-etiqueta-ingrediente',
  imports: [],
  templateUrl: './atomo-etiqueta-ingrediente.html',
  styleUrl: './atomo-etiqueta-ingrediente.scss',
})
export class AtomoEtiquetaIngrediente {
  nombre = input.required<string>();
}
