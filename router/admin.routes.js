import {Router} from "express";
//import { shopView, itemView } from "../controllers/shop.js";
import { addProduct, adminDisplay, adminFormAdd, adminView, removeProduct } from "../controllers/admin.js";

const router = Router();

router.get('/', adminView);
router.get('/display', adminDisplay)
router.get('/addProduct', adminFormAdd)
router.post('/add', addProduct)
router.get('/removeProduct/:id', removeProduct)


export default router;