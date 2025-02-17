import { Router } from "express";
import {
  createProduct,
  allProduct,
  getSingleProduct,
  udpdateProduct,
  deleteProduct,
} from "../controllers/products.controller";

const productRoute = Router();
productRoute.post("/", createProduct);
productRoute.get("/", allProduct);
productRoute.get("/:id", getSingleProduct);
productRoute.put("/:id", udpdateProduct);
productRoute.delete("/:id", deleteProduct);

export { productRoute };
