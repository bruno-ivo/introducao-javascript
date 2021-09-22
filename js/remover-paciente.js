var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
        event.target.parentNode.classList.add("fadeOut");; //alvo selecionado pelo double click
        setTimeout(function () {
            event.target.parentNode.remove(); //TR = linha do paciente a ser removida
        }, 500) //função de espera
});
