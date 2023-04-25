
// page admin  par defaut

import { newProd } from "../utils/insertNewProd.js";
import { delProd } from "../utils/delProduct.js";

export const adminView = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/admin"
    });
};

export const adminDisplay = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/adminDisplay"
    });
};

export const adminFormAdd = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/adminFormAdd"
    });
};

// ajout d'un produit 
export const addProduct = ( req, res)=>{

        const datas = res.locals.datas;
        let prodToAdd = req.body;

        newProd(datas,prodToAdd);

        res.status(301).redirect("/admin");
 
};

// remove d'un produit 
export const removeProduct = ( req, res)=>{

        const datas = res.locals.datas;
        const idToRemove = (req.params.id)

        delProd(datas,idToRemove)

        res.status(301).redirect("/admin");
 
};