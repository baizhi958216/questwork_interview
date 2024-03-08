import { Router } from "express";
import { data } from "../db/shop.js";

const categoryRouter = Router();

categoryRouter.get("/:category/:id", (req, res) => {
  res.json(
    data.filter(
      (item) => item.category == req.params.category && item.id == req.params.id
    )
  );
});

export { categoryRouter };
