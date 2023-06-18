import {API_URL} from '../constans/config';
import getToken from '../getToken';
class FriendshipService {
  async getFriendStatus(friendId: string) {
    const response = await fetch(`http://`, {
      method: 'GET',
    });
    return await response.json();
  }

  async getFriends(userId: string) {
    return fetch(`${API_URL}/user/friendship/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: userId}),
    });
  }
}

export default new FriendshipService();
