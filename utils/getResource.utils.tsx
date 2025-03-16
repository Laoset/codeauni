export const getResource = (item: any) => {
  if (item.director) {
    return 'film';
  } else if (item.altura) {
    return 'character';
  } else if (item.climate) {
    return 'planet';
  }
};
