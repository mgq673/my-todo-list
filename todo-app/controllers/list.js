const ListModel = require("../models/list");
const TaskModel = require("../models/task");
const async = require("async");

class User {
  static addTask(listId, _task) {
    const task = new TaskModel({
      title: _task.title,
      status: "Normal",
      listId: listId
    });

    return new Promise((resolve, reject) => {
      task
        .save()
        .then(() => {
          resolve(task);
        })
        .catch(err => reject(err));
    });
  }

  static getTasks(listId) {
    return new Promise((resolve, reject) => {
      TaskModel.find({ listId: listId })
        .then(tasks => {
          resolve(tasks);
        })
        .catch(err => reject(err));
    });
  }

  static getTask(taskId) {
    return new Promise((resolve, reject) => {
      TaskModel.findById(taskId)
        .then(task => {
          resolve(task);
        })
        .catch(err => reject(err));
    });
  }

  static updateTask(taskId, task) {
    return new Promise((resolve, reject) => {
      TaskModel.findByIdAndUpdate(taskId, { $set: task })
        .then(tasks => {
          resolve(tasks);
        })
        .catch(err => reject(err));
    });
  }

  static deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      TaskModel.findByIdAndRemove(taskId)
        .then(() => {
          resolve();
        })
        .catch(err => reject(err));
    });
  }

  static async deleteManyTask(listId, taskIds) {
    let allPromises = taskIds.map(async (id, i) => {
      await TaskModel.findByIdAndRemove(id);
    });

    return await Promise.all(allPromises);
  }
}

module.exports = User;
