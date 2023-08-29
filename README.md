# 🎵 Projeto Songify!

Nesse projeto desenvolvi uma aplicação Full-Stack, com front-end em React e back-end com MySQL e Node.js, responsável por reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada, consumindo a própria API desenvolvida no back-end.
Estilizado com Styled Components e possuindo design responsivo!

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Instalação](#install)** para saber como rodar o projeto.

### 📋 Pré-requisitos

``Node``
> O projeto espera que sua versão do node seja a 18.

## 🔧 Instalação<a name="install"></a>

Clone o repositório:

```
git@github.com:mariyzx/songify.git
```
:information_source: Instale as dependências e rode com `npm start` na raíz do projeto.

## 📃 Como utilizar

:information_source: Consulte o arquivo `backend/.env.example` para adicionar suas variáveis de ambiente!

É necessário ter uma conta no projeto para listar as músicas, caso não tenha uma conta basta se cadastrar através do link `Sign Up` na página inicial.

## ⚙️ Executando os testes

Para executar os testes do projeto Songify basta ir até a pasta `tests` e utilizar o comando `npm test`.

### 🔩 Análise dos testes

Os testes verificam a renderização de cada componente e o fluxo das páginas. Dessa forma temos uma noção do funcionamento do sistema, além de verificar se ele está atendendo às normas apresentadas.

```
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
```


## 🛠️ Construído com

### Front-end

* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Zod](https://github.com/colinhacks/zod)
* [React Hook Form](https://react-hook-form.com/)
* [Styled Components](https://styled-components.com/)
* [Vitest](https://vitest.dev/)
* [React Testing Library](https://testing-library.com/)
* [Polished](https://polished.js.org/)
* [React Switch](https://www.npmjs.com/package/react-switch)
* [React Icons](https://react-icons.github.io/react-icons/)

### Back-end

* [MySQL](https://www.mysql.com/)
* [Node.js](https://nodejs.org/en)
* [Prisma](https://www.prisma.io/)
* [JWT](https://jwt.io/)
* [Joi](https://joi.dev/)
* [Express](https://expressjs.com/)
* [Nodemon](https://nodemon.io/)

## 🖥 Preview

![image](https://user-images.githubusercontent.com/69324347/235500928-2f897492-05a6-4b48-b735-430c271fb6cb.png)
![image](https://user-images.githubusercontent.com/69324347/235501059-e22c5c8a-bae4-446b-9628-9f2eaca8764b.png)

## ⚙️ Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Aumentar fonte
- [x] Transição nos links de navegação
- [x] Estilizar página Not Found
- [ ] Retorno de sucesso ou erro na tela ao criar uma conta
- [ ] Botão do 'Songify' na tela de SignUp retorna para a tela de Login
- [ ] Cards de álbuns em disposição horizontal
- [ ] Indicações de músicas na tela inicial

## 💚 Connect:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marinhomariana8/) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
)](mailto:marinhomariana8@gmail.com)


