import { CharacterBasicProps } from './character.types';
import { PlanetBasicProps } from './planet.types';

export interface Film {
  id: string;
  titulo: string;
  episodio_id: number;
  director: string;
  productor: string;
  fecha_lanzamiento: string;
  personajes: CharacterBasicProps[];
  planetas: PlanetBasicProps[];
  naves_estelares: string[];
  vehiculos: string[];
  especies: string[];
  creado: string;
  editado: string;
  url: string;
}
export type FilmBasicProps = Pick<Film, 'id' | 'titulo'>;

export interface FilmListProps {
  films: Film[];
  isLoading: boolean;
  error?: string;
}
