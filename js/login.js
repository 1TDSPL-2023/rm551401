let listaDeUsuario = {
}

{
    nomeCompleto : 
    emailUsuario : 
    senhaUsuario : 
}





const inputEmail = document.querySelector("#idEmail")
const inputSenha = document.querySelector("#idPass")

addEventListener("click",(evt)=>{

    let usuarioLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }


if(evt.target.id == "btnSubmit"){

    if(usuarioLogado.emailUsuarioLogado == "dudu" && usuarioLogado.senhaUsuarioLogado == "123456")
        console.log("VALIDO!");
    
    }else{
        console.log("NAO VALIDO!");
    }


});





