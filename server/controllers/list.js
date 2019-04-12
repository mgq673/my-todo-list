const ListModel = require("../models/list");
const TaskModel = require("../models/task");
const UserModel = require("../models/user");
const TaskStatus = require("../models/TaskStatus");

class List {
  static async getLists(userId) {
    return await UserModel.find({ _id: userId }).populate("lists");
  }

  static async addTask(listId, body) {
    const task = new TaskModel({
      title: body.title,
      status: TaskStatus.NORMAL
    });

    await ListModel.updateOne(
      { _id: listId },
      { $push: { tasks: task } },
      { upsert: true }
    );

    return;
  }

  static async getTasks(listId) {
    return await ListModel.findById(listId);
  }

  static async getTask(listId, taskId) {
    return await ListModel.findOne(
      { _id: listId },
      { tasks: { $elemMatch: { _id: taskId } } }
    );
  }

  static async updateTask(listId, taskId, task) {
    return await ListModel.findOneAndUpdate(
      { _id: listId, "tasks._id": taskId },
      { $set: { "tasks.$": task } }
    );
  }

  static async deleteTask(listId, taskId) {
    return await ListModel.findOneAndUpdate(
      { _id: listId, "tasks._id": taskId },
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );
  }

  static async deleteManyTask(listId) {
    return await ListModel.update(
      { _id: listId },
      { $pull: { tasks: { status: TaskStatus.DONE } } },
      { multi: true }
    );
  }
}

module.exports = List;
