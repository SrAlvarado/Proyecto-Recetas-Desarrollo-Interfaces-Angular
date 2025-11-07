import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; // Necesario para la búsqueda
import { Recipe } from '../../core/models/recipe-model';
import { NavigationLink } from '../../core/models/navigation-link-model';
import { NewRecipe } from '../../core/models/new-recipe-model';
import { OrganismoFormularioReceta } from "../../core/organisms/organismo-formulario-receta/organismo-formulario-receta";
import { OrganismoRecetasDestacadas } from "../../core/organisms/organismo-recetas-destacadas/organismo-recetas-destacadas";
import { OrganismoCabecera } from "../../core/organisms/organismo-cabecera/organismo-cabecera";



// --- MOCK DATA MOVILIZADO ---
const INITIAL_RECIPES: Recipe[] = [
  { id: 1, nombre: 'Paella Valenciana', imagenUrl: '/receta1.jpg', tiempoPreparacion: '1h 40 min', comensales: 8, ingredientesClave: ['Arroz', 'Pollo', 'Verduras'], fechaPublicacion: 'hace 2 días' },
  { id: 2, nombre: 'Pizza', imagenUrl: '/receta2.jpg', tiempoPreparacion: '15 min', comensales: 2, ingredientesClave: ['Masa', 'Champiñones', 'Queso'], fechaPublicacion: 'hace 1 semana' },
  { id: 3, nombre: 'Lentejas', imagenUrl: '/receta3.jpg', tiempoPreparacion: '60 min', comensales: 6, ingredientesClave: ['Lentejas', 'Zanahoria', 'Puerro'], fechaPublicacion: 'hace 3 días' },
  { id: 4, nombre: 'Tarta de Manzana', imagenUrl: '/receta4.jpg', tiempoPreparacion: '50 min', comensales: 8, ingredientesClave: ['Manzanas', 'Harina', 'Azúcar'], fechaPublicacion: 'hace 4 días' },
];

@Component({
  standalone: true,
  imports: [FormsModule, OrganismoFormularioReceta, OrganismoRecetasDestacadas, OrganismoCabecera],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.scss',
})
export class PaginaInicioComponent {
  
  private router = inject(Router);
  // Estado que guarda TODAS las recetas
  private todasLasRecetas = signal<Recipe[]>(INITIAL_RECIPES);
  
  recetasMostradas = signal<Recipe[]>(INITIAL_RECIPES); 
  
  private nextId = INITIAL_RECIPES.length + 1;
  
  menuPrincipal: NavigationLink[] = [
    { texto: 'Inicio', ruta: '/' },
    { texto: 'Recetas', ruta: '/recetas' },
    { texto: 'Contacto', ruta: '/contacto' }
  ];
  

  constructor() { }

  onNuevaReceta(nuevaRecetaData: NewRecipe) {
    const nuevaReceta: Recipe = {
      id: this.nextId++,
      nombre: nuevaRecetaData.nombre,
      imagenUrl: nuevaRecetaData.urlImagen,
      tiempoPreparacion: nuevaRecetaData.tiempoPreparacion || 'N/A', 
      comensales: nuevaRecetaData.comensales || 0, 
      ingredientesClave: nuevaRecetaData.listaIngredientes.split('\n').filter(i => i.trim() !== ''),
      fechaPublicacion: 'hace unos segundos',
    };

    this.todasLasRecetas.update(currentRecetas => [nuevaReceta, ...currentRecetas]); 

    this.aplicarFiltroRecetas('');
}

  
  onBuscarRecetas(termino: string) {
    this.aplicarFiltroRecetas(termino);
  }

  private aplicarFiltroRecetas(termino: string) {
    const terminoNormalizado = termino.toLowerCase().trim();

    if (!terminoNormalizado) {
      // Si el término está vacío, muestra todas las recetas
      this.recetasMostradas.set(this.todasLasRecetas());
      return;
    }

    const recetasFiltradas = this.todasLasRecetas().filter(receta =>
      receta.nombre.toLowerCase().includes(terminoNormalizado) ||
      receta.ingredientesClave.some(ing => ing.toLowerCase().includes(terminoNormalizado))
    );

    this.recetasMostradas.set(recetasFiltradas);
  }

  onVerTodasRecetas() {
    this.router.navigate(['/recetas']); 
  }

  onNavegarDetalle(recetaId: number) {
    this.router.navigate(['/recetas', recetaId]);
  }
  onBorrarReceta(recetaId: number) {
      this.todasLasRecetas.update(currentRecetas => 
          currentRecetas.filter(r => r.id !== recetaId)
      );
      this.aplicarFiltroRecetas(''); 
      console.log('Receta eliminada con ID:', recetaId);
  }
}