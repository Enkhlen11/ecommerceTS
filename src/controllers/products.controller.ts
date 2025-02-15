import { RequestHandler } from "express";
import { products } from "../database/product.db";

//create product
const createProduct: RequestHandler = (req, res) => {
  console.log(req.body);
  const { _id, name } = req.body;
  const findProductName = products.find((product) => product.name == name);
  if (findProductName) {
    res.send({ data: findProductName, message: "iim nertei baraa baina" });
    return;
  }
  const lastProduct = products[products.length - 1];
  const newProductId = lastProduct._id ? Number(lastProduct._id) + 1 : 1;
  const newProduct = { _id: newProductId.toString(), name };
  products.push(newProduct);
  res.send("success");
};

const allProduct: RequestHandler = (req, res) => {
  res.send(products);
};
export { createProduct, allProduct };
