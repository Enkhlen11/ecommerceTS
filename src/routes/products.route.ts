import { Router } from "express";
import { createProduct, allProduct } from "../controllers/products.controller";

const productRoute = Router();
productRoute.post("/create", createProduct);
productRoute.get("/", allProduct);

export { productRoute, allProduct };
