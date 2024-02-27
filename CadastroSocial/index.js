const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
    checkInputLog()
})


function checkInputUsername() {
    const usernameValue = username.value;

    console.log(usernameValue)

    if (usernameValue == "") {
        window.alert("Digite o nome corretamente")
    }
}

function checkInputLog() {
    const senhaValue = senha.value;

    if (senhaValue === "" ) {
        window.alert(senha, "A senha é obrigatória")
    } else if ( senhaValue.length <= 7) {
        window.alert(senha, "Precisa de no minimo 8 caracteres")
    } else {
        window.alert("Cofirmado")
    }
}


