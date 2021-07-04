<h1 align="center">
  CK-Games
</h1>

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
  <a href="https://redux.js.org">
    <img alt="Redux" src="https://redux.js.org/img/redux.svg" width="60" />
  </a>
  <a href="https://rxjs.dev">
    <img alt="RxJS" src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png" width="60" />
  </a>
</p>
<h2 align="center">
  CK-Games is Progressive Web App (PWA) developed using Gatsby, Redux and RxJS.
</h2>

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This project is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about the project.

## 🚀 Start CK-Games locally

1. Install [Node.js (v14 or newer)](https://nodejs.dev/learn).
2. Install [Gatsby command line interface (CLI) (v3 or newer)](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
3. Navigate to your workspace and clone this repository.
4. Navigate in the cloned repository folder.
5. `npm install`
6. If you want to run the development server:<br>
   `npm start`
7. If you want to serve a production build locally: <br>
   `npm run build`<br>
   `npm run serve`<br>
8. Visit [http://localhost:8000](http://localhost:8000)

## 🚀 Start CK-Games locally using Docker

1. Install [Docker](https://www.docker.com/get-started)
2. Navigate to your workspace and clone this repository.
3. Navigate in the cloned repository folder.
4. If you want to run the devolopment derver:<br>
   `docker build -t ck-games .`<br>
   `docker run -it -p 8000:8000 ck-games`<br>
5. If you want to serve a production build:<br>
   `docker build -f Dockerfile.prod -t ck-games:prod .`<br>
   `docker run -it --rm -p 9000:80 ck-games:prod`

## 💫 Deploy

CK-Games is deployed using Netlify
<a href="https://www.netlify.com/">
<img alt="Netlify" src="https://www.netlify.com/img/deploy/button.svg" width="60" />
</a>

URL: [https://ck-games.netlify.app/](https://ck-games.netlify.app/)
