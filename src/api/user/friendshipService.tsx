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

  async getFriendShipStatus(friendId: string) {
    return fetch(`${API_URL}/user/friendship/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }

  async sendInvite(friendId: string) {
    return fetch(`${API_URL}/user/friendship/invite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }

  async cancelInvite(friendId: string) {
    return fetch(`${API_URL}/user/friendship/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }

  async acceptInvite(friendId: string) {
    return fetch(`${API_URL}/user/friendship/accept`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }

  async removeFriend(friendId: string) {
    return fetch(`${API_URL}/user/friendship/remove`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }

  async getFriendsRequests() {
    return fetch(`${API_URL}/user/friendship/requests`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
    });
  }

  async rejectInvite(friendId: string) {
    return fetch(`${API_URL}/user/friendship/reject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`,
      },
      body: JSON.stringify({user: friendId}),
    });
  }
}

export default new FriendshipService();
