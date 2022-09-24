import express, { Express } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user";
import { logger } from "./middleware/logger";
import { restricted } from "./middleware/restricted";
import exampleRoutes from "./routes/example";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// MIDDLEWARE
app.use(express.json());
app.use(logger);

// ROUTES
app.use("/user", userRoutes);
app.use("/restricted-example", restricted, exampleRoutes);
app.use("/example", exampleRoutes);
// app.use("/bills", restricted, billsRoutes);
// app.use("/billCategories", restricted, billCategoryRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
