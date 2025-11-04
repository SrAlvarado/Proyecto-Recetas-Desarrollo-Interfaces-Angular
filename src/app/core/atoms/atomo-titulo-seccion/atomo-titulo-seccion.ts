import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-titulo-seccion',
  imports: [],
  templateUrl: './atomo-titulo-seccion.html',
  styleUrl: './atomo-titulo-seccion.scss',
})
export class AtomoTituloSeccion {
  titulo = input.required<string>();
}
