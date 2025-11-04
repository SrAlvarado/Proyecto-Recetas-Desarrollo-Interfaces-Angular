import { Component, input } from '@angular/core';

@Component({
  selector: 'app-atomo-medida-tiempo',
  imports: [],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  templateUrl: './atomo-medida-tiempo.html',
  styleUrl: './atomo-medida-tiempo.scss',
})
export class AtomoMedidaTiempo {
  etiqueta = input.required<string>();

  valor = input.required<string | number>();
}
