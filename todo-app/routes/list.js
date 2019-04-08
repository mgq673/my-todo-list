var express = require("express");
var router = express.Router();
const List = require("../controllers/list");

/* GET users tasks. */
router.get("/:listId/tasks", function(req, res, next) {
  const listId = req.params.listId;
  List.getTasks(listId).then(tasks =>
    res.send({ status: "ok", result: tasks })
  );
});

/* GET user task. */
router.get("/:listId/tasks/:taskId", (req, res, next) => {
  const taskId = req.params.taskId;
  List.getTask(taskId).then((task) =>
    res.send({ status: "ok", result: task })
  );
});

/* POST add user task. */
router.post("/:listId/tasks", (req, res, next) => {
  const listId = req.params.listId;
  List.addTask(listId, req.body).then(() =>
    res.send({ status: "ok", result: "task added" })
  );
});

/* PUT update user task. */
router.put("/:listId/tasks/:taskId", (req, res, next) => {
  const taskId = req.params.taskId;
  List.updateTask(taskId, req.body).then(() =>
    res.send({ status: "ok", result: "task updated" })
  );
});


/* DELETE delete user task. */
router.delete("/:listId/tasks/:taskId", (req, res, next) => {
    const taskId = req.params.taskId;
    List.deleteTask(taskId).then(() =>
      res.send({ status: "ok", result: "Task was removed" })
    );
  });

  /* DELETE delete many user tasks. */
  router.delete("/:listId/tasks", (req, res, next) => {
    const taskIds = req.body;
    const listId = req.params.listId;
    List.deleteManyTask(listId, taskIds).then(() =>
      res.send({ status: "ok", result: "Tasks were removed" })
    );
  });


module.exports = router;
