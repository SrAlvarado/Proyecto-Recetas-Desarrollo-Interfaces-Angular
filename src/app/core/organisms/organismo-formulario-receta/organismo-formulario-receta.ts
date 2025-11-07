import { Component, output, signal } from '@angular/core';
import { NewRecipe } from '../../models/new-recipe-model';
import { AtomoCampoFormulario } from '../../atoms/atomo-campo-formulario/atomo-campo-formulario';
import { AtomoBoton } from '../../atoms/atomo-boton/atomo-boton';
import { MoleculaCampoReceta } from '../../molecules/molecula-campo-receta/molecula-campo-receta';
import { AtomoTituloSeccion } from '../../atoms/atomo-titulo-seccion/atomo-titulo-seccion';
import { AtomoContenedorFormulario } from '../../atoms/atomo-contenedor-formulario/atomo-contenedor-formulario';
import { AtomoTituloFormulario } from '../../atoms/atomo-titulo-formulario/atomo-titulo-formulario';

const INITIAL_RECIPE: NewRecipe = { 
    nombre: '', 
    urlImagen: '', 
    listaIngredientes: '',
    tiempoPreparacion: '',
    comensales: null,
    descripcion: '',
    instrucciones: ''
};

@Component({
  selector: 'app-organismo-formulario-receta',
  imports: [AtomoContenedorFormulario, AtomoTituloFormulario, MoleculaCampoReceta, AtomoBoton],
  templateUrl: './organismo-formulario-receta.html',
  styleUrl: './organismo-formulario-receta.scss',
})
export class OrganismoFormularioReceta {
  recipeModel = signal<NewRecipe>(INITIAL_RECIPE);
  anadirReceta = output<NewRecipe>();
  
  onLimpiar() {
    this.recipeModel.set(INITIAL_RECIPE);
  }

  onAnadirReceta() {
    this.anadirReceta.emit(this.recipeModel());
    this.onLimpiar();
  }

  onModelChange(newModel: NewRecipe) {
    this.recipeModel.set(newModel);
  }
}
