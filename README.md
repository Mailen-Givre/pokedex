# Pokédex App

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con Vue.js que permite a los usuarios ver una lista de Pokémon, buscar Pokémon específicos, y marcar sus favoritos. La aplicación utiliza la PokeAPI para obtener datos de Pokémon.

## Tecnologías Utilizadas

- Vue.js 3
- Vuex para la gestión del estado
- Vue Router para la navegación
- Axios para las llamadas a la API
- SCSS para los estilos
- LocalStorage para persistir los pokémones favoritos

## Configuración del Proyecto

Para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```
   git clone https://github.com/Mailen-Givre/pokedex.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd pokédex-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm run serve
   ```

## Estructura del Proyecto

El proyecto sigue una estructura típica de Vue.js:

- `src/components`: Componentes Vue reutilizables
- `src/views`: Componentes de página completa
- `src/store`: Módulos Vuex para la gestión del estado
- `src/services`: Servicios para las llamadas a la API
- `src/styles`: Archivos SCSS para estilos globales

## Decisiones de Diseño

1. **Gestión del Estado**: Se utilizó Vuex para manejar el estado global de la aplicación, incluyendo la lista de Pokémon y los favoritos.

2. **Persistencia de Favoritos**: Los Pokémon favoritos se almacenan en el localStorage para persistir entre sesiones sin necesidad de un backend.

3. **Búsqueda**: La funcionalidad de búsqueda se implementó utilizando la API de Pokémon para obtener resultados precisos.

4. **Diseño Responsivo**: La interfaz de usuario se diseñó para ser responsiva y funcionar bien en dispositivos móviles y de escritorio.

5. **Componentes Reutilizables**: Se crearon componentes Vue reutilizables para mejorar la mantenibilidad y reducir la duplicación de código.

## Mejoras Futuras

- Implementar tests unitarios para componentes clave y lógica de negocio.
- Implementar un sistema de caché para reducir las llamadas a la API.

## Autor

Mailén Givré
