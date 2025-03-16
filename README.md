# Desafío Técnico CODEa UNI - Desarrollador Frontend Móvil y Web Junior

Este proyecto es una app desarrollada con **React Native** que consume la api de SWAPI para mostrar información sobre los personajes, planetas y películas de la saga Star Wars.

## 🚀 Instalación y ejecución

1. Instala las dependencias:

   ```bash
   npm install  # o pnpm install
   ```

2. Inicia la app:

   ```bash
    npx expo start
   ```

Esto iniciara las opciones de expo, donde podrás escanear el código QR en tu dispositivo o abrir el proyecto en un emulador.

## 📌 Funcionalidades

- **Integración con la API de SWAPI**: Mediante el uso de Tanstack Query, la app consume la API de SWAPI para obtener información de la saga Star Wars.
- **Modo oscuro**: La app proporciona un modo oscuro para mejorar la experiencia de usuario en ambientes con iluminación reducida.
- **Busqueda unificada**: La app permite buscar personajes, planetas y películas de la saga Star Wars de manera unificada en la pagina inicial.
- **Listado de Personajes, Planetas y Películas**: La app muestra un listado de personajes, planetas y películas de la saga Star Wars.
- **Busqueda individual**: La app permite buscar personajes, planetas y peliculas de la saga Star Wars individualmente.
- **Testing**: La app utiliza Jest y Testing Library para realizar pruebas unitarias y de integración.

## 📌 Pantallas

La aplicación consta de las siguientes pantallas :

- **Pantalla Inicial**: En la pantalla principal, los usuarios pueden acceder rápidamente a las tres secciones principales de la app: _Personajes_, _Planetas_ y _Películas_. Además, ofrece un buscador unificado para realizar búsquedas en las tres categorías, los personajes principales, una recomendación de película y un boton para cambiar a modo oscuro.

- **Personajes**: Esta pantalla muestra una lista de los personajes. Los usuarios pueden ver información básica y acceder a los detalles de cada personaje. También pueden realizar búsquedas dentro de esta sección específica.

- **Planetas**:Muestra una lista de los planetas presentes en la saga. Al igual que la pantalla de personajes, los usuarios pueden ver detalles básicos de cada planeta y realizar búsquedas dentro de la sección de planetas.

- **Películas**: Aquí se muestra un listado de todas las películas de Star Wars. Los usuarios pueden ver detalles básicos de cada película, como el título, el año de estreno y otros detalles relevantes. Además, pueden realizar búsquedas dentro de esta sección.

- **Detalle de Personaje/Planeta/Película**: Al seleccionar un personaje/planeta/película de la lista, los usuarios serán dirigidos a una pantalla con detalles completos sobre ese personaje/planeta/película.

## 📌 Estructura del Código

El proyecto sigue el patrón de **Atomic Design** y una convención de nomenclatura clara y consistente para facilitar la comprensión y el mantenimiento del código:

- **Nombres en camelCase**: La primera letra de la primera palabra se escribe en minúscula, y las demás palabras se escriben con la primera letra en mayúscula.

  - Ejemplo: `planetCard.component.tsx`.

- **Sufijos descriptivos**: Cada archivo tiene un sufijo que indica su tipo o propósito:
  - `.component.tsx`: Componentes.
  - `.types.ts`: Tipos de TypeScript.
  - `.hooks.ts`: Custom hooks.
  - `.utils.ts`: Funciones utilitarias.

Ejemplos:

- `api.types.ts`
- `usePeople.hooks.ts`

## 🧪 Testing

Este proyecto utiliza **Jest** y **Testing Library** para pruebas unitarias y de integración.

### 🔹 Ejecutar pruebas con Jest Y Testing Library

1. Ejecuta los tests con:
   ```bash
   npm run test  # o pnpm run test
   ```

## 🛠️ Tecnologías utilizadas

- React Native 0.76
- React 18
- TypeScript
- Tanstack Query
- Axios
- Expo
- Jest
- Testing Library
- Lucide Icons
