import {
  CharacterApiData,
  FilmApiData,
  PlanetApiData,
} from '@/types/index.types';
import { getIdFromUrl } from '../getId.utils';
import { getResource } from '../getResource.utils';
import {
  translatePeople,
  translateFilms,
  translatePlanets,
} from '../translate.utils';
describe('getIdFromUrl', () => {
  it('should extract the ID from a URL', () => {
    expect(getIdFromUrl('https://swapi.dev/api/people/1/')).toBe('1');
    expect(getIdFromUrl('https://swapi.dev/api/films/5/')).toBe('5');
    expect(getIdFromUrl('https://swapi.dev/api/planets/10/')).toBe('10');
  });

  it('should return an empty string if the URL is invalid', () => {
    expect(getIdFromUrl('')).toBe('');
  });
});

describe('getResource', () => {
  it('should return "film" if the item has a director', () => {
    expect(getResource({ director: 'George Lucas' })).toBe('film');
  });

  it('should return "character" if the item has an "altura" field', () => {
    expect(getResource({ altura: '172' })).toBe('character');
  });

  it('should return "planet" if the item has a "climate" field', () => {
    expect(getResource({ climate: 'arid' })).toBe('planet');
  });

  it('should return undefined if the item does not match any category', () => {
    expect(getResource({})).toBeUndefined();
  });
});
describe('translatePeople', () => {
  it('should correctly translate CharacterApiData to Character', () => {
    const mockCharacter: CharacterApiData = {
      url: 'https://swapi.dev/api/people/1/',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: ['https://swapi.dev/api/films/1/'],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/14/'],
      starships: ['https://swapi.dev/api/starships/12/'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
    };

    const translatedCharacter = translatePeople(mockCharacter);

    expect(translatedCharacter).toEqual({
      id: '1',
      nombre: 'Luke Skywalker',
      altura: '172',
      peso: '77',
      color_pelo: 'blond',
      color_piel: 'fair',
      color_ojos: 'blue',
      año_nacimiento: '19BBY',
      genero: 'male',
      mundo_natal: 'https://swapi.dev/api/planets/1/',
      peliculas: ['https://swapi.dev/api/films/1/'],
      especies: [],
      vehiculos: ['https://swapi.dev/api/vehicles/14/'],
      naves_estelares: ['https://swapi.dev/api/starships/12/'],
      creado: '2014-12-09T13:50:51.644000Z',
      editado: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    });
  });
});
describe('translateFilms', () => {
  it('should correctly translate FilmApiData to Film', () => {
    const mockFilms: FilmApiData = {
      url: 'https://swapi.dev/api/film/1/',
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl: '',
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      characters: ['https://swapi.dev/api/people/1/'],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
    };

    const translatedFilms = translateFilms(mockFilms);

    expect(translatedFilms).toEqual({
      id: '1',
      titulo: 'A New Hope',
      episodio_id: 4,
      director: 'George Lucas',
      productor: 'Gary Kurtz, Rick McCallum',
      fecha_lanzamiento: '1977-05-25',
      personajes: ['https://swapi.dev/api/people/1/'],
      planetas: [],
      naves_estelares: [],
      vehiculos: [],
      especies: [],
      creado: '2014-12-10T14:23:31.880000Z',
      editado: '2014-12-20T19:49:45.256000Z',
      url: 'https://swapi.dev/api/film/1/',
    });
  });
});
describe('translatePlanets', () => {
  it('should correctly translate PlanetApiData to Planet', () => {
    const mockPlanets: PlanetApiData = {
      url: 'https://swapi.dev/api/planets/1/',
      name: 'Tatooine',
      rotation_period: '42',
      orbital_period: '31',
      diameter: '2',
      climate: '1',
      gravity: '4',
      terrain: '4',
      surface_water: '41',
      population: '2',
      residents: ['https://swapi.dev/api/people/1/'],
      films: [],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
    };

    const translatedPlanets = translatePlanets(mockPlanets);

    expect(translatedPlanets).toEqual({
      id: '1',
      nombre: 'Tatooine',
      periodo_rotacion: '42',
      periodo_orbital: '31',
      diametro: '2',
      clima: '1',
      gravedad: '4',
      terreno: '4',
      superficie_agua: '41',
      poblacion: '2',
      residentes: ['https://swapi.dev/api/people/1/'],
      peliculas: [],
      creado: '2014-12-10T14:23:31.880000Z',
      editado: '2014-12-20T19:49:45.256000Z',
      url: 'https://swapi.dev/api/planets/1/',
    });
  });
});
