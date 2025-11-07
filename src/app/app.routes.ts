import { Routes } from '@angular/router';

// 1. Importamos tu nuevo componente de página
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio'; 

export const routes: Routes = [
  {
    // 2. Definimos la ruta raíz ('/')
    path: '', 
    component: PaginaInicioComponent,
    title: 'Mi Recetario' // Título que se mostrará en la pestaña del navegador
  },
  
  // 3. Rutas futuras para otras secciones
  {
    path: 'recetas',

    component: PaginaInicioComponent, 
    title: 'Listado de Recetas'
  },
  {
    path: 'contacto',
    component: PaginaInicioComponent, 
    title: 'Contacto'
  },
  
  // 4. Ruta de comodín (Wildcard) para manejar errores 404
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];