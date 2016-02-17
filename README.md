# QuickTips

> **We need you!** The extension stil lacks a lot of useful tips in [`quicktips.json`][quicktips-json]. Feel free to propose new ones on our [GitHub repository][gh-repo].

## Description

QuickTips is a [VS Code][vscode] extension which **displays some useful tips and tricks in a popup**.

It helps newcomers getting more productive with the editor and its extensions by occasionally learning a new tip.

> **Note:** The QuickTips popup will never be automatically opened at VS Code startup ;-)

QuickTips allows extensions developers to add their own tips. See the [API](#api) section if you want to add quick tips for your own VS Code Extension.

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

Simply add your own in [`quicktips.json`][quicktips-json] and open a new pull request.

See [`CONTRIBUTING.md`][contributing-md] for more detailed guidelines.

[![Build Status](https://travis-ci.org/bbenoist/vscode-quicktips.svg?branch=master)][travis-ci]
[![Gitter](https://badges.gitter.im/bbenoist/vscode-quicktips.svg)][gitter]

## API

### Example

The following example demonstrates the addition of new quick tips from another VS Code extension. You should just have to copy and paste it to start adding your own quick tips.

Because we do not want to force end-users to install QuickTips if he didn't asked for it, you need to add some extra code which is also commented below.

Although, one of the positive effects of this policy is that you do not need to declare a additional dependency within `package.json` for your extension to support the QuickTips API.

Once released, be sure to add your extension in the [dedicated wiki page][supported-extensions].

```typescript
// Find the quicktips extension.
var qtExt = vscode.extensions.getExtension('bbenoist.quicktips');
// Only consume the API if the extension has been installed.
if (qtExt) {
  // The manual activation is required to prevent the quicktips extension from
  // being loaded when VS Code starts (see the VS Code API docs for more info).
  qtExt.activate().then(() => {
    // Declare the additional quick tips.
    qtExt.exports.addQuickTips(
      [
        // Replace the quick tips below by your own ones.
        {
          tip: 'You can add your own quick tips with the quicktips public API.',
          url: 'https://github.com/bbenoist/vscode-quicktips'
        },
        { tip: 'URL is optional, you are not forced to use it' }
      ]
    );
  });
}
```

### Specification

The following functions are exported by the QuickTips API:

```typescript
// Add a single quick tip in the collection.
addQuickTip(quickTips:quicktips.IQuickTip)

// Add a multiple quick tips in the collection.
addQuickTips(quickTips:quicktips.IQuickTip[])
```

`IQuickTip` can be any object with the following properties:
```typescript
{
  // The message to display in the popup.
  tip:string,
  // An optional URL to open when clicking on the More Info button.
  url?:string
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
[supported-extensions]: https://github.com/bbenoist/vscode-quicktips/wiki/Extensions-with-QuickTips-support
[contributing-md]: https://github.com/bbenoist/vscode-quicktips/tree/master/CONTRIBUTING.md
[quicktips-json]: https://github.com/bbenoist/vscode-quicktips/tree/master/quicktips.json
[vscode]: https://code.visualstudio.com/
