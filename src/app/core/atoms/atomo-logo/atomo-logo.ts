import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'atomo-logo', 
  imports: [RouterLink], 
  templateUrl: './atomo-logo.html', 
  styleUrl: './atomo-logo.scss', 
})

export class AtomoLogoComponent { 
  textoLogo = input('Mi Recetario');
  rutaInicio = input("/");
}