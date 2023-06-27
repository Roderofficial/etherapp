export default function backgroundSource(
  background: string | null | undefined,
) {
  console.log(background);
  if (background) {
    return {uri: background};
  }
  return require('../assets/images/default_background.png');
}
