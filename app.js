let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim();

    
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    
    if (nomeAmigo.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    
    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado. Por favor, insira um nome diferente.");
        return;
    }

    
    if (!isNaN(nomeAmigo)) {
        alert("Por favor, insira um nome válido (não números).");
        return;
    }

    
    amigos.push(nomeAmigo);
    console.log(amigos);

    
    input.value = "";
    exibirAmigos();
}


function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}


document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
