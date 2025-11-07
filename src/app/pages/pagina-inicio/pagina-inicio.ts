import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; // Necesario para la búsqueda
import { Recipe } from '../../core/models/recipe-model';
import { NavigationLink } from '../../core/models/navigation-link-model';
import { NewRecipe } from '../../core/models/new-recipe-model';
import { OrganismoFormularioReceta } from "../../core/organisms/organismo-formulario-receta/organismo-formulario-receta";
import { OrganismoRecetasDestacadas } from "../../core/organisms/organismo-recetas-destacadas/organismo-recetas-destacadas";
import { OrganismoCabecera } from "../../core/organisms/organismo-cabecera/organismo-cabecera";
import { OrganismoModalReceta } from '../../core/organisms/organismo-modal-receta/organismo-modal-receta';


const INITIAL_RECIPES: Recipe[] = [
  { 
    id: 1, 
    nombre: 'Paella Valenciana', 
    imagenUrl: '/receta1.jpg', 
    tiempoPreparacion: '1h 40 min', 
    comensales: 8, 
    ingredientesClave: ['Arroz', 'Pollo', 'Verduras'], 
    fechaPublicacion: 'hace 2 días',
    descripcion: 'Una deliciosa y auténtica paella valenciana con todos los sabores del campo.',
    instrucciones: [
        'Sofríe el pollo y las verduras en aceite.',
        'Añade el arroz y el caldo, cocinando a fuego alto.',
        'Deja reposar 5 minutos antes de servir.'
    ] 
  },
  { 
    id: 2, 
    nombre: 'Pizza', 
    imagenUrl: '/receta2.jpg', 
    tiempoPreparacion: '15 min', 
    comensales: 2, 
    ingredientesClave: ['Masa', 'Champiñones', 'Queso'], 
    fechaPublicacion: 'hace 1 semana',
    descripcion: 'Pizza casera rápida con champiñones y una base crujiente.',
    instrucciones: [
        'Extiende la masa y añade la salsa de tomate.',
        'Cubre con champiñones y queso mozzarella.',
        'Hornea a 200°C por 10 minutos.'
    ] 
  },
  { 
    id: 3, 
    nombre: 'Lentejas', 
    imagenUrl: '/receta3.jpg', 
    tiempoPreparacion: '60 min', 
    comensales: 6, 
    ingredientesClave: ['Lentejas', 'Zanahoria', 'Puerro'], 
    fechaPublicacion: 'hace 3 días',
    descripcion: 'Potaje tradicional de lentejas, nutritivo y reconfortante.',
    instrucciones: [
        'Remoja las lentejas durante 2 horas.',
        'Cocer con verduras y especias hasta que estén blandas.'
    ] 
  },
  { 
    id: 4, 
    nombre: 'Tarta de Manzana', 
    imagenUrl: '/receta4.jpg', 
    tiempoPreparacion: '50 min', 
    comensales: 8, 
    ingredientesClave: ['Manzanas', 'Harina', 'Azúcar'], 
    fechaPublicacion: 'hace 4 días',
    descripcion: 'Una tarta clásica de manzana, dulce y fácil de hacer.',
    instrucciones: [
        'Prepara la masa base.',
        'Distribuye las manzanas en rodajas y espolvorea canela.',
        'Hornea a fuego medio hasta que dore.'
    ] 
  },
];
@Component({
  standalone: true,
  imports: [FormsModule, OrganismoFormularioReceta, OrganismoRecetasDestacadas, OrganismoCabecera, OrganismoModalReceta],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.scss',
})
export class PaginaInicioComponent {
  
  private router = inject(Router);
  private todasLasRecetas = signal<Recipe[]>(INITIAL_RECIPES);
  
  recetaSeleccionada = signal<Recipe | null>(null);

  recetasMostradas = signal<Recipe[]>(INITIAL_RECIPES); 
  
  private nextId = INITIAL_RECIPES.length + 1;
  
  menuPrincipal: NavigationLink[] = [
    { texto: 'Inicio', ruta: '/' },
    { texto: 'Recetas', ruta: '/recetas' },
    { texto: 'Contacto', ruta: '/contacto' }
  ];
  

  constructor() { }

  onNuevaReceta(nuevaRecetaData: NewRecipe) {
    const ingredientesArray = nuevaRecetaData.listaIngredientes.split('\n').filter(i => i.trim() !== '');
    const instruccionesArray = nuevaRecetaData.instrucciones.split('\n').filter(i => i.trim() !== '');
    
    const nuevaReceta: Recipe = {
      id: this.nextId++,
      nombre: nuevaRecetaData.nombre,
      imagenUrl: nuevaRecetaData.urlImagen,
      tiempoPreparacion: nuevaRecetaData.tiempoPreparacion || 'N/A', 
      comensales: nuevaRecetaData.comensales || 0, 
      ingredientesClave: nuevaRecetaData.listaIngredientes.split('\n').filter(i => i.trim() !== ''),
      fechaPublicacion: 'hace unos segundos',
      descripcion: nuevaRecetaData.descripcion || 'Sin descripción detallada.',
      instrucciones: instruccionesArray
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
    const receta = this.todasLasRecetas().find(r => r.id === recetaId);
    
    if (receta) {
        this.recetaSeleccionada.set(receta);
    }
  }
  onCerrarModal() {
    this.recetaSeleccionada.set(null);
  }
  onBorrarReceta(recetaId: number) {
      this.todasLasRecetas.update(currentRecetas => 
          currentRecetas.filter(r => r.id !== recetaId)
      );
      this.aplicarFiltroRecetas(''); 
      console.log('Receta eliminada con ID:', recetaId);
  }
}