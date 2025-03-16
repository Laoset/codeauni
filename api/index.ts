const BASE_URL = 'https://swapi.py4e.com/api/';

import { getIdFromUrl } from '@/utils/getId.utils';
import {
  translateFilms,
  translatePeople,
  translatePlanets,
} from '@/utils/translate.utils';
import axios from 'axios';

export const fetchUnifiedSearch = async (search = '', page = 1) => {
  try {
    const [peopleResponse, planetsResponse, filmsResponse] = await Promise.all([
      fetchPeople(search, page),
      fetchPlanets(search, page),
      fetchFilms(search, page),
    ]);

    const combinedResults = [
      ...peopleResponse.results.map((result: any) => ({
        ...result,
        type: 'personaje',
      })),
      ...planetsResponse.results.map((result: any) => ({
        ...result,
        type: 'planeta',
      })),
      ...filmsResponse.results.map((result: any) => ({
        ...result,
        type: 'película',
      })),
    ];

    return {
      results: combinedResults,
      next: peopleResponse.next || planetsResponse.next || filmsResponse.next,
      page,
    };
  } catch (error) {
    console.error('Error en la búsqueda unificada:', error);
    throw new Error('No se pudieron obtener los resultados');
  }
};
export const fetchPeople = async (search = '', page = 1) => {
  try {
    const endpoint = `${BASE_URL}people/?search=${encodeURIComponent(
      search
    )}&page=${page}`;
    const { data } = await axios.get(endpoint);

    return {
      results: data.results.map(translatePeople),
      next: data.next,
      page,
    };
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw new Error('No se pudieron obtener los personajes');
  }
};
export const fetchPlanets = async (search = '', page = 1) => {
  try {
    const endpoint = `${BASE_URL}planets/?search=${encodeURIComponent(
      search
    )}&page=${page}`;
    const { data } = await axios.get(endpoint);

    return {
      results: data.results.map(translatePlanets),
      next: data.next,
      page,
    };
  } catch (error) {
    console.error('Error al obtener los Planetas:', error);
    throw new Error('No se pudieron obtener los Planetas');
  }
};
export const fetchPeopleById = async (id: string, full = true) => {
  try {
    const endpoint = `${BASE_URL}people/${id}`;
    const { data } = await axios.get(endpoint);
    const translatedData = translatePeople(data);
    if (full) {
      const hasPlanet = translatedData.mundo_natal;

      if (hasPlanet) {
        const planetId = getIdFromUrl(hasPlanet);
        const planetData = await fetchPlanetById(planetId);
        translatedData.mundo_natal = planetData.nombre;
      }
    }

    return translatedData;
  } catch (error) {
    console.error('Error al obtener el personaje:', error);
    throw new Error('No se pudo obtener el personaje');
  }
};
export const fetchPlanetById = async (id: string, full = true) => {
  try {
    const endpoint = `${BASE_URL}planets/${id}`;
    const { data } = await axios.get(endpoint);
    const translate = translatePlanets(data);
    const hasMovies = translate.peliculas;
    const hasResidents = translate.residentes;
    if (full) {
      if (hasResidents) {
        const residentIds = hasResidents
          .slice(0, 2)
          .map((residentUrl: any) => getIdFromUrl(residentUrl));
        const residentes = await fetchAllDataSequentially(
          'people',
          residentIds
        );
        translate.residentes = residentes;
      }

      if (hasMovies) {
        const movieIds = hasMovies.map((movieUrl: any) =>
          getIdFromUrl(movieUrl)
        );
        const movies = await fetchAllDataSequentially('films', movieIds);
        translate.peliculas = movies;
      }
    }
    return translate;
  } catch (error) {
    console.error('Error al obtener el planeta:', error);
    throw new Error('No se pudo obtener el planeta');
  }
};
export const fetchFilmById = async (id: string) => {
  try {
    const endpoint = `${BASE_URL}films/${id}`;
    const { data } = await axios.get(endpoint);
    const translate = translateFilms(data);
    const hasPlanets = translate.planetas;
    const hasResidents = translate.personajes;
    if (hasResidents) {
      const residentIds = hasResidents
        .slice(0, 2)
        .map((residentUrl: any) => getIdFromUrl(residentUrl));
      const residentes = await fetchAllDataSequentially('people', residentIds);
      translate.personajes = residentes;
    }

    if (hasPlanets) {
      const planetsIds = hasPlanets
        .slice(0, 2)
        .map((planetUrl: any) => getIdFromUrl(planetUrl));
      const planetas = await fetchAllDataSequentially('planets', planetsIds);
      translate.planetas = planetas;
    }
    return translate;
  } catch (error) {
    console.error('Error al obtener la pelicula:', error);
    throw new Error('No se pudo obtener la pelicula');
  }
};
export const fetchFilms = async (search = '', page = 1) => {
  try {
    const endpoint = `${BASE_URL}films/?search=${encodeURIComponent(
      search
    )}&page=${page}`;
    const { data } = await axios.get(endpoint);

    return {
      results: data.results.map(translateFilms),
      next: data.next,
      page,
    };
  } catch (error) {
    console.error('Error al obtener los Planetas:', error);
    throw new Error('No se pudieron obtener los Planetas');
  }
};
async function fetchAllDataSequentially(
  resource: string,
  ids: string[]
): Promise<any[]> {
  const results: any[] = [];
  if (resource === 'people') {
    for (const id of ids) {
      const data = await fetchPeopleById(id, false);
      const finalData = {
        id: data.id,
        nombre: data.nombre,
      };
      results.push(finalData);
    }
    return results;
  }
  if (resource === 'planets') {
    for (const id of ids) {
      const data = await fetchPlanetById(id, false);
      const finalData = {
        id: data.id,
        nombre: data.nombre,
      };
      results.push(finalData);
    }
    return results;
  } else {
    for (const id of ids) {
      const data = await fetchFilmById(id);
      const finalData = {
        id: data.id,
        titulo: data.titulo,
      };
      results.push(finalData);
    }
    return results;
  }
}
