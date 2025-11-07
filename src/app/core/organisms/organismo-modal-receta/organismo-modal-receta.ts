import { Component, input, output, signal } from '@angular/core';
import { Recipe } from '../../models/recipe-model';
import { AtomoMedidaTiempo } from '../../atoms/atomo-medida-tiempo/atomo-medida-tiempo';

@Component({
  selector: 'app-organismo-modal-receta',
  standalone: true,
  imports: [AtomoMedidaTiempo],
  templateUrl: './organismo-modal-receta.html',
  styleUrl: './organismo-modal-receta.scss',
})
export class OrganismoModalReceta {
  receta = input<Recipe | null>(null); 
  
  cerrarModal = output<void>(); 

  onCerrar() {
    this.cerrarModal.emit();
  }
}