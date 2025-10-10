import { Router } from "express";
import {
  getAllOrderItemsController,
  getOrderItemByIdController,
  createOrderItemController,
  updateOrderItemController,
  deleteOrderItemController,
} from "./controllers/orderItem.controller";

const router = Router();

router.get("/", getAllOrderItemsController);
router.get("/:id", getOrderItemByIdController);
router.post("/", createOrderItemController);
router.put("/:id", updateOrderItemController);
router.delete("/:id", deleteOrderItemController);

export default router;
