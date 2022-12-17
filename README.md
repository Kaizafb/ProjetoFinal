
# Projeto Afeto

A API tem como intuito de cadastrar Organizações que tem o foco em ajudar mulheres vitimas de abusos, afim de orientar e encorajar a seguir a com denuncia, e buscar sua saúde mental.


A API permite que a organização, site e profissionais da saúde faça seu cadastro, realize login, atualize seu cadastro e delete seu cadastro. 

API feita como projeto final do Bootcamp Todas em Tech em Back-end da {Reprograma}


**Introdução e objetivo**

Durante a pandemia de Covid-19 o número de violencia domestica aumentou drasticamente. Cerca de (18,6%) das mulheres sofreram algum tipo de violencia tal como; agressões, física, psicológica ou sexual, de seus parceiros e familia. 

Esse numero fica ainda mais alarmante quando indice é de letalidade da violencia, este ano o Brasil bateu o recorde de feminicídios só no 1º semestre quando houve 631 casos entre janeiro e junho segundo dados publicados pelo Fórum Brasileiro de Segurança Pública. Também em pesquisa, cerca de 5 em cada 10 brasileiros relataram ter visto uma mulher sofrer algum tipo de violencia em sua vizinhança.

Os dados são alarmantes, porém muitas mulheres desistem da denuncia por falta de precissão nas informações, ficam a merecer de seus agressores até que a agressão vire algo fatal.



**Tecnologias e pacotes utilizados neste projeto**

- JavaScript
- Git/Github
- Node.js
- MongoDBatlas
- Postman
- Vscode
- Vercel



**Pacotes Utilizados**

- Express
- Nodemon
- dotenv
- Mongoose
- cors
- nodemon
  
  

## Arquitetura MVC

```
PROJETO_FINAL   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 orgControllers.js
   |         
   |
   |    |- 📁 config
   |         |- 📑 database.js
  
   |
   |    |  - 📁 models
   |         |- 📑 orgModels.js
   |         
   |
   |    |  - 📁 routes
   |         |- 📑 orgRoutes.js
   |         
   |
   |    |- 📑 app.js
   |
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 vercel.json
````

## Utilização da API
 ### 1º Passo - Clonar o respositório
Clone este projeto para a sua máquina local.
```sh
git clone https://github.com/Kaizafb/ProjetoFinal
```

### 2º Passo - Instalar as dependências
Para instalar as dependências do projeto, digite o comando no terminal:
```sh
npm i
```

### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.example` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações contidas no arquivo `.env` para as informações correspondentes a sua máquina e e inclua os valores para PORT com a porta, MONGO_URI com a URL do MongoDb.

### 4º Passo - Executar a aplicação
Com a aplicação clonada e as dependências configuradas basta rodar a aplicação com o comando no terminal:
```sh
npm start
```

 <div id='rotas'/>

 ## Mapeamento das rotas

| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| POST        | `/post('/criar'`          | Faz o cadastro da Organização. |
|  GET        | `'/buscarOrg'`         | Busca a Organização. |
| PUT         | `'/atualizar/:id'`         | Atualiza a Organização  |
| DELETE        | `'/deletar/:id'`     | Deleta a Organização.      |

 ----------- | ------------------ | ------------------------------------ |


## Futuras melhorias
- Implementar testes em todas as rotas.
- Rotas com buscas mais detalhadas.
- Criar um grupo para mulheres trocarem informações e relatos pessoais.



Reademe utilizados como referência:
https://github.dev/brena-odwyer/projFinal_reprograma





