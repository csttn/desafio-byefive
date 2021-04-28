# Aplicação criada para o desafio Byefive

## Tecnologias utilizadas

- **React**
- **ContextAPI**
- **Styled-Components**
- **TypeScript**
- **Docker**
- **Mongodb**
- **Mongoose**
- **Node - Express**
- **JWT**
- **Bcrypt**

e muitas outras...

## Projeto publico em:

### Instalação

Certifique-se de que tenha Docker e Docker-compose instalado de forma global na sua maquina.
Verifique se as portas tcp 3333, 3000 e 27017 não estejam sendo utilizadas, caso alguma esteja realizando qualquer processo favor finalizar.

Após baixar o repositório, com download ou clonando o mesmo, acesse as pastas frontend e backend via terminal e digite o seguinte comando

```
npm i / yarn install
```

Após todas as dependências serem instaladas tanto na pasta backend quanto frontend, entre na pasta backend e digite o seguinte comando

```
docker-compose up
```

As imagens serão baixadas caso não tenha no seu docker, e se ocorrer algum tipo de erro de instalação execute o comando novamente no mesmo diretório

```
docker-compose up
```

Após isso, os serviços serão executados na sya maquina, utilizando as portas de serviço 3333 (node) e 27017(mongo)

Entre na pasta frontend e execute o script para iniciar a aplicação

```
npm start / yarn start
```

demais scripts serão encontrados no arquivo package.json de cada aplicação.
