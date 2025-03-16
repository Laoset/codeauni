import { CharacterBasicProps } from './character.types';
import { FilmBasicProps } from './film.types';

export interface Planet {
  id: string;
  nombre: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  superficie_agua: string;
  poblacion: string;
  residentes: CharacterBasicProps[];
  peliculas: FilmBasicProps[];
  creado: string;
  editado: string;
  url: string;
}
export type PlanetBasicProps = Pick<Planet, 'id' | 'nombre'>;

export interface PlanetListProps {
  planets: Planet[];
  isLoading: boolean;
  error?: string;
}
