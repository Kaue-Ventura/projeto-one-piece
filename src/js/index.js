const botao = document.getElementById('chopper');
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {

        botao.classList.add("selecionado");

        desselecionarBotao();
        desselecionarPersonagem();

        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarBotao() {
    
}
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

