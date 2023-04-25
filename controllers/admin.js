
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

export const addProduct = ( req, res)=>{

        const datas = res.locals.datas;
        let prodToAdd = req.body;

        newProd(datas,prodToAdd);

        res.status(301).redirect("/admin");
 
};

export const removeProduct = ( req, res)=>{

        const datas = res.locals.datas;
        const idToRemove = (req.params.id)

        delProd(datas,idToRemove)

        // console.log (idToRemove)

        // const result = datas.filter(data => data.id !== idToRemove);

        //  console.log (result)

        res.status(301).redirect("/admin");
 
};