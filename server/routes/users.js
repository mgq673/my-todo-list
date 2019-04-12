var express = require('express');
var router = express.Router();

const User = require("../controllers/user");
const List = require("../controllers/list");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

/* POST login */
router.post("/login", (req, res, next) => {
  User.login(req.body.name)
  .then (( result) => {
    
    res.send({ status: "ok", result: result });
  }).catch((result)=>  {
    res.statusCode = 401;
    res.send({ status: "failed", result: result });
  })
});

/* POST signup */
router.post("/signup", (req, res, next) => {
  User.signup(req.body.name)
  .then(result => {
    res.statusCode = 201;
    res.send({ status: "ok", result: result });
  });
});

/* POST add lists to user */
router.post("/:userId/lists", (req, res, next) => {
  console.log(req.bod );
  User.addList(req.params.userId, req.body).then((result) =>{
    res.statusCode = 201;

    ///user ADD LISTS
    res.send({ status: "ok", result:result })
  }
  );


/* GET users tasks. */
router.get("/:userId/lists", function(req, res, next) {
  const listId = req.params.listId;
  res.send("getLists")

});

// /* GET users tasks. */
// router.get("/:userId/lists/:listId/tasks", function(req, res, next) {
//   const listId = req.params.listId;
//   List.getTasks(listId).then(tasks =>
//     res.send({ status: "ok", result: tasks })
//   );
// });

// /* GET user task. */
// router.get("/:userId/lists/:listId/tasks/:taskId", (req, res, next) => {
//   const taskId = req.params.taskId;
//   List.getTask(taskId).then((task) =>
//     res.send({ status: "ok", result: task })
//   );
// });

// /* POST add user task. */
// router.post("/:userId/lists/:listId/tasks", (req, res, next) => {
//   const listId = req.params.listId;
//   List.addTask(listId, req.body).then(() =>{
//   res.statusCode = 201;
//     res.send({ status: "ok", result: "task added" })
//   });
// });

// /* PUT update user task. */
// router.put("/:userId/lists/:listId/tasks/:taskId", (req, res, next) => {
//   const taskId = req.params.taskId;
//   List.updateTask(taskId, req.body).then(() =>
//     res.send({ status: "ok", result: "task updated" })
//   );
// });


// /* DELETE delete user task. */
// router.delete("/:userId/lists/:listId/tasks/:taskId", (req, res, next) => {
//     const taskId = req.params.taskId;
//     List.deleteTask(taskId).then(() =>
//       res.send({ status: "ok", result: "Task was removed" })
//     );
//   });

//   /* DELETE delete many user tasks. */
//   router.delete("/:userId/lists/:listId/tasks", (req, res, next) => {
//     const taskIds = req.body;
//     const listId = req.params.listId;
//     List.deleteManyTask(listId, taskIds).then(() =>
//       res.send({ status: "ok", result: "Tasks were removed" })
//     );
//   });






});

module.exports = router;
