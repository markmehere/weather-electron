# Weather App

#### By Mark Pazolli

A sample app created with [Electron](https://www.electronjs.org/) extended from a similarly-named
web app.

## Technologies

* React and Redux for the web core
* Enzyme and Jest for testing
* Electron for cross-platform support

## Run

To run:

```
nvm use
npm install
npm start
```

To build the desktop app:

```
nvm use
npm install
npm run package
```

To test:

```
nvm use
npm install
npm test
```

## Building from scratch

1. Install [git](https://git-scm.com/) - Electron depends on it
2. Install [node](https://nodejs.org/en/) v12.x - either direct from that link or via nvm using
  [Homebrew](https://brew.sh/) or [NVM for Windows](https://github.com/coreybutler/nvm-windows)
3. If using nvm prepare using `nvm install v12.16.3` and `nvm use v12.16.3`
4. Type `npm install`
5. To build the desktop app `npm run package`

## License
The Unlicense or Public Domain 2020

The weather icons are property of [Metaweather.com](https://www.metaweather.com/api/) who are
similarly generous.

## Metaweather
This software uses the outstanding [Metaweather.com](https://www.metaweather.com/api/) for
weather data. One of the few open APIs developed in the true spirit of the web.
