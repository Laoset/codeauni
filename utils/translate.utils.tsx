import type {
  CharacterApiData,
  Character,
  FilmApiData,
  PlanetApiData,
} from '@/types/index.types';
import { getIdFromUrl } from './getId.utils';

export function translatePeople(character: CharacterApiData): Character {
  return {
    id: getIdFromUrl(character.url),
    nombre: character.name,
    altura: character.height,
    peso: character.mass,
    color_pelo: character.hair_color,
    color_piel: character.skin_color,
    color_ojos: character.eye_color,
    año_nacimiento: character.birth_year,
    genero: character.gender,
    mundo_natal: character.homeworld,
    peliculas: character.films || [],
    especies: character.species || [],
    vehiculos: character.vehicles || [],
    naves_estelares: character.starships || [],
    creado: character.created,
    editado: character.edited,
    url: character.url,
  };
}

export function translateFilms(film: FilmApiData) {
  return {
    id: getIdFromUrl(film.url),
    titulo: film.title,
    episodio_id: film.episode_id,
    director: film.director,
    productor: film.producer,
    fecha_lanzamiento: film.release_date,
    personajes: film.characters || [],
    planetas: film.planets || [],
    naves_estelares: film.starships || [],
    vehiculos: film.vehicles || [],
    especies: film.species || [],
    creado: film.created,
    editado: film.edited,
    url: film.url,
  };
}

export function translatePlanets(planet: PlanetApiData) {
  return {
    id: getIdFromUrl(planet.url),
    nombre: planet.name,
    periodo_rotacion: planet.rotation_period,
    periodo_orbital: planet.orbital_period,
    diametro: planet.diameter,
    clima: planet.climate,
    gravedad: planet.gravity,
    terreno: planet.terrain,
    superficie_agua: planet.surface_water,
    poblacion: planet.population,
    residentes: planet.residents || [],
    peliculas: planet.films || [],
    creado: planet.created,
    editado: planet.edited,
    url: planet.url,
  };
}
