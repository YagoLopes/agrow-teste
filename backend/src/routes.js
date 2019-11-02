const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const DemandController = require("./controllers/DemandController");
//Login

routes.post("/session", UserController.signIn);

//User
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

//Demands



routes.get("/demands", DemandController.index);
routes.get("/demands/:id", DemandController.show);
routes.post("/demands", DemandController.store);
routes.put("/demands/:id", DemandController.update);
routes.delete("/demands/:id", DemandController.destroy);



module.exports = routes;