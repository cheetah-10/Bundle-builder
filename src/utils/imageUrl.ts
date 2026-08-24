const SERVER_ORIGIN = 'http://localhost:5000';

export const getImageUrl = (image: string): string => {
  if (image.startsWith('/')) {
    return `${SERVER_ORIGIN}${image}`;
  }

  return image;
};

