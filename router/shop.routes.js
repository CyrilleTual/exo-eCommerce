import {Router} from "express";
import { shopView, itemView } from "../controllers/shop.js";

const router = Router();

router.get('/', shopView);
router.get('/item/:id', itemView);  // le : id va être passé à itemView

export default router;