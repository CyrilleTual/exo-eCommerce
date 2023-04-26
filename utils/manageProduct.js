import { v4 as uuidv4 } from 'uuid';
import fs from "fs";


function write (datas) {
     fs.writeFile("./data/product.json", JSON.stringify(datas), err => {
        if (err) {
        console.error(err);
        }
        // fichier écrit avec succès
        });
}



// On reçoit en paramètre le tableau avec les datas et le nouvel objet
export function newProd (datas,prodToAdd){

    // création du nouvel id 
    const id =uuidv4();
    // ajout de l'id au nouvel article 
    prodToAdd.id= id;
    // image par defaut (temporaire)
    prodToAdd.url_img = "img/default.jpeg"

    // ajout du nouveau produit au produits existants
    datas.push(prodToAdd)

    // ecriture du nouveau datas
    write(datas);
}

// remove d'un produit - reçoit l'id
export function delProd(datas,idToRemove){
     const result = datas.filter(data => data.id !== idToRemove);
     write (result);
}

// reçcoit l'objet à modifier
export function modifyProduct(data){

    console.log (data)

}

export function modProd(datas, toMod){
    // on remove puis add 

    const newDatas = datas.filter(data => data.id !== toMod.id);

    newDatas.push(toMod);

    write(newDatas);

}


