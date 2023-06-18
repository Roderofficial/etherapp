export function getAvatarSource(avatar: string | null | undefined) {
  if (avatar) {
    return {uri: avatar};
  }
  return require('../assets/images/default_avatar.png');
}
