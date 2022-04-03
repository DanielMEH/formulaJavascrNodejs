const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const exp = require("constants");


//? ajustes

app.set("port", process.env.PORT || 3000)

app.set("views",path.join(__dirname,"views"))
//midlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))
app.engine("html",require("ejs").renderFile)
app.set("view engine","ejs")
// ? router

app.use(require("./routers/router"))
//? servidor

app.listen(app.get("port"),()=>{

    console.log("estas conectado en el puerto",app.get("port"))
})