import { RESTDataSource } from 'apollo-datasource-rest';




class UserAPI extends RESTDataSource {
  constructor(clientUrl : string) {
    super();
    this.baseURL = `${clientUrl}auth`;
  }

  async  signin(id:string) {
    const data = await this.get(`${this.baseURL}/${id}`);
    return data;
  }


  async addNewUser(user) {
    const data = await this.post(`/${id}`);
    return user;
  }

}

export default UserAPI;
