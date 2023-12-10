Welcome to My Repo
===================

- [Welcome to My Repo](#welcome-to-my-repo)
- [How this works](#how-this-works)
  - [Prerequisites](#prerequisites)
  - [Install Node.js](#install-nodejs)
  - [Install Antora](#install-antora)
  - [Run Antora](#run-antora)
- [Reference](#reference)

# How this works

## Prerequisites
* Install Node.js.
* Install Antora.

## Install Node.js

If you installed Node.js, please open a terminal and type:

```node
node -v
```

If no version number is displayed in your terminal, you need to install Node.js.

Please select and download [NodeJS](https://nodejs.org/en/download) based on your platform.

**Note:** version node >= `v16.20.0`

Once you’ve installed Node.js, it’s time to install Antora.

## Install Antora

```node
npm i -g @antora/cli@3.1 @antora/site-generator@3.1
```

You can verify that the antora command is available on your path by running:

```node
 antora -v
```

## Run Antora

In the terminal, you type

```node
antora --fetch antora-playbook.yml
```

Navigate to the build/site directory and open the index.html file in your browser to see the result.

# Reference

- [Antora](https://antora.org/)
- [NodeJS](https://nodejs.org/en/download)