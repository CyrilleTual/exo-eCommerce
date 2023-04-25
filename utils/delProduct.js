import fs from "fs";
export function delProd(datas,idToRemove){
     const result = datas.filter(data => data.id !== idToRemove);

      // ecriture du nouveau datas

        fs.writeFile("./data/product.json", JSON.stringify(result), err => {
        if (err) {
        console.error(err);
        }
        // fichier écrit avec succès
        });

    console.log (result)

}