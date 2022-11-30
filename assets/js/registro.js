const nombre = document.getElementById("exampleInputNombre1");

const apellido = document.getElementById("exampleInputApellido1");

const email = document.getElementById("exampleInputEmail1");

const password = document.getElementById("exampleInputPassword1");

const password2 = document.getElementById("exampleInputPassword2");

const form = document.getElementById("form");

const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e=>{
    e.preventDefault()
        let warnings = "";
        let entrar = false;
        let regexNombre = /^[a-zA-ZÁ-ÿ\s]{1,40}$/;
        let regexApellido = /^[a-zA-ZÁ-ÿ\s]{1,40}$/;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        let regexPass = /^[A-Za-z]\w{7,14}$/;
    console.log(regexEmail.test(email.value)); 
        parrafo.innerHTML = "";
        
        
    if(!regexNombre.test(nombre.value)){
        warnings += '- El nombre puede incluir un máximo 40 caracteres sin números o caracteres especiales. <br>'
        entrar = true
    }    
    if(!regexApellido.test(apellido.value)){
        warnings += '- El apellido puede incluir un máximo 40 caracteres sin números o caracteres especiales. <br>'
        entrar = true
    }    
    if(!regexEmail.test(email.value)){
        warnings += '- El E-mail no es valido. <br>'
        entrar = true
    }
    if(!regexPass.test(password.value)){
        warnings += '- La contraseña debe de tener de 7 a 16 caracteres que sólo contengan letras, números, guión bajo y la primera letra debe ser un caracter. <br>'
        entrar = true
    }
    if(password.value !== password2.value){
        warnings += '- Ambas contraseñas deben coincidir. <br>'
        entrar = true
    }

    if(entrar = true){
       parrafo.innerHTML = warnings;
    }


});

const checkbox = document.getElementById('info');
form.addEventListener( 'submit', e=>{
    e.preventDefault()
    if(!info.checked) {
       alert('Es necesario aceptar los términos y condiciones');
       return false;
    } 
});
