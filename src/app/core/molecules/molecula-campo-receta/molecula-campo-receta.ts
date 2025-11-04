import { Component, input, output } from '@angular/core';
import { NewRecipe } from '../../models/new-recipe-model';
import { AtomoCampoBusqueda } from '../../atoms/atomo-campo-busqueda/atomo-campo-busqueda';
import { AtomoCampoFormulario } from '../../atoms/atomo-campo-formulario/atomo-campo-formulario';

@Component({
  selector: 'app-molecula-campo-receta',
  imports: [AtomoCampoFormulario],
  templateUrl: './molecula-campo-receta.html',
  styleUrl: './molecula-campo-receta.scss',
})
export class MoleculaCampoReceta {
receta = input.required<NewRecipe>();

  // Salida para notificar cualquier cambio en el modelo
  recetaChange = output<NewRecipe>();

  // Notifica al padre que un campo ha cambiado
  onFieldChange(campo: keyof NewRecipe, valor: string) {
    const nuevoModelo: NewRecipe = {
      ...this.receta(),
      [campo]: valor,
    };
    this.recetaChange.emit(nuevoModelo);
  }
}
