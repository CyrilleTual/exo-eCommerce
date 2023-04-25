//import { readFile } from "fs";
 
export default (req, res, next) => {  
    readFile("./data/product.json", "utf8", (error, data) => {
     
        if(error) {
            console.log("aiaiaiai error caramba !");
            res.end;
            return;
        }
        res.locals.datas = JSON.parse(data);
        res.end;
        next();
        return;         
    });
}

import { readFile } from "fs";

 