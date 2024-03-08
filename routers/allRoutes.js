import { Router } from "express";
import { data } from "../db/shop.js";

const allRoutes = Router();

allRoutes.get("/", function (req, res) {
  res.json(data);
});

allRoutes.get("/:id", function (req, res) {
  res.json(data.find((item) => item.id == req.params.id));
});

export { allRoutes };
