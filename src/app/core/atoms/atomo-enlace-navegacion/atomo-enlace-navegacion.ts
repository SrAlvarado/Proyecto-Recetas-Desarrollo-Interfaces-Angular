import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atomo-enlace-navegacion',
  imports: [RouterLink],
  templateUrl: './atomo-enlace-navegacion.html',
  styleUrl: './atomo-enlace-navegacion.scss',
})
export class AtomoEnlaceNavegacion {
  texto = input('');
  ruta = input('');
}
