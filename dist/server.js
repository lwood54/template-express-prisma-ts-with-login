"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./routes/user"));
const logger_1 = require("./middleware/logger");
const restricted_1 = require("./middleware/restricted");
const example_1 = __importDefault(require("./routes/example"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// MIDDLEWARE
app.use(express_1.default.json());
app.use(logger_1.logger);
// ROUTES
app.use("/user", user_1.default);
app.use("/restricted-example", restricted_1.restricted, example_1.default);
app.use("/example", example_1.default);
// app.use("/bills", restricted, billsRoutes);
// app.use("/billCategories", restricted, billCategoryRoutes);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map