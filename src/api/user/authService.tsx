import {API_URL} from '../constans/config';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Alert} from 'react-native';

class AuthService {
  async getCode(email: string): Promise<any> {
    const response = await fetch(`${API_URL}/auth/getcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    }).catch(error => {
      console.log(error);
      Alert.alert('Błąd', 'Wystąpił nieznany błąd');
    });
    return response;
  }

  async validateCode(email: string, code: string): Promise<any> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, code}),
    });
    return response;
  }

  async setToken(token: string): Promise<void> {
    try {
      await EncryptedStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await EncryptedStorage.getItem('token')}`,
      },
    });

    try {
      await EncryptedStorage.removeItem('token');
    } catch (error) {
      console.log(error);
    }
  }

  async loggedIn(): Promise<boolean> {
    const token = await EncryptedStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}

export default new AuthService();
