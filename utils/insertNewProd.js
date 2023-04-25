import { v4 as uuidv4 } from 'uuid';
import fs from "fs";

// On reçoit en paramètre le tableau avec les datas et le nouvel objet

export function newProd (datas,prodToAdd){

        console.log('ici',prodToAdd);   //objet avec les novelles valeurs 
        //console.log (datas)

        // création du nouvel id 
        const id =uuidv4();
        // ajout de l'id au nouvel article 
        prodToAdd.id= id;
        // image par defaut (temporaire)
        prodToAdd.url_img = "img/default.jpeg"

        // ajout du nouveau produit au produits existants
        datas.push(prodToAdd)


        // ecriture du nouveau datas

        fs.writeFile("./data/product.json", JSON.stringify(datas), err => {
        if (err) {
        console.error(err);
        }
        // fichier écrit avec succès
        });


}