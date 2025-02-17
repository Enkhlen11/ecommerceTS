import express from "express";
import { userRoute } from "./routes/user.route";
import bodyParser from "body-parser";
import { productRoute } from "./routes/products.route";
import { searchRoute } from "./routes/search.route";

const app = express();
const port = 3000;

app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/search", searchRoute);

app.listen(port, () => {
  console.log(`server runnig on port${port}`);
});
