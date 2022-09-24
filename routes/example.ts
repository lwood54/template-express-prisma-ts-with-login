import express from "express";
import { exampleRoute } from "../controllers/exampleController";

const router = express.Router();

// example route
router.get("/", exampleRoute);

export default router;
