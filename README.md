# Simple Dashboard

## Descripción
Simple Dashboard es una aplicación web desarrollada con Angular que muestra una lista de usuarios obtenidos de una API RESTful. La aplicación permite buscar usuarios por nombre, paginar los resultados y está optimizada para rendimiento y SEO. 

## Características

- **Lista de Usuarios**: Muestra una lista de usuarios con detalles como nombre, email y dirección.
- **Búsqueda**: Funcionalidad de búsqueda para filtrar usuarios por nombre.
- **Paginación**: Botón para cargar más usuarios, implementando la paginación.
- **Responsive**: Diseño responsive que se adapta a dispositivos de escritorio y móviles.
- **Optimización SEO**: Utiliza Server-Side Rendering (SSR) para mejorar la optimización en motores de búsqueda.
- **Lazy Loading**: Carga diferida de módulos para mejorar el rendimiento.

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **SCSS**: Preprocesador CSS para estilizar la aplicación.
- **RxJS**: Biblioteca para manejar la gestión de estado y la obtención de datos asíncronos.
- **Git**: Control de versiones para rastrear los cambios en el proyecto.

## Instalación y Ejecución

### Prerrequisitos

- Node.js (v14 o superior)
- Angular CLI

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/daviddlhz/simple_dashboard.git
   cd simple-dashboard
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución

Para ejecutar la aplicación en modo desarrollo:
```bash
ng serve
```
La aplicación estará disponible en `http://localhost:4200`.

### Construcción

Para construir la aplicación para producción:
```bash
ng build --prod
```
Los archivos de salida estarán en la carpeta `dist/`.

### Ejecución con SSR

Para ejecutar la aplicación con Server-Side Rendering:
1. Construye la aplicación para SSR:
   ```bash
   npm run build:ssr
   ```

2. Inicia el servidor SSR:
   ```bash
   npm run serve:ssr
   ```

La aplicación estará disponible en `http://localhost:4000`.

## Pruebas

Para ejecutar las pruebas unitarias:
```bash
ng test
```

## API Utilizada

La aplicación consume datos de usuarios de la siguiente API RESTful:
```
https://jsonplaceholder.typicode.com/users
```

## Git

El control de versiones se manejó con Git, siguiendo buenas prácticas con commits significativos y uso de ramas.

## Optimización de Rendimiento

- **Lazy Loading**: Implementación de lazy loading para módulos.
- **Detección de cambios eficiente**: Optimización de la detección de cambios en los componentes.
- **SSR**: Mejora de rendimiento y SEO con Server-Side Rendering.

---

**Desarrollado por David De La Hoz**
