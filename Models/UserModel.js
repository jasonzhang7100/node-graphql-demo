import { nanoid } from 'nanoid';
import db from '../db';

export default class UserModel {
  constructor({ name, age }) {
    this.id = nanoid();
    this.name = name;
    this.age = age;
  }

  static getUserList() {
    return db.getData()['users'];
  }

  createUser() {
    const usersData = db.getData()['users'];
    usersData.push({
      id: this.id,
      name: this.name,
      age: this.age,
    });
    db.setData('users', usersData);
    return this;
  }
}
