import { Router } from "express";
import { data } from "../db/shop.js";

const foodRouter = Router();

foodRouter.get("/", function (req, res) {
  res.json(data.filter((item) => item.category == "Food"));
});

export { foodRouter };
