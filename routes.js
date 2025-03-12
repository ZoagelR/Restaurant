const express = require("express");
const routes = express.Router();
const {
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("./src/controllers/menuController");

routes.get("/menu", getMenu);
routes.post("/menu", createMenu);
routes.put("/menu/:id", updateMenu);
routes.delete("/menu/:id", deleteMenu);

module.exports = routes;
