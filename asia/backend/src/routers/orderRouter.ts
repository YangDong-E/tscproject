import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { isAuth } from "../utils";
import { OrderModel } from "../models/orderModel";
import { Product } from "../models/productModel";

export const orderRouter = express.Router();

// 주문 페이지
orderRouter.get(
  // /api/orders/:id
  "/:id",
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order Not Found" });
    }
  })
);

orderRouter.post(
  "/",
  // 먼저 isAuth를 실행 후
  isAuth,
  // asyncHandler를 실행한다. (utils.ts에서 next를 사용하기 때문)
  asyncHandler(async (req: Request, res: Response) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).json({ message: "장바구니가 비었습니다." });
    } else {
      const createdOrder = await OrderModel.create({
        orderItems: req.body.orderItems.map((x: Product) => ({
          ...x,
          product: x._id,
        })),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      res.status(201).json({ message: "Order Not Found", order: createdOrder });
    }
  })
);
