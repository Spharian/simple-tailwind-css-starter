# Simple Tailwind CSS Starter

I made this starter for a friend (web designer) who was struggling getting started using [SASS](https://sass-lang.com) and [Tailwind CSS](http://tailwindcss.com).
You can either download this repository and start with this structure or read the instructions below to integrate it in your existing project.

For the sake of simplicity, this starter uses the awesome [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) package.

## Getting started with an existing project

Open your Terminal and `cd` to your project. If you don't know what that means, no worries, simply type `cd` and an extra space then drag & drop your project folder in your terminal:
```
cd /your/project/path
```

As we are using [npm](https://www.npmjs.com/get-npm), create a `package.json` file if it doesn't exist:
```
npm init -y
```

Then add the following `scripts` in this newly created file (be careful with commas, JSON is severe):
```json
{
  "scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  }
}
```

Install the dependencies:
```
npm install laravel-mix tailwindcss cross-env sass sass-loader --save-dev
```

Publish the `webpack.mix.js` file, this is needed to specify your sources files paths:
```
cp node_modules/laravel-mix/setup/webpack.mix.js ./
```

Open `webpack.mix.js`, remove the comments and customize it to meet your needs. Here is my configuration:
```js
let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .sass('src/sass/app.scss', 'dist/') // You might need to make changes on this line
  .options({
    postCss: [
      tailwindcss('tailwind.js'),
    ],
    processCssUrls: false,
  });
```

Create the `tailwind.js` [config file](https://tailwindcss.com/docs/configuration#generating-your-configuration-file):
```
npx tailwind init
```

At the top of your main `.scss` file, add the following imports:
```
@tailwind preflight;
@tailwind components;
@tailwind utilities;
```

Finally, run `npm run watch` and let the Terminal window open, this will watch your changes and compile automatically!

## Getting started by downloading this repository

Download this repository and install the dependencies:
```
npm install
```

Watch your files and let the window open:
```
npm run watch
```

Everything else is ready, happy coding!

## Minified CSS files

In production, you might want minified CSS files. Just use:
```
npm run prod
```

## Great Code Editor Packages

### Sublime Text 3
- [Tailwind CSS Autocomplete](https://packagecontrol.io/packages/Tailwind%20CSS%20Autocomplete)

### Visual Studio Code
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/itemdetails?itemName=bradlc.vscode-tailwindcss)
