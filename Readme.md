# 📘 Projeto: Cadastro de Alunos - DevTech Academy - Tarefa 1

## 📌 Sobre o Projeto
Este projeto consiste em um sistema de cadastro de alunos utilizando HTML, CSS e JavaScript, com funcionalidades para adicionar, editar e remover alunos, além de gerar relatórios estatísticos. O projeto também pode ser containerizado utilizando Docker.

---

## 📌 Conceitos Importantes Utilizados

### 🏗️ Programação Orientada a Objetos (POO)
O projeto faz uso de POO em JavaScript, aplicando os conceitos de **Atributos, Construtor e Métodos**.

#### 🔹 Atributos
Atributos são as propriedades de uma classe que armazenam dados sobre um objeto.

Exemplo no projeto:
```javascript
class Aluno {
  constructor(nome, idade, curso, nota) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.nota = nota;
  }
}
```

#### 🔹 Construtor
O construtor é um método especial que inicializa um objeto quando a classe é instanciada.

Exemplo:
```javascript
const aluno1 = new Aluno("Carlos", 20, "JavaScript", 9.5);
```

#### 🔹 Métodos
Métodos são funções dentro de uma classe que definem comportamentos dos objetos.

Exemplo:
```javascript
isAprovado() {
  return this.nota >= 7;
}
```

---

### 🖥️ Eventos, Funções Anônimas e Arrow Functions

#### 🔹 Eventos
Eventos são usados para capturar ações do usuário e responder a elas.

Exemplo no código:
```javascript
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log("Formulário enviado!");
});
```

#### 🔹 Funções Anônimas
São funções sem nome, geralmente usadas como callbacks.

Exemplo:
```javascript
document.getElementById('aprovados').addEventListener('click', function () {
  console.log("Botão clicado!");
});
```

#### 🔹 Arrow Functions
São funções anônimas simplificadas, introduzidas no ES6.

Exemplo:
```javascript
document.getElementById('media-notas').addEventListener('click', () => {
  console.log("Calculando média...");
});
```

---

### 🛠️ Métodos de Array: filter, map, reduce, sort

#### 🔹 `filter()`
Filtra elementos de um array com base em uma condição.

Exemplo:
```javascript
const alunosAprovados = alunos.filter(aluno => aluno.isAprovado());
```

#### 🔹 `map()`
Cria um novo array transformando cada elemento do array original.

Exemplo:
```javascript
const nomesAlunos = alunos.map(aluno => aluno.nome);
```

#### 🔹 `reduce()`
Reduz um array a um único valor (como soma ou média).

Exemplo:
```javascript
const mediaNotas = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.nota), 0) / alunos.length;
```

#### 🔹 `sort()`
Ordena um array.

Exemplo:
```javascript
const alunosOrdenados = alunos.sort((a, b) => a.nome.localeCompare(b.nome));
```

---

### 🐳 Docker
O projeto pode ser containerizado para facilitar a execução em diferentes ambientes.

#### 🔹 Dockerfile
O arquivo `Dockerfile` define o ambiente do projeto.

Exemplo de um `Dockerfile` básico:
```dockerfile
FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "script.js"]
```

#### 🔹 Construindo e Executando o Container
```sh
docker build -t cadastro-alunos .
docker run -p 3000:3000 cadastro-alunos
```

---

## 🚀 Como Rodar o Projeto
1. Clone o repositório
2. Abra o `index.html` no navegador
3. Utilize a interface para cadastrar alunos
4. Veja os relatórios estatísticos gerados

Caso esteja utilizando Docker:
```sh
docker-compose up
```

---

## 📌 Conclusão
Este projeto aborda conceitos essenciais de programação orientada a objetos, manipulação de eventos e arrays em JavaScript, além da containerização com Docker. É um excelente exemplo para quem deseja aprofundar conhecimentos nessas áreas!

## 🌐 URL

https://saraiva142.github.io/Tarefa01-TCS/

🐳
