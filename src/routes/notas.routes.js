import { Router } from "express";
import { getNotas } from "../controllers/nota_controller.js";

const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Notas" });
});

router.get("/all", getNotas )


export default router;