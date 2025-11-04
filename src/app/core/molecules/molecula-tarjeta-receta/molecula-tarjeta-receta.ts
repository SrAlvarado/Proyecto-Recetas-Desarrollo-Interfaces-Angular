import { Component,input, output} from '@angular/core';
import { Recipe } from '../../models/recipe-model';
import { AtomoBoton } from "../../atoms/atomo-boton/atomo-boton";
import { AtomoTextoInformativo } from "../../atoms/atomo-texto-informativo/atomo-texto-informativo";
import { AtomoEtiquetaIngrediente } from "../../atoms/atomo-etiqueta-ingrediente/atomo-etiqueta-ingrediente";
import { AtomoMedidaTiempo } from "../../atoms/atomo-medida-tiempo/atomo-medida-tiempo";

@Component({
  selector: 'app-molecula-tarjeta-receta',
  imports: [AtomoBoton, AtomoTextoInformativo, AtomoEtiquetaIngrediente, AtomoMedidaTiempo],
  templateUrl: './molecula-tarjeta-receta.html',
  styleUrl: './molecula-tarjeta-receta.scss',
})
export class MoleculaTarjetaReceta {
  receta = input.required<Recipe>(); 

  // Evento que se emite cuando el usuario quiere ver los detalles
  verReceta = output<number>(); 

  onVerReceta() {
    this.verReceta.emit(this.receta().id);
  }
}
