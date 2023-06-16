import {API_URL} from '../constans/config';

class UserService {
  async getUserProfileById(id: string) {
    const response = await fetch(`${API_URL}/user/profile/${id}`, {
      method: 'GET',
    });
    return await response.json();
  }
}

export default new UserService();
