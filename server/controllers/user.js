const UserModel = require("../models/user");
const ListModel = require("../models/list");
const TaskModel = require("../models/task");

class User {
  static async signup(userName) {
    return await cerateNewUser(userName);
  }

  static async login(userName) {
    return await UserModel.findOne({name: userName}).populate("lists");
  }

  static async addList(userId, _list) {
    const list = new ListModel({ title: _list.title, user: userId });
    const user = await UserModel.findById(userId);
    user.lists.push(list);
    await user.save();
    return list.save();
  }
}


async function cerateNewUser(userName) {
  const user = new UserModel({ name: userName });
  user.save();
  const list = new ListModel({
    title: "My ToDo",
    user: user._id
  });

  await list.save();
  user.lists.push(list);

  return await user.save();
}

module.exports = User;
