import { Router } from "express";
import {
  createPaydateController,
  getAllPaydatesController,
  getPaydateByIdController,
  updatePaydateController,
  deletePaydateController,
} from "./controllers/paydates.controller";

const router = Router();

router.post("/", createPaydateController);
router.get("/", getAllPaydatesController);
router.get("/:id", getPaydateByIdController);
router.put("/:id", updatePaydateController);
router.delete("/:id", deletePaydateController);

export default router;
