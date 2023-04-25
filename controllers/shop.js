export const shopView = ( req, res)=>{
    res.status(200).render("layout",{
        template: "./shop", datas: res.locals.datas 
    });
};

export const itemView =( req, res)=>{
    let datas = res.locals.datas;  // recupère les produits 
    // on filtre sur l'id passé par l'url
    const [dataFiltered] = datas.filter(d => d.id === (req.params.id));  
    res.status(200).render("layout", {template: "./detail", data: dataFiltered});
}
