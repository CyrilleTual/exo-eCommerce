import {Router} from "express";
import { homeView } from "../controllers/home.js";

import shop_routes from "./shop.routes.js"
import admin_routes from "./admin.routes.js"

const router = Router();

router.get("/", homeView);

router.use("/shop", shop_routes);

router.use("/admin", admin_routes);


export default router;