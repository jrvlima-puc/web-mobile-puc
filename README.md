# Web Mobile

This app have a Node.js server layer and a client layer with Web Mobile lesson material.

Esse app tem um camada Node.js e uma camada cliente com o material didático da disciplina de Web Mobile.

## Getting Started

Instructions bellow will help you get up and running with the project

As instruções abaixo vão te ajudar a configurar e executar o projeto.

### Prerequisities

You need to have previously installed in your local:

Você deve ter previamente instalado em sua máquina local:

```
https://nodejs.org/en/download/
https://www.mongodb.com/download-center?jmp=nav#community
```

### Installing

First step is clone the repository by typing

Primeiro passo é clonar o repostiório

```
git clone https://github.com/jrvlima-puc/web-mobile-2016.git
```
After conplete, go inside the project you've just cloned

Depois de ter completado entre no diretório que acabou de clonar

```
cd web-mobile-2016
```

Now use npm to install all node dependencies that's in package.json

Agora use npm para instalar todas as dependências do node que estão em package.json

```
npm install
```

Now use bower to install all client-side dependencies that's in bower.json

Agora use npm para instalar todas as dependências que estão em bower.json

```
bower install
```

After installing all dependencies, you are good to go. Just run the following command and the server will be up and running at port 8181:

Depois de ter instalado todas as dependências, você estará pronto para rodar a aplicação. Basta rodar o seguinte comando e o servidor vai estar rodando na porta 8181:

```
grunt
```

Now, just open your browser (Chrome, if possible) and run

Agora, basta abrir seu browser e executar

```
localhost:8181
```

## Running the tests

We use karma and jasmine for tests

Estamos usando karma e jasmine para tests

### How to run the tests


```
grunt karma
```

## Structure

Below project structure commented

Abaixo estrutura do projeto comentada.

```
├── client -- frontend - tarefa grunt, em watch sincroniza server/public
│   ├── coursepages - material didático
│   │   └── images
│   ├── exercicios-2016 - exercícios comitados por alunos
│   │   └── exercicio-1
│   │       └── rubensagnelo
│   ├── puc-apps - diretório onde devem estar os trabalhos
│   │   └── apps
│   │       ├── css
│   │       └── sass
│   ├── samples-html - exemplos de html
│   │   ├── article
│   │   ├── aside
│   │   ├── css
│   │   ├── form
│   │   ├── grouping-content
│   │   ├── jsbin
│   │   ├── section
│   │   └── table
│   └── template - diretório do template do material didático
│       ├── css
│       ├── fonts
│       ├── images
│       ├── js
│       │   └── vendor
│       │       └── ie
│       └── sass
│           └── libs
├── grunt - onde estão os arquivos de configuração do grunt
│   └── tasks
├── server - diretório do server side - nodejs
│   ├── bin
│   ├── config
│   ├── controllers - camada de controllers
│   ├── models - camada de modelos do mongoose
│   ├── repositories - camada de daos
│   ├── routes - camada de routes
│   └── services - camada de services
└── tests
    └── puc-specs - diretório onde devem estar os testes dos trabalhos
```

### Node.js Layers

The layers in our Node.js project are to ilustrate the layers patterns, not necessarily is needed to use all, our API is only using routes, models, and repositories. This because we don't have any business rules in server side.

As camadas no nosso projeto são para ilustrar o padrão camadas, não necessariamente é necessário usar todas, nossa API está usando somente routes, models, e repositórios. Isso porque não temos nenhuma lógico no lado do servidor;

* routes - Rotes of express, only receive the HTTP Request and redirect to controllers
* controllers - deal with any logic need to be done with HTTP Requests and HTTP Responses, besides this do any bind
* services - we use services stereotype to isolate the business layer on it
* repositories - are responsible to data access, data object manipulation
* models - represent our entities, or data structures and logic at model level

##Using API

To use API you can use a rest client tools as Postman(Chrome Web Store)

###Create

```
POST -    http://localhost:8181/api/users
PAYLOAD: eg: {"name":"Milton Nascimento", "email":"drmilton@gmail.com", "gender":"Male"}
HEADERS: Content-Type: application/json
```

###Save

```
PUT -    http://localhost:8181/api/users
PAYLOAD: eg: {"id":"0283052394020", "name":"Milton Nascimento", "email":"drmilton@gmail.com", "gender":"Male"}
HEADERS: Content-Type: application/json
```

###Delete

```
DELETE -    http://localhost:8181/api/users/0283052394020
HEADERS:    Content-Type: application/json
```

###FindOne

```
GET -       http://localhost:8181/api/users/0283052394020
HEADERS:    Content-Type: application/json
```

###FindAll

```
GET -       http://localhost:8181/api/users
HEADERS:    Content-Type: application/json
```