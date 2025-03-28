class Aluno {
  constructor(nome, idade, curso, nota) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.nota = nota;
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
  
    // Atualiza a tabela
    atualizarTabela();
  
    // Limpa o formulário
    this.reset();
  });

function atualizarTabela() {
    const tabela = document.getElementById('table');
    tabela.innerHTML = ''; // Limpa a tabela
  
    // Adiciona cada aluno na tabela
    alunos.forEach((aluno) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.idade}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.nota}</td>
        <td><button onclick="editarAluno('${aluno.nome}')">Editar</button></td>
        <td><button onclick="removerAluno('${aluno.nome}')">Remover</button></td>
      `;
      tabela.appendChild(row);
    });
}

function removerAluno(nome) {
    const index = alunos.findIndex((aluno) => aluno.nome === nome);
    alunos.splice(index, 1);
    atualizarTabela();
}

function editarAluno(nome) {
    const aluno = alunos.find((aluno) => aluno.nome === nome);
    document.getElementById('nome').value = aluno.nome;
    document.getElementById('idade').value = aluno.idade;
    document.querySelector(`input[name="curso"][value="${aluno.curso}"]`).checked = true;
    document.getElementById('nota').value = aluno.nota;
    removerAluno(nome);
}
