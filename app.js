import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { allRoutes } from "./routers/allRoutes.js";
import { foodRouter } from "./routers/foodRouter.js";
import { drinkRouter } from "./routers/drinkRouter.js";
import { categoryRouter } from "./routers/categoryRouter.js";

const app = Express();

// 跨域
app.use(cors());

// 路由
app.use("/all", allRoutes);
app.use("/food", foodRouter);
app.use("/drink", drinkRouter);
app.use("/", categoryRouter);

// JSON
app.use(bodyParser.json());

app.listen(8081, () => {
  const host = "127.0.0.1";
  const port = "8081";

  console.log("app start http://%s:%s", host, port);
});
