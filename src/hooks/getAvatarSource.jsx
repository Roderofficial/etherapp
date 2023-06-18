export function getAvatarSource(avatar) {
  if (avatar) {
    return {uri: avatar};
  }
  return require('../assets/images/default_avatar.png');
}
