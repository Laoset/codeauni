export const getIdFromUrl = (url: string): string => {
  if (url?.length === 0) return '';
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
};
