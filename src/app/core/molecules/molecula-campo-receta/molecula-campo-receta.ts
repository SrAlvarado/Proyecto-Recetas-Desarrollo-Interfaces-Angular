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
  recetaChange = output<NewRecipe>();

  onFieldChange(campo: keyof NewRecipe, valor: string | number) {
    let valorFinal: string | number | null = valor;

    if (campo === 'comensales') {
        const num = Number(valor);
        valorFinal = isNaN(num) || num <= 0 ? null : num;
    }

    const nuevoModelo: NewRecipe = {
      ...this.receta(),
      [campo]: valorFinal, 
    };
    this.recetaChange.emit(nuevoModelo);
  }
}
