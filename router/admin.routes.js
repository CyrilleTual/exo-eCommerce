import {Router} from "express";
//import { shopView, itemView } from "../controllers/shop.js";
import { addProduct, adminDisplay, adminFormAdd, adminView, removeProduct, modifyProduct, modProduct } from "../controllers/admin.js";

const router = Router();

router.get('/', adminView);                              // chemin:   /admin/
router.get('/display', adminDisplay)                     //           /admin/display            
router.get('/addProduct', adminFormAdd)
router.post('/add', addProduct)
router.get('/removeProduct/:id', removeProduct);
router.get('/modifyProduct/:id', modifyProduct)

router.post('/mod', modProduct)


export default router;