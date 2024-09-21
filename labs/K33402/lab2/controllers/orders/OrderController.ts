import { Request, Response } from "express";
import OrderService from "../../services/orders/OrderService";

class OrderController {
  async getAll(req: Request, res: Response) {
    const orders = await OrderService.getAll();
    res.json(orders);
  }

  async getById(req: Request, res: Response) {
    const order = await OrderService.getById(parseInt(req.params.id, 10));
    res.json(order);
  }

  async create(req: Request, res: Response) {
    try {
      const newOrder = await OrderService.create(req.body);
      res.status(201).json(newOrder);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const updatedOrder = await OrderService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedOrder);
  }

  async delete(req: Request, res: Response) {
    await OrderService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }

  async getItemsByOrderId(req: Request, res: Response) {
    try {
      const orderId = parseInt(req.params.id, 10);
      const orderItems = await OrderService.getItemsByOrderId(orderId);
      res.json(orderItems);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new OrderController();