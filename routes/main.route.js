import { Router } from "express";
import { home } from "../controllers/main.controller.js";

const router = Router();

router.get("/", home);

export default router;
