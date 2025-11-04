import { Component, input } from '@angular/core';
import { AtomoLogoComponent } from '../../atoms/atomo-logo/atomo-logo';
import { AtomoEnlaceNavegacion } from '../../atoms/atomo-enlace-navegacion/atomo-enlace-navegacion';
import { NavigationLink } from '../../models/navigation-link-model';

@Component({
  selector: 'app-molecula-navegacion-principal',
  standalone: true,
  imports: [AtomoLogoComponent,AtomoEnlaceNavegacion],
  templateUrl: './molecula-navegacion-principal.html',
  styleUrl: './molecula-navegacion-principal.scss',
})
export class MoleculaNavegacionPrincipalComponent {
  enlaces = input<NavigationLink[]>([]); 
}