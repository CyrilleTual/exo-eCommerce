
// page admin  par defaut

import { newProd } from "../utils/manageProduct.js";
import { delProd, modProd } from "../utils/manageProduct.js";

export const adminView = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/admin",
        templAdmin: "./adminDisplay"
    });
};

export const adminDisplay = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/admin",
        templAdmin: "./adminDisplay"
    });
};

export const adminFormAdd = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./admin/admin",
        templAdmin: "./adminFormAdd"
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

// modification d'un produit  affichage 

export const modifyProduct = ( req, res ) => {

    let datas = res.locals.datas;  // recupère les produits 
    // on filtre sur l'id passé par l'url
    const [dataFiltered] = datas.filter(d => d.id === (req.params.id));  
    res .status(200)
        .render("layout", {
            template: "./admin/admin",
            templAdmin: "./adminModify",
            data: dataFiltered
        });

}

// modif d'un produit 
export const modProduct = ( req, res)=>{

        const datas = res.locals.datas;
        let prodToMod = req.body; // cles/values du form;
        modProd(datas,prodToMod);
        res.status(301).redirect("/admin");
};