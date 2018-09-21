# 🥔 Potato App

> UI Engineer Hiring Project (Engineering Team)

## 💪 Challenge

Check out the [challenge notes](./challenge.md) for details on project requirements and submission.


## 🛠 Prerequisite

* [React](https://reactjs.org/)
* [Storybook](https://storybook.js.org/)

A working Node dev environment ([LTS](https://nodejs.org/en/) recommended). This project was scaffolded with [Create React App](https://github.com/facebook/create-react-app?files=1). CRA uses [Yarn](https://yarnpkg.com/en/) out-of-the-box. You don't have to use Yarn. [npm](https://www.npmjs.com/) works just fine 👍.


## 🔧 Setup

Fork/clone/download this repo it to your computer.

Go into that directory and install dependencies by running:

```
yarn
```

Or:

```
npm install
```


## 📂 File structure

Below are notable folders in this project:

```
/ui-eng-test-potato-app
|- src/
|   \- components/
\- stories/
```

#### `components`

The component files will be located under `src/components`.

#### `stories`

The [Storybook](https://storybook.js.org/) files are located under `stories/`


## 🕹 Development

This project is basically an out-of-the-box Create React App project, that was generated via `create-react-app`.

Fire up the local Storybook server by running:

```
yarn run storybook
```

Visit the dev environment at [http://localhost:9009/](http://localhost:9009/).

## ⚗️ Testing

The only test suite set up is powered by Jest. To get that setup, install dependencies by running:

```
yarn
```

To run the tests, run this command:

```
yarn run test
```