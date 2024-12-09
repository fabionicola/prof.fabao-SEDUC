//alert("Olá mundo!!!");

//let nomeUser = prompt("Qual o seu nome?");

let nomeUser = "";

let elemento = document.querySelector("#nome-user");

while (nomeUser == "") {
    nomeUser = prompt("Qual o seu nome?");
}

if (nomeUser == null) {
    elemento.textContent = 'seja muito bem vindo.';
} else {
    elemento.textContent = nomeUser;
}

