# QuickTips

> **We need you!** The extension stil lacks a lot of useful tips in [`package.json`][package-json]. Feel free to propose new ones on our [GitHub repository][gh-repo].

## Description

QuickTips is a [VS Code][vscode] extension which **displays some useful tips and tricks in a popup**.

![QuickTips example](images/example.jpg)

It helps newcomers getting more productive with the editor and its extensions by occasionally learning a new tip.

> **Note:** The QuickTips popup will never be automatically opened at VS Code startup ;-)

QuickTips allows extensions developers to add their own tips in `package.json` without declaring it as a dependency. See the [API](#api) section if you want to add quick tips for your own VS Code Extension.

[List of supported extensions][supported-extensions]

## Usage

Press `F1` and select the command with title: `QuickTips: Display a useful tip about VS Code and its installed extensions`.

> **Tip:** Unless you have a conflicting extension, using the `tip` or `quicktips` keywords should be sufficent.

This will open a popup displaying a randomly selected tip.

![QuickTips example](images/example.jpg)

Clicking on **More Info** will open a new webpage with more detailed information about the tip.

Clicking on **New Tip** will open a new random tip.

## Installation
### Visual Studio Code
Hit `Ctrl+P` and enter the `ext install quicktips` command.

### Installing the extension locally
Just clone the [GitHub repository][gh-repo] under your local extensions folder:
* Windows: `%USERPROFILE%\.vscode\extensions`
* Mac / Linux: `$HOME/.vscode/extensions`

## Issues / Feature requests
You can submit your issues and feature requests on the GitHub [issues page][issues].


## Contributing

New quick tips are welcome!

Simply add your own in [`package.json`][package-json] and open a new pull request.

See [`CONTRIBUTING.md`][contributing-md] for more detailed guidelines.

[![Gitter](https://badges.gitter.im/bbenoist/vscode-quicktips.svg)][gitter]
[![Build Status](https://travis-ci.org/bbenoist/vscode-quicktips.svg?branch=master)][travis-ci]
[![Dependency Status](https://david-dm.org/bbenoist/vscode-quicktips.svg)][npm-dependencies]
[![devDependency Status](https://david-dm.org/bbenoist/vscode-quicktips/dev-status.svg)](npm-devdependencies)

## API

QuickTips can automatically load additional tips from the `package.json` file of other extensions.

Which means that you simply have to add a `quickTips` property in it to have them included in the QuickTips command.

That's it, **no additional npm dependency** is required. End-users of your extension will not be forced to install QuickTips.

Each item of the `quickTips` property must be an object with the following fields:

```typescript
{
  // The message to display in the popup.
  tip:string,
  // An optional URL to open when clicking on the More Info button.
  url?:string
}
```

QuickTips eats its own dogfood. Which means that you can see a working example in the [`package.json`][package-json] file of this extension.

Here is an alternative example baser on the Hello World VS Code extension tutorial:

```json
{
  "name": "myFirstExtension",
  "description": "",
  "version": "0.0.1",
  "publisher": "",
  "engines": {
    "vscode": "^0.10.1"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onCommand:extension.sayHello"
  ],
  "main": "./out/src/extension",
  "contributes": {
    "commands": [{
      "command": "extension.sayHello",
      "title": "Hello World"
    }]
  },
  "scripts": {
    "vscode:prepublish": "node ./node_modules/vscode/bin/compile",
    "compile": "node ./node_modules/vscode/bin/compile -watch -p ./"
  },
  "devDependencies": {
    "typescript": "^1.7.5",
    "vscode": "^0.11.x"
  },
  "quickTips": [
    {
      "tip": "You can add your own quick tips with the quicktips public API.",
      "url": "https://github.com/bbenoist/vscode-quicktips"
    },
    { "tip": "URL is optional, you are not forced to use it" }
  ]
}
```

## More information
* [QuickTips on the Visual Studio Marketplace][marketplace]
* [GitHub repository][gh-repo]
* [Gitter chatroom][gitter]

## Credits
Icon made by Freepik from www.flaticon.com.

[marketplace]: https://marketplace.visualstudio.com/items/bbenoist.QuickTips
[gh-repo]: https://github.com/bbenoist/vscode-quicktips
[issues]: https://github.com/bbenoist/vscode-quicktips/issues/
[gitter]: https://gitter.im/bbenoist/vscode-quicktips
[travis-ci]: https://travis-ci.org/bbenoist/vscode-quicktips
[npm-dependencies]: https://david-dm.org/bbenoist/vscode-quicktips
[npm-devdependencies]: https://david-dm.org/bbenoist/vscode-quicktips#info=devDependencies
[supported-extensions]: https://github.com/bbenoist/vscode-quicktips/wiki/Extensions-with-QuickTips-support
[contributing-md]: https://github.com/bbenoist/vscode-quicktips/tree/master/CONTRIBUTING.md
[package-json]: https://github.com/bbenoist/vscode-quicktips/tree/master/package.json
[vscode]: https://code.visualstudio.com/
