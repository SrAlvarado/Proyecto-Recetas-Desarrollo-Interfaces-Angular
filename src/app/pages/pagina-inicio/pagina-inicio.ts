import { Component, inject, signal } from '@angular/core';
import { NewRecipe } from '../../core/models/new-recipe-model';
import { Router } from '@angular/router';
import { NavigationLink } from '../../core/models/navigation-link-model';
import { OrganismoFormularioReceta } from "../../core/organisms/organismo-formulario-receta/organismo-formulario-receta";
import { OrganismoRecetasDestacadas } from "../../core/organisms/organismo-recetas-destacadas/organismo-recetas-destacadas";
import { OrganismoCabecera } from "../../core/organisms/organismo-cabecera/organismo-cabecera";
import { RecetasService } from '../../core/services/recetas';


@Component({
  selector: 'app-pagina-inicio',
  imports: [OrganismoFormularioReceta, OrganismoRecetasDestacadas, OrganismoCabecera],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.scss',
})
export class PaginaInicio {
  
  private recetasService = inject(RecetasService);
  private router = inject(Router);
  
  recetasDestacadas = this.recetasService.recetas$;

  menuPrincipal: NavigationLink[] = [
    { texto: 'Inicio', ruta: '/' },
    { texto: 'Recetas', ruta: '/recetas' },
    { texto: 'Contacto', ruta: '/contacto' }
  ];
  
  menuUsuario: NavigationLink[] = [
    { texto: 'Perfil', ruta: '/perfil' },
    { texto: 'Contacto', ruta: '/contacto' },
    { texto: 'Recetas', ruta: '/mis-recetas' }
  ];

  onNuevaReceta(nuevaReceta: NewRecipe) {
    this.recetasService.anadirReceta(nuevaReceta).subscribe({
      next: (receta) => {
        console.log('Receta añadida con éxito:', receta.nombre);
      },
      error: (err) => {
        console.error('Error al añadir receta:', err);
      }
    });
  }

  onVerTodasRecetas() {
    this.router.navigate(['/recetas']); 
  }

  onNavegarDetalle(recetaId: number) {
    this.router.navigate(['/recetas', recetaId]);
  }
}
