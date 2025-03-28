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