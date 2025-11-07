import { Component, input, output } from '@angular/core';
import { Recipe } from '../../models/recipe-model';
import { MoleculaTarjetaReceta } from "../../molecules/molecula-tarjeta-receta/molecula-tarjeta-receta";
import { AtomoBoton } from "../../atoms/atomo-boton/atomo-boton";
import { AtomoTituloSeccion } from "../../atoms/atomo-titulo-seccion/atomo-titulo-seccion";

@Component({
  selector: 'app-organismo-recetas-destacadas',
  imports: [MoleculaTarjetaReceta, AtomoBoton, AtomoTituloSeccion],
  templateUrl: './organismo-recetas-destacadas.html',
  styleUrl: './organismo-recetas-destacadas.scss',
})
export class OrganismoRecetasDestacadas {
  recetas = input.required<Recipe[]>(); 

  verTodas = output<void>();

  navegarDetalle = output<number>(); 
  borrarReceta = output<number>();
  onVerTodas() {
    this.verTodas.emit();
  }

  onNavegarDetalle(recetaId: number) {
    this.navegarDetalle.emit(recetaId);
  }
  onBorrarReceta(recetaId: number) {
        this.borrarReceta.emit(recetaId);
    }
}
