//Cartão de visitas

function ao_clicar() {
    var texto = document.getElementById("clicou");
    if (texto.style.display === "none") {
        texto.style.display = "block"; 
    } else {
        texto.style.display = "none";
    }
}

function brilha() {
    document.getElementById("pisca").style.color = "blue"
}

function des_brilha() {
    document.getElementById("pisca").style.color = "black"
}

//Lista de tarefas

