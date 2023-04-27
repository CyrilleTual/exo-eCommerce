
// page admin  par defaut
import path from 'path';
import { newProd } from "../utils/manageProduct.js";
import { delProd, modProd } from "../utils/manageProduct.js";
import formidable from "formidable";


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
        // let prodToAdd = req.body; // obsolète avec formidable
        const uploadDir = './public/img';

        const customOptions = { uploadDir: uploadDir , keepExtensions: true, 
             maxFileSize: 5 * 1024 * 1024 * 1024, 
            multiples: false };

        const form = formidable(customOptions);   

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.log("Error parsing the files");
                return res.status(400).json({
                    status: "Fail",
                    message: "There was an error parsing the files",
                    error: err,
                });
            }

            // formidable recupère les files dans l'objet files et myFile est le name de l'input    
            const file = files.myFile;

            // creates a valid name by removing spaces
            const fileName = encodeURIComponent(file.originalFilename.replace(/\s/g, "-"));

            // a utiliser pour afficher le bon nom si besoin (alt sur img)
            // const nameToDisplay = decodeURIComponent(fileName)
          
            // nom de stockage : file.newFileName    
            const url_img = "img/" + file.newFilename ;

            // ajout de l'url a la cle url_img de l'objet à  ajouter
            fields.url_img = url_img ;

            // ajout dans la fichier JSON    
            newProd(datas,fields);
        });

       res.status(301).redirect("/admin/display")
 
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