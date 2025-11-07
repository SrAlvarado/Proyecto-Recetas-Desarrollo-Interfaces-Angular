import { Component, input, output } from '@angular/core';
import { NavigationLink } from '../../models/navigation-link-model';
import { AtomoEnlaceNavegacion } from "../../atoms/atomo-enlace-navegacion/atomo-enlace-navegacion";
import { MoleculaNavegacionPrincipalComponent } from '../../molecules/molecula-navegacion-principal/molecula-navegacion-principal';
import { MoleculaFormularioBusqueda } from "../../molecules/molecula-formulario-busqueda/molecula-formulario-busqueda";

@Component({
  selector: 'app-organismo-cabecera',
  imports: [AtomoEnlaceNavegacion, MoleculaNavegacionPrincipalComponent, MoleculaFormularioBusqueda],
  templateUrl: './organismo-cabecera.html',
  styleUrl: './organismo-cabecera.scss',
})
export class OrganismoCabecera {
  enlacesPrincipales = input<NavigationLink[]>([]);
  
  enlacesUsuario = input<NavigationLink[]>([]);

  terminoBusqueda: string = '';

  buscar = output<string>();
  
  onBuscar(termino: string) {
    this.buscar.emit(termino);
  }
}
