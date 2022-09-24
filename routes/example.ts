import express from "express";
import { showExampleMessage } from "../controllers/exampleController";

const router = express.Router();

// example route
router.get("/", showExampleMessage);

export default router;
