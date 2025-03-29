class Aluno {
  constructor(nome, idade, curso, nota) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.nota = nota;
  }

  isAprovado() {
    return this.nota >= 7; //TRUE 
  }

  tostring() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota: ${this.nota}`;
  }


}

const alunos = [];

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.querySelector('input[name="curso"]:checked')?.value;
    const nota = document.getElementById('nota').value;
  
    // Verifica se todos os campos foram preenchidos
    if (!nome || !idade || !curso || !nota) {
      alert('Irmão Faltou preencher algum campo! 🤬');
      return;
    }
  
    // Cria um novo objeto Aluno e adiciona ao array
    const aluno = new Aluno(nome, idade, curso, nota);
    alunos.push(aluno);
    console.log(aluno.tostring());
    console.log(alunos);

    const mensagemAprovacao = document.getElementById('mensagem-aprovacao');
    if (aluno.isAprovado()) {
        mensagemAprovacao.textContent = `O(a) ${aluno.nome} foi aprovado! 🎉`;
        mensagemAprovacao.style.color = "green";
    } else {
        mensagemAprovacao.textContent = `O(a) ${aluno.nome} não foi aprovado. 👈🤣`;
        mensagemAprovacao.style.color = "red";
    }
  
    atualizarTabela();
  
    this.reset();
  });

  function atualizarTabela() {
    const tabela = document.getElementById('table');
    tabela.innerHTML = ''; // Limpa a tabela

    // Adiciona cada aluno na tabela
    alunos.forEach((aluno, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.nota}</td>
            <td><button class="editar">Editar</button></td>
            <td><button class="remover">Remover</button></td>
        `;
        tabela.appendChild(row);

        // Adiciona evento de clique ao botão "Editar"
        row.querySelector('.editar').addEventListener('click', () => {
            editarAluno(index);
        });

        // Adiciona evento de clique ao botão "Remover"
        row.querySelector('.remover').addEventListener('click', () => {
            removerAluno(index);
        });
    });
}

const removerAluno = (index) => {
  const alunoRemovido = alunos[index];
  alunos.splice(index, 1); // Remove o aluno do array
  atualizarTabela(); // Atualiza a tabela
  console.log(`Aluno ${alunoRemovido.nome} foi removido com sucesso!`);
};

const editarAluno = (index) => {
  const aluno = alunos[index];
  document.getElementById('nome').value = aluno.nome;
  document.getElementById('idade').value = aluno.idade;
  document.querySelector(`input[name="curso"][value="${aluno.curso}"]`).checked = true;
  document.getElementById('nota').value = aluno.nota;

  const form = document.querySelector('form');
  const botaoCadastrar = form.querySelector('input[type="submit"]');
  botaoCadastrar.value = "Salvar";

  // Substitui o comportamento padrão do botão "Cadastrar"
  form.onsubmit = function (index) {
    const aluno = alunos[index];
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.querySelector(`input[name="curso"][value="${aluno.curso}"]`).checked = true;
    document.getElementById('nota').value = aluno.nota;


    alunos[index] = new Aluno(nomeAtualizado, idadeAtualizada, cursoAtualizado, notaAtualizada);
//Essa porra não exclui a desgraça da linha antiga pois estou usando index, e se eu excluir antes ele não vai alterar pq n vai mais existir essa porra
    alert('Aluno foi editado com sucesso!');

    // Restaura o botão "Cadastrar" e o comportamento padrão
    botaoCadastrar.value = "Cadastrar";
    form.onsubmit = null;

    atualizarTabela();

    // Limpa o formulário
    form.reset();
  };
}

//Relatorio dos aprovadis
document.getElementById('aprovados').addEventListener('click', function () {
  const alunosAprovados = alunos.filter(aluno => aluno.isAprovado());
  const listaAprovados = alunosAprovados.map(aluno => aluno.tostring()).join('<br>');
  document.getElementById('relatorio-bi').innerHTML = `<h3>Alunos Aprovados:</h3><p>${listaAprovados}</p>`;
});

//media das notas
document.getElementById('media-notas').addEventListener('click', () => {
  const mediaNotas = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.nota), 0) / alunos.length;
  document.getElementById('relatorio-bi').innerHTML = `<h3>Média das Notas Finais:</h3><p>${mediaNotas.toFixed(2)}</p>`;
});

//media das notas
document.getElementById('media-idades').addEventListener('click', () => {
  const mediaIdades = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.idade), 0) / alunos.length;
  document.getElementById('relatorio-bi').innerHTML = `<h3>Média das Idades:</h3><p>${mediaIdades.toFixed(2)}</p>`;
});

//Ordem alfabética
document.getElementById('alunos-ordem').addEventListener('click', () => {
  const nomesOrdenados = alunos.map(aluno => aluno.nome).sort().join('<br>');
  document.getElementById('relatorio-bi').innerHTML = `<h3>Nomes em Ordem Alfabética:</h3><p>${nomesOrdenados}</p>`;
});

// Qtd de alunos por curso
document.getElementById('quantidade-por-curso').addEventListener('click', () => {
  const quantidadePorCurso = alunos.reduce((contador, aluno) => { //Usando contadpr
      contador[aluno.curso] = (contador[aluno.curso] || 0) + 1;
      return contador;
  }, {});
  const resultado = Object.entries(quantidadePorCurso)
      .map(([curso, quantidade]) => `${curso}: ${quantidade}`)
      .join('<br>');
  document.getElementById('relatorio-bi').innerHTML = `<h3>Quantidade de Alunos por Curso:</h3><p>${resultado}</p>`;
});