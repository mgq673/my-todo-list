var express = require('express');
var router = express.Router();
const User = require("../controllers/user");

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
 
    res.send({ status: "ok", result: result });
  });
});

/* POST add lists to user */
router.post("/:userId/lists", (req, res, next) => {
  
  User.addList(req.params.userId, req.body).then((result) =>
    res.send({ status: "ok", result:result })
  );
});

module.exports = router;
