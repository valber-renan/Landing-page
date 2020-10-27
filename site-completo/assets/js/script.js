let experiencia =document.querySelector("#experiencia")
let experienciaOk = false
let email=document.querySelector("#email")
let emailOk = false

email.style.width= "100%"

function validaExperiencia(){
    let txtExperiencia = document.querySelector('#txtExperiencia')

    if(experiencia.value.length <= 19){
        txtExperiencia.innerHTML = "Texto é muito pequeno, digite no minimo 20 caracteres "
        txtExperiencia.style.color = "red"
        txtExperiencia.style.display = "block"
        experienciaOk=false
    }else{
        txtExperiencia.style.display = "none"
        experienciaOk =true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML= "E-mail Inválido"
        txtEmail.style.color= "red "
        emailOk=false
    }else {
        txtEmail.innerHTML= "E-mail válido"
        txtEmail.style.color="green "
        emailOk = true
    }
}

function enviar(){
    if (emailOk  && experienciaOk){
        alert ("Formulário enviado com Sucesso !!")
        window.location.href = 'index.html'
    }else if(emailOk==false){
        alert ("Preencha o campo de E-mail corretamente antes de enviar !!")
        window.setTimeout(()=>{
            document.querySelector("#email").focus()
        },0)
       
    }else{
        alert ("Preencha o campo de Experiência corretamente antes de enviar !!")
        window.setTimeout(()=>{
            document.querySelector('#experiencia').focus()
        },0)
       
    }
}
    