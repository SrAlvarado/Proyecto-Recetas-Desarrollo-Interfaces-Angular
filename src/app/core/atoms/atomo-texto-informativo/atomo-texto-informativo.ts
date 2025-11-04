import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-texto-informativo',
  imports: [],
  templateUrl: './atomo-texto-informativo.html',
  styleUrl: './atomo-texto-informativo.scss',
})
export class AtomoTextoInformativo {
  texto = input.required<string>();
}
