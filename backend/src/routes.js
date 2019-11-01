const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

//Login

routes.post("/session", UserController.signIn);

//User
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

module.exports = routes;