export const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'e' || event.key === 'E') {
    event.preventDefault();
  }
};
