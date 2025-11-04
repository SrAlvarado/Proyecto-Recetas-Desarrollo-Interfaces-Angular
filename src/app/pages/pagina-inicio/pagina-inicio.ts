import { Component } from '@angular/core';
import { NewRecipe } from '../../core/models/new-recipe-model';
import { Router } from '@angular/router';
import { NavigationLink } from '../../core/models/navigation-link-model';
import { OrganismoFormularioReceta } from "../../core/organisms/organismo-formulario-receta/organismo-formulario-receta";

const RECETAS_MOCK: Recipe[] = [
  { id: 1, nombre: 'Paella Valenciana', imagenUrl: 'url_paella.jpg', tiempoPreparacion: '1h 40 min', comensales: 8, ingredientesClave: ['Arroz', 'Pollo', 'Verduras'], fechaPublicacion: 'hace 2 días' },
  { id: 2, nombre: 'Pizza', imagenUrl: 'url_pizza.jpg', tiempoPreparacion: '15 min', comensales: 2, ingredientesClave: ['Masa', 'Champiñones', 'Queso'], fechaPublicacion: 'hace 1 semana' },
  { id: 3, nombre: 'Lentejas', imagenUrl: 'url_lentejas.jpg', tiempoPreparacion: '60 min', comensales: 6, ingredientesClave: ['Lentejas', 'Zanahoria', 'Puerro'], fechaPublicacion: 'hace 3 días' },
  { id: 4, nombre: 'Tarta de Manzana', imagenUrl: 'url_tarta.jpg', tiempoPreparacion: '50 min', comensales: 8, ingredientesClave: ['Manzanas', 'Harina', 'Azúcar'], fechaPublicacion: 'hace 4 días' },
];

@Component({
  selector: 'app-pagina-inicio',
  imports: [OrganismoFormularioReceta],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.scss',
})
export class PaginaInicio {
recetasDestacadas = signal<Recipe[]>(RECETAS_MOCK);
  
  // Datos para el Organismo Cabecera
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

  constructor(private router: Router) {}

  // --- LÓGICA DE INTERACCIÓN ---

  onVerTodasRecetas() {
    console.log('Navegando a la página de todas las recetas...');
    this.router.navigate(['/recetas']); 
  }

  onNavegarDetalle(recetaId: number) {
    console.log('Navegando a la receta con ID:', recetaId);
    this.router.navigate(['/recetas', recetaId]);
  }

  onNuevaReceta(nuevaReceta: NewRecipe) {
    console.log('Nueva receta lista para enviar al servidor:', nuevaReceta);
 
  }
}
