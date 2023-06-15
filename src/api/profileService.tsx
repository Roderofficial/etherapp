class UserService {
  async getUserProfileById(id: string) {
    const response = await fetch(`http://10.240.16.6:3000/user/profile/${id}`, {
      method: 'GET',
    });
    return await response.json();
  }
}

export default new UserService();
