// 这里直接模拟db数据库，数据库server是个对象，里面有users和articles两张表（数组），users表里有一个个的user docu（对象）
const db = {
  users: [],
  articles: [],
};

export default {
  getData: () => db,
  setData: (key, value) => {
    db[key] = value;
    return db;
  },
};
