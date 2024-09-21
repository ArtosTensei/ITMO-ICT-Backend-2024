import { Router } from "express";
import ProductRoutes from "./products/ProductRoutes";
import TagRoutes from "./tags/TagRoutes";
import PromotionRoutes from "./promotions/PromotionRoutes";
import OrderRoutes from "./orders/OrderRoutes";
import UserRoutes from "./users/UserRoutes";
import AuthRoutes from "./auth/AuthRouters";
import productTagRoutes from "./productTags/ProductTagRoutes";
import { auth } from "../middlewares/auth";
const router = Router();

router.use("/products", auth, ProductRoutes);
router.use("/tags", auth, TagRoutes);
router.use("/promotions", auth, PromotionRoutes);
router.use("/orders", auth, OrderRoutes);
router.use("/users", auth, UserRoutes);
router.use("/", AuthRoutes);
router.use("/productTags", auth, productTagRoutes);

export default router;
