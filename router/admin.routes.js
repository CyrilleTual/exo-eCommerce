import {Router} from "express";
//import { shopView, itemView } from "../controllers/shop.js";
import { adminDisplay, adminView } from "../controllers/admin.js";

const router = Router();

router.get('/', adminView);
router.get('/display', adminDisplay)
//router.get('/item/:id', itemView);  // le : id va être passé à itemView

export default router;