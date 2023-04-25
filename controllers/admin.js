
// page admin  par defaut

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