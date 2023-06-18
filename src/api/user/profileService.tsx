import {API_URL} from '../constans/config';
import getToken from '../getToken';

class UserService {
  async getUserProfileById(id: string) {
    const response = await fetch(`${API_URL}/user/profile/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    return await response.json();
  }

  async getMe() {
    const response = await fetch(`${API_URL}/user/profile/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
    });
    return await response.json();
  }
}

export default new UserService();
