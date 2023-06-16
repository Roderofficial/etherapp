import {API_URL} from '../constans/config';
import EncryptedStorage from 'react-native-encrypted-storage';

class AuthService {
  async getCode(email: string): Promise<any> {
    const response = await fetch(`${API_URL}/auth/getcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
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
}

export default new AuthService();
