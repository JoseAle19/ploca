import { Router } from "express";
import { getCobros } from "../controllers/cobro_controller.js";

const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "cobros" });
});

router.get("/all", getCobros )


export default router;