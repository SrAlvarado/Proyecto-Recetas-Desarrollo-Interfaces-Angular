export interface NewRecipe {
  nombre: string;
  urlImagen: string;
  listaIngredientes: string; 
  tiempoPreparacion: string; 
  comensales: number | null; 
  descripcion: string;
  instrucciones: string; 
}