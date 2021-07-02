import UserModel from '../Models/UserModel';

export default {
  Query: {
    userList: () => UserModel.getUserList(),
  },
  Mutation: {
    createUser: (parent, args) =>
      new UserModel({
        name: args.name,
        age: args.age,
      }).createUser(),
  },
};
