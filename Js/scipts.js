console.log("scripts.js carregado");  // você deve ver isso no console (F12)

function entrarBatePapo(event) {
    event.preventDefault(); // Impede que o link funcione sem verificação

    const senha = prompt("Digite a senha para acessar o Bate Papo:");
    if (senha === "Oscria4") {
        window.location.href = "botoes/batepapo.html";
    } else {
        alert("Senha incorreta!");
    }
}

function entrarEntre() {
    const nome = prompt("Digite seu nome:");
    if (nome && nome.trim().length >= 3) {
        let nomes = JSON.parse(localStorage.getItem("acessos") || "[]");
        nomes.push(nome.trim());
        localStorage.setItem("acessos", JSON.stringify(nomes));
        window.location.href = "botoes/entre.html";
    } else {
        alert("Digite um nome com pelo menos 3 letras.");
    }
}
