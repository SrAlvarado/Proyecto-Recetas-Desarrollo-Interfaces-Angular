export interface Recipe {
  id: number;
  nombre: string;
  imagenUrl: string;
  tiempoPreparacion: string;
  comensales: number;
  ingredientesClave: string[]; // Ingredientes que se muestran en la tarjeta
  fechaPublicacion: string;
}