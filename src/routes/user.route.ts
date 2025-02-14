import { Router } from "express";
import {
  allUsers,
  login,
  register,
  updateUser,
} from "../controllers/user.controller";

const userRoute = Router();
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/", allUsers);
userRoute.put("/", updateUser);
export { userRoute };
