while(true) {
    const senha = Number(lines.shift());

    if (senha === 2002){
        console.log("Acesso Permitido")
        break;
    } else {
        console.log("Senha Inválida")
    }
}
