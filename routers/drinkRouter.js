import { Router } from "express";
import { data } from "../db/shop.js";

const drinkRouter = Router();

drinkRouter.get("/:id", function (req, res) {
  res.json(
    data.filter((item) => item.category == "Drink" && item.id == req.params.id)
  );
});

export { drinkRouter };
