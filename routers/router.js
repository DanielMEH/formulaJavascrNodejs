const { Router } = require("express");

const router = Router();

router.get("/",(req,res)=>{

    res.render("../views/vista.html",{name:"Formulario"})
})


router.get("/contenido",(req,res)=>{

    res.render("../views/layouts/juegos.html")
})
module.exports = router;