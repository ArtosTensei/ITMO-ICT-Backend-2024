import { Request, Response } from "express";
import ProductService from "../../services/products/ProductService";

class ProductController {
  async getAll(req: Request, res: Response) {
    const products = await ProductService.getAll();
    res.json(products);
  }

  async getById(req: Request, res: Response) {
    const product = await ProductService.getById(parseInt(req.params.id, 10));
    res.json(product);
  }

  async create(req: Request, res: Response) {
    console.log(req.body);
    const newProduct = await ProductService.create(req.body);
    res.status(201).json(newProduct);
  }

  async update(req: Request, res: Response) {
    const updatedProduct = await ProductService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedProduct);
  }

  async delete(req: Request, res: Response) {
    await ProductService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }

  async getByTags(req: Request, res: Response) {
    try {
      const { tagIds } = req.body;
      if (!tagIds || !Array.isArray(tagIds) || tagIds.length === 0) {
        return res
          .status(400)
          .json({ error: "tagIds should be a non-empty array" });
      }
      const products = await ProductService.getByTags(tagIds);
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();
