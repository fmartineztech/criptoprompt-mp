import { Router } from "express";
import {
  createOrder,
  getFailure,
  getPending,
  getSuccess,
  receiveWebhook,
} from "../controllers/payment.controller.js";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({ health: "OK" });
});

router.post("/create-order", createOrder);
router.post("/webhook", receiveWebhook);

router.get("/success", getSuccess);
router.get("/pending", getPending);
router.get("/failure", getFailure);

export default router;
