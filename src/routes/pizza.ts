// require the express module
import express from "express";
import Pizza from "../models/Pizza";

// create a new Router object
const pizzaRouter = express.Router();

pizzaRouter.get("/", (req, res) => {
  res.render("homepage");
});

pizzaRouter.get("/specialty", (req, res) => {
  const { name, price } = req.query;

  res.render("specialty", { name: name, price: price });
});

pizzaRouter.get("/review", (req, res) => {
  const { name, price } = req.query;

  res.render("review");
});

export default pizzaRouter;
