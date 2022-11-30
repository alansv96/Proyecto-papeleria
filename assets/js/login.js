const email = document.getElementById("exampleInputEmail1");

const password = document.getElementById("exampleInputPassword1");

const form = document.getElementById("form");

const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let regexPass = /^[A-Za-z]\w{7,16}$/;
    console.log(regexEmail.test(email.value)); 
        parrafo.innerHTML = "";   
    if(!regexEmail.test(email.value)){
        warnings += '- El E-mail no es valido. <br>'
        entrar = true
    }
    if(!regexPass.test(password.value)){
        warnings += '- La contraseña debe de tener de 7 a 16 caracteres que sólo contengan letras, números, guión bajo y la primera letra debe ser un caracter. <br>'
        entrar = true
    }
    if(entrar = true){
       parrafo.innerHTML = warnings;
    }

})

