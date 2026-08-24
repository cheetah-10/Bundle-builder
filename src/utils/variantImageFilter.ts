// utils/variantImageFilter.ts
export const getVariantImageFilter = (variantName?: string): string => {
  switch (variantName) {
    case 'Black':
      return 'brightness-50 contrast-125';
    case 'Grey':
      return 'grayscale-[35%] brightness-90';
    default:
      return '';
  }
};