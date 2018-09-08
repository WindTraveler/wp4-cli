# wp4-cli

A cli-tool based on webpack4.

If you like it, star the project on [github](https://github.com/WindTraveler/wp4-cli).

## Installation
Using npm:
```
npm install -g wp4-cli
```
## Usage
Run command:
```
wp4-cli init
```
Then the cli will generate files in the current directory,including **webpack.config.js**、**index.js** etc.

After that don't forget to run the commond:
```
npm install
```

## Develop
Run command:
```
npm run start
```
Open your broswer and visit `http://localhost:8080/`

Then you could try to modify the **index.html** or **./src/index.js**

Save the changes and your broswer will be freshed automatically.

Enjoy your development!

## Build
Run command:
```
npm run build
```
The output files will be in the **dist** directory by default.

## Other
You could change the default config according to your needs.