export const useFlagImage = (flag: string) => {
  const flagImageUrl = `https://wise.com/public-resources/assets/flags/rectangle/${flag.toLowerCase()}.png`;
  return { flagImageUrl };
};
