import { Router } from "express";
import {
  createPaymentController,
  getAllPaymentsController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
} from "./controllers/payments.controller";

const router = Router();

router.post("/", createPaymentController);
router.get("/", getAllPaymentsController);
router.get("/:id", getPaymentByIdController);
router.put("/:id", updatePaymentController);
router.delete("/:id", deletePaymentController);

export default router;
