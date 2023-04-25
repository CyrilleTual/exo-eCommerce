import express  from "express";

const app = express();
const PORT = 9001;

import * as fs from 'fs';        //equivalent de  : const fs = require('fs');        // pour le readFile
import * as path from 'path';   //equivalent de  : const path = require("path");    // pour le dir name
import * as url from 'url';
import dayjs from 'dayjs';
import { writeConsole } from "./components/test.js";


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//console.log(__dirname);

const today = dayjs().format('DD/MM/YYYY') ;



// chemin des views, permet d'utiliser Render directement avec le nom de la view
app.set("views", "./views");
// moteur de rendu 
app.set ("view engine", "ejs")

app.use(express.static ("public")); 
app.use(express.urlencoded({extended: true}));

// middleWare qui va lire le fichier de datas à chaque Get
const check = (req, res, next) => {  
    fs.readFile(path.join(__dirname, "data/product.json"), (error, data) => {
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

// landing page : un seul produit aléatoire 
app.get("/", check, ( req, res)=>{
    
    let datas = res.locals.datas;
    console.log (today)

    // ici on selectionne puis passe une seul produit à la page home :
    const randomItem = datas[Math.floor(Math.random() * datas.length)];
    res.status(200).render("layout", {template: "./home" , data: randomItem , today: today});
})

// shop complet
app.get("/shop", check, ( req, res)=>{
    res.status(200).render("layout",{template: "./shop", datas: res.locals.datas, today: today});
})

// detail sur un produit 
app.get("/detail/:id", check, ( req, res)=>{

    let datas = res.locals.datas;  // recupère les produits 
    // on filtre sur l'id passé par l'url
    const [dataFiltered] = datas.filter(d => d.id === (req.params.id));  
    res.status(200).render("layout", {template: "./detail", data: dataFiltered, today: today});
})

// authentification --- Affichage -----
app.get("/log", (req, res) => {
    res.status(200).render("layout", {template: "./log", today: today})
})

// authentification --- traitement du formulaire -----
app.post ("/log", (req, res ) => {
    // capture de l'alias via req.body
    if(!req.body.alias){
      res.status(400);
      res.send("Faut remplir le champ SVP !!");
        //   setTimeout (()=>{
        //     res.redirect("./home");
        //   }, 1000)
    } else {
        app.locals.alias = req.body.alias;
        console.log('ici',app.locals.alias);  // affichage 
        writeConsole(app.locals.alias); // affichage !!
        res.status(301).redirect("/");
    }
});



app.listen(PORT, ()=>{
    console.log ('toto'+PORT)
})