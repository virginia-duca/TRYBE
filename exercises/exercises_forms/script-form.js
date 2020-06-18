
function limparCampos() {
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
}

document.getElementById("limpar").addEventListener("click", limparCampos());

/*
document.getElementById("validar").addEventListener("click", validarForm);


function validarForm(){
    let value = document.getElementById("email").value
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/g; 
    if (! re.test(value)) {
        alert("email inválido !")
    } else {

    }
}
*/