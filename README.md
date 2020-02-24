# Envisioning Justice Design System

The React.js development for the Envisioning Justice CCC Site.

## Creating a new react.js project

```
npx/npm create-react-app my-app
cd my-app
npm start
```

And then for scss management:

```
npm install node-sass
```

## Set up github pages

To set up gh-pages, run this in your terminal:

```
npm install gh-pages --save-dev
```

Then add these baddies to your package.json > "scripts":

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

Also add above the app name:

```
"homepage": "https://{yourusername}.github.io/{thegithubreponame}"
```

Sick! Now back in your terminal run a

```
git init
git remote add origin https://github.com/{yourusername}/{thegithubreponame}.git
```

To test the deploy, in terminal do:

```
git status
git add .
git commit -m "{your deploy title here}"
```

Since we added to shortcut commands to the .json script, we can run these last few commands for deployment:

```
npm run deploy
```

Then you'll have to put in your username and password, into the terminal.

Last little bit!

```
git push -u origin master
```

Now anytime you make edits and want to check out how it looks, go ahead and run

```
npm run deploy
git push -u origin master
```

## Organization and Structure

Within the src folder please create the following folders:

1. components (place your reusable code here)
2. images (.svg, .jpg, or storage .ai files)
3. pages (index.js shall house your router)
4. style (contains .scss files, index.scss shall be the main stylesheet)

Remove the following default files:

1. serviceWorker (remove line 5 on the index.js file aka the service worker import, and line 12's service worker .register())
2. setupTests
3. logo.svg (remove the import on the App.js file, and the html reference in the render <img> tag)
4. App.test.js

Now for some renaming, this repo follows a lowercase-lowercase naming convention. Folder files with two works shall be conjoined with a hyphen, -. .JS files with two works shall follow a lowercaseUppercase.js naming system. Rename the following default files:

1. App.css to app.css (also move to an index.scss file in the style folder)
2. App.js to app.js

Move into one file (index.css and app.css into styles > index.scss)

## Installing

This project uses the node and npm ecosystem to build the tool. Before running or installing the
project please download and run [node](https://nodejs.org/en/download/). You will then clone the
following repository to your personal computer and run it through your code editor's terminal.

```
npm install
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
