import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs'; // Usaremos 'of' para simular la respuesta de una API
import { Recipe } from '../models/recipe-model';
import { NewRecipe } from '../models/new-recipe-model';


// --- DATOS DE EJEMPLO ---
const MOCK_RECIPES: Recipe[] = [
  { id: 1, nombre: 'Paella Valenciana', imagenUrl: '/receta1.jpg', tiempoPreparacion: '1h 40 min', comensales: 8, ingredientesClave: ['Arroz', 'Pollo', 'Verduras'], fechaPublicacion: 'hace 2 días' },
  { id: 2, nombre: 'Pizza', imagenUrl: '/receta2.jpg', tiempoPreparacion: '15 min', comensales: 2, ingredientesClave: ['Masa', 'Champiñones', 'Queso'], fechaPublicacion: 'hace 1 semana' },
  { id: 3, nombre: 'Lentejas', imagenUrl: '/receta3.jpg', tiempoPreparacion: '60 min', comensales: 6, ingredientesClave: ['Lentejas', 'Zanahoria', 'Puerro'], fechaPublicacion: 'hace 3 días' },
  { id: 4, nombre: 'Tarta de Manzana', imagenUrl: '/receta4.jpg', tiempoPreparacion: '50 min', comensales: 8, ingredientesClave: ['Manzanas', 'Harina', 'Azúcar'], fechaPublicacion: 'hace 4 días' },
];
// Ajusta las URLs de las imágenes si están en '/public/img/...'

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  // Signal para gestionar el estado reactivo de las recetas en la aplicación
  private recetas = signal<Recipe[]>(MOCK_RECIPES);
  
  // Observable público para que los componentes puedan suscribirse a los cambios
  recetas$ = this.recetas.asReadonly(); // Se puede usar 'recetas' directamente con Angular 17+

  // Simula una ID para las nuevas recetas
  private nextId = MOCK_RECIPES.length + 1;

  constructor() { }

  /**
   * Obtiene la lista de recetas destacadas.
   * En una app real, sería una llamada HTTP: this.http.get<Recipe[]>('/api/recetas');
   */
  getRecetasDestacadas(): Observable<Recipe[]> {
    return of(this.recetas()); 
  }

  /**
   * Añade una nueva receta a la lista.
   * En una app real, sería una llamada HTTP: this.http.post('/api/recetas', nuevaReceta);
   */
  anadirReceta(nuevaRecetaData: NewRecipe): Observable<Recipe> {
    const nuevaReceta: Recipe = {
      id: this.nextId++,
      nombre: nuevaRecetaData.nombre,
      imagenUrl: nuevaRecetaData.urlImagen,
      // Valores por defecto (ya que el formulario no los pide)
      tiempoPreparacion: 'Desconocido',
      comensales: 0, 
      ingredientesClave: nuevaRecetaData.listaIngredientes.split('\n').filter(i => i.trim() !== ''),
      fechaPublicacion: 'hace unos segundos',
    };

    // 1. Actualiza la signal (el estado de la app)
    this.recetas.update(currentRecetas => [nuevaReceta, ...currentRecetas]); 

    // 2. Simula la respuesta del servidor
    return of(nuevaReceta);
  }
}