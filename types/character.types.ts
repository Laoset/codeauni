export interface Character {
  id: string;
  nombre: string;
  altura: string;
  peso: string;
  color_pelo: string;
  color_piel: string;
  color_ojos: string;
  año_nacimiento: string;
  genero: string;
  mundo_natal: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves_estelares: string[];
  creado: string;
  editado: string;
  url: string;
}
export type CharacterCardProps = { character: Character };
export type CharacterBasicProps = Pick<Character, 'id' | 'nombre'>;

export interface CharacterDetailProps {
  character: Character;
}

export interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  error?: string;
}
