const ALCOHOL_TRANSFORMATION = 1.05;
const ALCOHOL_DENSITY = 0.789;

export const calculateAlcohol = (
  firstDenisty: number,
  lastDensity: number,
  sugar: number,
): number => {
  const densityDiff = firstDenisty - lastDensity;
  const alcoholMass = densityDiff * ALCOHOL_TRANSFORMATION;
  const alcohol = alcoholMass / lastDensity;

  return (alcohol / ALCOHOL_DENSITY) * 100;
};
