# 🍲 Mi Recetario: Desarrollo de Interfaces con Angular

Este proyecto es una aplicación de gestión de recetas desarrollada con Angular (v20.x), diseñada bajo una implementación estricta de la metodología Atomic Design para garantizar la reutilización y el mantenimiento del código.

## 💻 Herramientas y Lenguajes

Una visión de las principales tecnologías y decisiones de arquitectura utilizadas en el proyecto:

| Categoría | Herramientas Utilizadas | Notas Clave |
|-----------|-------------------------|-------------|
| Framework Principal | Angular (v20.3.x) | Generado con Angular CLI y tipado estricto |
| Lenguaje | TypeScript | Lenguaje principal de programación, clave para el desarrollo a gran escala |
| Arquitectura | Componentes Standalone | Cada componente es independiente, sin depender de módulos (NgModule), simplificando la estructura |
| Gestión de Estado | Angular Signals (signal(), input(), output()) | Utilizado para manejar el estado reactivo de la aplicación (listas, filtros, visibilidad) |
| Estilos y Diseño | Bootstrap 5 y SCSS | Utilizado para todos los estilos y la creación de un diseño responsive |
| Enrutamiento | Angular Router | Configurado en app.routes.ts para una navegación fluida (SPA) |

## ✨ Características y Funcionalidades

El proyecto implementa la interfaz de usuario completa con las siguientes funcionalidades principales. Es importante destacar que el estado de la aplicación (las recetas) se maneja en memoria temporal y no persiste al recargar el navegador.

### 1. Visualización y Búsqueda de Recetas

- **Recetas Destacadas**: La página de inicio muestra una cuadrícula de recetas iniciales para inspirar al usuario.
- **Funcionalidad de Búsqueda**: El formulario de búsqueda en la cabecera permite filtrar las recetas en tiempo real por el nombre o los ingredientes clave listados.

### 2. Gestión de Recetas (CRUD Local)

- **Añadir Recetas**: Un formulario detallado (organismo-formulario-receta) permite a los usuarios crear y añadir nuevas recetas a la lista actual.
- **Borrar Recetas**: Cada tarjeta de receta incluye un botón "Borrar" que elimina el elemento de la lista activa.
- **Nota sobre Persistencia**: Los cambios (adiciones y borrados) se almacenan únicamente en el array de señales en pagina-inicio.ts y se pierden al recargar la página.

### 3. Modal de Detalle

Al hacer clic en el botón "Ver receta" de cualquier tarjeta, se muestra un Modal (organismo-modal-receta) que presenta la descripción completa y las instrucciones paso a paso de la receta seleccionada.

## 🏗️ Metodología Atomic Design

La estructura del código sigue una jerarquía de diseño atómico, lo cual es evidente en la organización del directorio `src/app/core/`. Este patrón facilita la reusabilidad y el mantenimiento del código:

| Capa | Propósito | Ejemplos de Componentes |
|------|-----------|-------------------------|
| Átomos (atoms/) | Elementos base que no se pueden descomponer (inputs, botones, texto informativo, etiquetas) | atomo-boton, atomo-campo-formulario, atomo-medida-tiempo |
| Moléculas (molecules/) | Grupos de átomos que funcionan juntos como una unidad compleja | molecula-tarjeta-receta, molecula-formulario-busqueda |
| Organismos (organisms/) | Secciones de interfaz (combinan moléculas y átomos) | organismo-cabecera, organismo-recetas-destacadas, organismo-modal-receta |
| Páginas (pages/) | Ensambla los organismos y maneja la lógica de negocio y el estado global (signals) | pagina-inicio |

## 🛠️ Puesta en Marcha

Para iniciar el proyecto en tu entorno local, sigue los siguientes pasos:

### 1. Clonar el Repositorio

```bash
# Clona el repositorio
git clone https://github.com/sralvarado/proyecto-recetas-desarrollo-interfaces-angular

# Navega al directorio del proyecto
cd Proyecto-Recetas-Desarrollo-Interfaces-Angular
```
### 2. Instalación de Dependencias

Asegúrate de que tus versiones de Node.js y Angular CLI cumplen los requisitos (>=18):

```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo

```bash
ng serve
```
Abre tu navegador en http://localhost:4200/. La aplicación se ejecutará en modo desarrollo con recarga en caliente (Hot Module Reloading).

### 4. Compilación para Producción
Para construir el proyecto para su despliegue:

```bash
ng build --configuration production
# Los archivos estáticos se encontrarán en el directorio /dist
```
### 📦 Historial de Desarrollo
El desarrollo ha seguido un enfoque incremental, con los siguientes hitos principales:

- Implementación de la estructura base (Atomic Design)

- Implementación de los organismos de cabecera, lista de recetas y formulario

- Integración de la lógica de Añadir, Borrar y Filtrar (utilizando Angular Signals para el estado local)

- Ajustes de diseño para asegurar la consistencia visual (e.g., botones de ancho completo)

- Implementación del Modal de Detalle de Receta
