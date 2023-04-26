import {Router} from "express";
import { homeView } from "../controllers/home.js";

import shop_routes from "./shop.routes.js"
import admin_routes from "./admin.routes.js"

const router = Router();

router.get("/", homeView);          // simple donc va au controller pour rendre la vue  

router.use("/shop", shop_routes);  // continue vers routeur secondaire 

router.use("/admin", admin_routes);  // continue vers routeur secondaire 


export default router;