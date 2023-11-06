/*
* Atividade 15
* Disciplina de Programação Web
* Fatec Sorocaba
* 
* Autora: Aline Herculano

* Criar uma página utilizando JavaScriptque execute as seguintes funções: 
* A página principal deve conter uma caixa de seleção com nomes de cursos(os cursos da Fatec Sorocaba). 
* Quando o usuário escolher um curso, deverá aparecer uma caixa confirmando se a janela contendo o curso deve realmente seraberta.
* Caso o usuário confirme (clicando em Ok), o curso escolhido deverá ser carregado em uma nova janela (coloque algumas informações sobre * ele) com 600×300 pixels. 
* Use o evento onchange do tag <select> para carregar o curso escolhido.
*/

const showInfo = () => {
  const select = document.querySelector('select');
  const selected = select.options[select.selectedIndex];
  const url = selected.getAttribute('data-url');

  const confirmation = confirm('Deseja abrir informações do curso?');

  if (confirmation) {
      newWindow = window.open("", "newWindow", "width=600,height=300");
      newWindow.document.open();
      newWindow.document.write(`<iframe src="${url}" style="width: 100%; height: 100%;"></iframe>`);
      newWindow.document.close();
      newWindow.focus();
  }
};