# Vue 3 + Typescript + Vite + Vuex + Tailwind CSS

A vue 3 starter boilerplate with Vue Router 4, Vuex 4, Typescript 4, Tailwind CSS, VITE, Prettier and more. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- Eslint
- Prettier
- GitLens

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Architecture

```text
src/
├───assets/               //assets such as images, css, fonts and more.
│
├───components/           //universal Vue components.
├───middleware/
│   ├──ApiServices.ts     //contains axios instance.
│   └──Endpoints.ts       //contains all the endpoints.
│
├───views/                //pages
│   ├──view-folder/
│   │  ├───index.vue 
│   │  └───components/    //contains local page components.
│   └──index.ts
│
├───store/                //vuex store modules.
│   └──modules/
│      └───store-folder/
│          └──index.ts
│
├───router/
│   └──index.ts           //views router config.
│
├───typings/              //typescript .d.ts files. 
│
├───App.vue
└───main.ts
```
# Install

```bash
1. clone this repo
2. run: npm install / yarn
```

## Commands
```bash
# start development server. 
yarn dev

# lint files.
yarn lint

# lint and fixes files.
yarn lint:fix

# run jest test.
yarn test 

# format document.
yarn format

# compile production bundle.
yarn build
```