import {CreateUserDto} from "../components/UserForm/dto/createUser.dto";
import axios from "axios";
import { IUser } from "../types";

class UserAPI {

  async create(newUser: CreateUserDto) {
    console.log(newUser)
    const response = await axios.post<IUser>(
      `${process.env.REACT_APP_BACKEND_URL}/user`,
      newUser
    );
    console.log(response)
    return response.data
  }
}

export default new UserAPI()
