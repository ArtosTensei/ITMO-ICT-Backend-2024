import { Router } from "express";
import ProductController from "../../controllers/products/ProductController";

const router = Router();

router.get("/", ProductController.getAll);
router.get("/find/:id", ProductController.getById);
router.post("/", ProductController.create);
router.patch("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);
router.post("/filter", ProductController.getByTags);

export default router;
