import { RequestHandler } from "express";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
  images?: string[];
};
export let products: Product[] = [
  {
    _id: "1",
    name: "apple",
    description: "it's friut",
    price: 10,
    stock: 100,
    category: "friut",
    images: ["http://www.google.mn"],
  },
];

//create product
const createProduct: RequestHandler = (req, res) => {
  console.log(req.body);
  const { name } = req.body;
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

// Нэг барааг авах
const getSingleProduct: RequestHandler = (req, res) => {
  const { id } = req.params; // _id параметрийг URL-ээс авна

  // Барааг _id-р нь хайх
  const singleProductId = products.find((product) => product._id === id);

  if (!singleProductId) {
    res.status(404).send({ message: "Бараа олдсонгүй" });
    return;
  }

  // Олдсон барааг буцаах
  res.send("baraa avsan");
};

const udpdateProduct: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const fixProduct = products.find((product) => product._id === id);
  if (!fixProduct) {
    res.send("product not found");
    return;
  }
  fixProduct.name = name;
  products.push(fixProduct);
  res.send("fix product");
};

const deleteProduct: RequestHandler = (req, res) => {
  const { name } = req.body;
  const deleteProduct = products.filter((product) => product.name !== name);
  products = deleteProduct;
  res.send("deleted");
};
export {
  createProduct,
  allProduct,
  getSingleProduct,
  udpdateProduct,
  deleteProduct,
};
