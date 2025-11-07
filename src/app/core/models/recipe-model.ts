export interface Recipe {
  id: number;
  nombre: string;
  imagenUrl: string;
  tiempoPreparacion: string;
  comensales: number;
  ingredientesClave: string[];
  fechaPublicacion: string;
  descripcion: string;
  instrucciones: string[]; 
}