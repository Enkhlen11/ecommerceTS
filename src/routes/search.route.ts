import { Router } from "express";

import search from "../controllers/search.controller";

const searchRoute = Router();
searchRoute.get("/:key", search);

export { searchRoute };
