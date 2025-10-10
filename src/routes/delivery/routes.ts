import { Router } from "express";
import {
  createDeliveryOptionController,
  getAllDeliveryOptionsController,
  getDeliveryOptionByIdController,
  updateDeliveryOptionController,
  deleteDeliveryOptionController,
} from "./controllers/deliveryOptions.controller";

const router = Router();

router.post("/", createDeliveryOptionController);
router.get("/", getAllDeliveryOptionsController);
router.get("/:id", getDeliveryOptionByIdController);
router.put("/:id", updateDeliveryOptionController);
router.delete("/:id", deleteDeliveryOptionController);

export default router;
