# Apple Svelte Demo

This directory is a short example for an apple like zoom-out animation only created with [Svelte](https://svelte.dev/) and [Sapper](https://sapper.svelte.dev/)
The purpose of this project is to show how easy it is to create complex animations without using frameworks like ScrollMagic or GSAP

![](/static/img/project-image.png)

> A Live Demo is avaible under: https://apple-svelte-demo.now.sh/

## How to use this Project

1. Clone this Repo to your computer

```shell
$ git clone https://github.com/niklasgrewe/apple-svelte-demo.git
```

2. Install Dependencies

```shell
$ npm i
```

> make sure you have already installed nodejs and npm

3. Run the Project

```shell
$ npm run dev
```

4. Build the App

```shell
$ npm run build
```

> in this example we use `sapper export` for static deployment provided by ZEIT NOW. When you want to use SSR (server-side-rendering) you need to change this line

```json
"scripts": {
    "build": "sapper export",
},
```

to

```json
"scripts": {
    "build": "sapper build",
},
```
