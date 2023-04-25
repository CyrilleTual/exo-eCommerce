import express  from "express";

const app = express();
const PORT = 9001;


import dayjs from 'dayjs';
import { writeConsole } from "./components/test.js";
import check from "./middlwares/check.js";
import router from "./router/index.js";

const today = dayjs().format('DD/MM/YYYY') ;

// chemin des views, permet d'utiliser Render directement avec le nom de la view
app.set("views", "./views");
// moteur de rendu 
app.set ("view engine", "ejs")


app
    .use(express.static ("public")) 
    .use(express.urlencoded({extended: true}))
    .use(check)
    .use(router);


// // authentification --- Affichage -----
// app.get("/log", (req, res) => {
//     res.status(200).render("layout", {template: "./log", today: today})
// })

// // authentification --- traitement du formulaire -----
// app.post ("/log", (req, res ) => {
//     // capture de l'alias via req.body
//     if(!req.body.alias){
//       res.status(400);
//       res.send("Faut remplir le champ SVP !!");
//         //   setTimeout (()=>{
//         //     res.redirect("./home");
//         //   }, 1000)
//     } else {
//         app.locals.alias = req.body.alias;
//         console.log('ici',app.locals.alias);  // affichage 
//         writeConsole(app.locals.alias); // affichage !!
//         res.status(301).redirect("/");
//     }
// });



app.listen(PORT, ()=>{
    console.log ('toto'+PORT)
})