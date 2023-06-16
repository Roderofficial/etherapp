class FriendshipService {
  static async getFriendStatus(friendId: string) {
    const response = await fetch(`http://`, {
      method: 'GET',
    });
    return await response.json();
  }
}
