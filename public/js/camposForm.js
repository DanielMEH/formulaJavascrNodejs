const formulario = document.querySelector(".formulario")
const input = document.querySelectorAll(".formulario .input")

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  dia: /^[0-9]{1,31}$/,
  yearDate: /^[0-9]{1,3000}$/
};


const campos = {

    usuario: false,
    names: false,
    email: false,
    telefono: false,
    password: false,
    dia: false,
    year: false
}

for(let dia = 1; dia <= 31; dia++){

    let diaOption = document.createElement("option");
    diaOption.value= dia;
    diaOption.innerText = dia;
    formulario.diaSelect.appendChild(diaOption)
    
}

let yearDate= new Date().getFullYear();

for(let date = yearDate; date >= yearDate -60; date-- ){

    let dateOption = document.createElement("option");
    dateOption.value = date;
    dateOption.innerText = date;
    formulario.mesyear.appendChild(dateOption);
}



function validarFormulario(e){

    switch (e.target.name) {
      case "usuario":
        datosCampos(expresiones.usuario, e.target, "usuario");

        break;
      case "names":
        datosCampos(expresiones.nombre, e.target, "names");
        break;
      case "email":
        datosCampos(expresiones.correo, e.target, "email");
        break;
      case "telefono":
        datosCampos(expresiones.telefono, e.target, "telefono");
        break;
        case "password":
            datosCampos(expresiones.password, e.target, "password");
            passwordValidation("password2");
            break;
            case "dia":
              datosCampos(expresiones.dia, e.target, "dia");
              break;
            case "year":
              datosCampos(expresiones.yearDate, e.target, "year");
              break;
      case "password2":
        passwordValidation("password2");
        break;

      default:
        break;
    }


}

const datosCampos =(expresion, input, campo) =>{
     if (expresion.test(input.value)) {
       document.querySelector(`.group__${campo}`).classList.remove("errrordatos");
       document.querySelector(`.group__${campo}`).classList.add("datosgood");
       document.querySelector(`.group__${campo}`).classList.add("errrordatos");
       document.querySelector(`.label__${campo}`).classList.remove("labeltext");
       campos[campo]= true;
     } else {
       document.querySelector(`.group__${campo}`).classList.remove("datosgood");
       document.querySelector(`.group__${campo}`).classList.add("errrordatos");
       document.querySelector(`.label__${campo}`).classList.add("labeltext");
       document.querySelector(`.group__${campo}`).classList.remove("datosgood");
       campos[campo] = false;
     }
    
}

const passwordValidation = (campo)=>{

    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    if (password.value !== password2.value) {
       document.querySelector(`.group__${campo}`).classList.remove("datosgood");
       document.querySelector(`.group__${campo}`).classList.add("errrordatos");
       document.querySelector(`.label__${campo}`).classList.add("labeltext");
       document.querySelector(`.group__${campo}`).classList.remove("datosgood");
       campos[campo] = false;
     } else {
       
       document.querySelector(`.group__${campo}`).classList.remove("errrordatos");
       document.querySelector(`.group__${campo}`).classList.add("datosgood");
       document.querySelector(`.group__${campo}`).classList.add("errrordatos");
       document.querySelector(`.label__${campo}`).classList.remove("labeltext");
       campos[campo] = true;
       
     }
    

}

input.forEach( input =>{

    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})





const form = formulario.addEventListener("submit",(e)=>{

    e.preventDefault();


    if (campos.usuario && campos.names && campos.email && campos.telefono && campos.password && campos.dia && campos.year) {

        let campDato = document.createElement("div")
        let datos = document.querySelector(".validarText").innerHTML="Datos enviados";
        setTimeout(()=>{

         let datos = document.querySelector(".validarText").innerHTML="";
        formulario.reset(); 
        window.location = "/contenido";    
            
        },3000)
    }else{
        let datosr = document.querySelector(".errtext").innerHTML="Error completa todos los campos";
          setTimeout(()=>{
            
             let datosr = document.querySelector(".errtext").innerHTML="";
        },3000)
    }
    
   
})