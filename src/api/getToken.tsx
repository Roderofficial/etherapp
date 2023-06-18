import EncryptedStorage from 'react-native-encrypted-storage';

const getToken = async () => {
  const token = await EncryptedStorage.getItem('token');
  return token;
};

export default getToken;
