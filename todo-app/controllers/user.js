const UserModel = require("../models/user");
const ListModel = require("../models/list");
const TaskModel = require("../models/task");

class User {
  static signup(userName) {
    let user = new UserModel({ name: userName });

    return new Promise((resolve, reject) => {
      user
        .save()
        .then(() => cerateNewUser(userName).then(newUser => resolve(newUser)))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  static login(userName) {
    return new Promise((resolve, reject) => {
      loadUserData({ name: userName })
        .then(userData => {
          resolve(userData);
        })
        .catch(err => reject("User Doesn't exist"));
    });
  }

  static addList(userId, _list) {
    let list = new ListModel({
      title: _list.title,
      userId: userId
    });

    return new Promise((resolve, reject) => {
      list
        .save()
        .then(() => {
          loadUserData({ _is: userId })
            .then(userData => {
              resolve(userData);
            })
            .catch(err => reject("User Doesn't exist"));
        })
    });
  }
}

function loadUserData(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await UserModel.findOne();
      let lists = await ListModel.find({ userId: user._id });
      lists = await getTaskCounters(lists);

      resolve({ user: user, lists: lists });
    } catch (err) {
      reject(err);
    }
  });
}

function cerateNewUser(userName) {
  return new Promise(async (resolve, reject) => {
    const newUser = await UserModel.find({ name: userName });
    const list = new ListModel({
      title: "My ToDo",
      userId: newUser[0]._id
    });
    list
      .save()
      .then(() => resolve())
      .catch(err => reject(err));
  });
}

async function getTaskCounters(lists) {
  let p = lists.map(async list => {
    let tasks = await TaskModel.find({ listId: list._id });
    let counter = tasks.length;
    let { _id, userId, title } = list;
    let obj = { _id: _id, userId: userId, title: title, counter: counter };
    return obj;
  });

  return await Promise.all(p);
}

module.exports = User;
