 // Função para exibir o modal
 function exibirModal() {
     var modalBackground = document.getElementById("modalBackground");
     modalBackground.style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
     var modalBackground = document.getElementById("modalBackground");
     modalBackground.style.display = "none";
}

// Adicionar evento de clique para os links com a classe 'atent'
var atentLinks = document.querySelectorAll('.atent');
atentLinks.forEach(function(link) {
     link.addEventListener('click', function(event) {
          event.preventDefault();
          exibirModal();
     });
});

// Adicionar evento de clique para o botão de fechar o modal
var modalCloseBtn = document.getElementById('modalCloseBtn');
modalCloseBtn.addEventListener('click', function() {
     fecharModal();
});