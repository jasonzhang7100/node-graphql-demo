import { nanoid } from 'nanoid';
import UserModel from '../Models/UserModel';

export default {
  Query: {
    userList: () => {
      UserModel.getUserList();
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = new UserModel({
        name: args.name,
        age: args.age,
      }).createUser();
      return user;
    },
  },
};
