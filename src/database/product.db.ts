type Product = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  category?: string;
  images?: string[];
};
export const products: Product[] = [
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
