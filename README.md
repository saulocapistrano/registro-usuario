# Frontend Angular para Cadastro de Usuários

Este projeto é um **frontend básico** desenvolvido em **Angular** com o objetivo de consumir uma **API REST** feita em **Java**. O projeto simula o cadastro e a listagem de usuários, e inclui testes automatizados implementados com **Karma** e **Jasmine**.

## Objetivo

O objetivo deste projeto é fornecer uma interface de usuário simples que permite:

1. **Cadastrar novos usuários** na API.
2. **Listar os usuários cadastrados** consumindo os dados da API.
3. **Implementar testes unitários** para garantir a funcionalidade dos componentes principais do frontend.

Este frontend foi desenvolvido para trabalhar em conjunto com a **API de cadastro de usuários**, criada em **Java**. A API serve como backend para armazenar e gerenciar os dados dos usuários.

## Estrutura do Projeto

O projeto Angular foi desenvolvido de forma modular, com uma separação clara entre os componentes e serviços. A seguir, estão os componentes e serviços principais:

### Componentes

- **AppComponent**: Componente principal que organiza a aplicação.
- **UserFormComponent**: Responsável pelo formulário de cadastro de novos usuários.
- **UserListComponent**: Exibe a lista de usuários cadastrados na API.

### Serviços

- **UserService**: Serviço responsável por fazer as requisições HTTP à API, tanto para buscar os usuários quanto para cadastrar novos.

### API

A API em Java possui os seguintes endpoints principais:

- `GET /api/users`: Retorna a lista de usuários cadastrados.
- `POST /api/users`: Permite cadastrar novos usuários.

O **UserService** do frontend Angular faz as requisições para esses endpoints utilizando o **HttpClient** do Angular.

---

## Como Executar o Projeto

### Executando o Frontend Angular

Siga as instruções abaixo para executar o projeto Angular e conectá-lo à API em Java.

#### Requisitos

- **Node.js** e **npm** instalados.
- **Angular CLI** instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```

#### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/saulocapistrano/registro-usuario
   ```

2. **Instale as dependências**:
   Navegue até o diretório do projeto e instale as dependências:
   ```bash
   cd registro-usuario
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   Execute o projeto em ambiente de desenvolvimento:
   ```bash
   ng serve
   ```

4. **Acesse o frontend**:
   O frontend estará disponível em `http://localhost:4200`.

Certifique-se de que a API Java está rodando em `http://localhost:8080/api/users`.

---

### Executando a API em Java

O frontend depende da **API em Java** para funcionar corretamente. Para rodar a API, siga as instruções abaixo:

#### Requisitos

- **Java 11** ou superior instalado.
- **Maven** instalado (para gerenciar as dependências e compilar o projeto).

#### Passos

1. **Clone o repositório da API**:
   ```bash
   git clone https://github.com/saulocapistrano/teste-java-confid-ivs-api-user.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd teste-java-confid-ivs-api-user
   ```

3. **Compile e rode o projeto**:
   Execute o Maven para compilar e rodar o servidor:
   ```bash
   mvn spring-boot:run
   ```

4. **Acesse a API**:
   A API estará disponível em `http://localhost:8080/api/users`.

### Estrutura da API

A API foi implementada em **Java** utilizando **Spring Boot**, e está conectada a um banco de dados que armazena as informações dos usuários. Aqui estão os principais endpoints disponíveis:

- `GET /api/users`: Retorna a lista de usuários cadastrados.
- `POST /api/users`: Cadastra um novo usuário enviando um objeto JSON no corpo da requisição.

Certifique-se de que a API está rodando corretamente antes de iniciar o frontend Angular.

---

## Testes Automatizados

O projeto inclui testes unitários para os componentes principais e o serviço de comunicação com a API. Os testes foram implementados utilizando:

- **Karma**: Para execução dos testes em um ambiente de navegador.
- **Jasmine**: Framework de testes behavior-driven para o desenvolvimento dos testes.

### Rodar os testes

Para rodar os testes, execute o seguinte comando:

```bash
ng test
```

Os testes verificarão, entre outros pontos:

- Se o **formulário de cadastro** está funcionando corretamente.
- Se o **serviço de usuários** (`UserService`) está chamando os endpoints da API como esperado.
- Se a **lista de usuários** está sendo carregada corretamente ao inicializar o componente.

### Estrutura de Testes

- **`AppComponent`**: Testa a criação do componente principal e a renderização do título.
- **`UserFormComponent`**: Testa a funcionalidade do formulário e o envio dos dados para a API.
- **`UserListComponent`**: Testa a recuperação e exibição da lista de usuários.
- **`UserService`**: Verifica se o serviço realiza as requisições corretas para a API.

Os testes utilizam o módulo **`HttpClientTestingModule`** para simular as requisições HTTP, garantindo que os testes sejam executados sem depender da API real.

---

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para o desenvolvimento do frontend.
- **Spring Boot (Java)**: Framework utilizado para o desenvolvimento da API em Java.
- **Karma & Jasmine**: Ferramentas de testes utilizadas para implementar os testes unitários.
- **Maven**: Utilizado para gerenciar as dependências do projeto Java e compilar o código.

## Conclusão

Este projeto é um exemplo básico de uma aplicação **Angular** consumindo uma **API REST** em **Java**, com uma implementação completa de testes unitários para garantir a qualidade do código. O objetivo é demonstrar a integração de um frontend com uma API e a aplicação de boas práticas de desenvolvimento e testes.

Se tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato!
