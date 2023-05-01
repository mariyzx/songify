# 🎵 Projeto Songify!

Nesse projeto desenvolvi uma aplicação Full-Stack, com front-end em React e back-end com MySQL e Node.js, responsável por reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada, consumindo a iTunes Search API.
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
git@github.com:mariyzx/songify.git.
```
:information_source: Instale as dependências e rode o projeto com `npm start` na raíz do projeto.

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

### ⚙️ Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas de acessibilidade:

- [x] Aumentar fonte
- [x] Transição nos links de navegação
- [x] Estilizar página Not Found
- [ ] Cards de álbuns em disposição horizontal
- [ ] Indicações de músicas na tela inicial

## 💚 Connect:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marinhomariana8/) [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
)](mailto:marinhomariana8@gmail.com)


