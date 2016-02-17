import * as vscode from 'vscode';
var open = require('open');

// Public definition of a quick tip.
export interface IQuickTip {
  // The message to display in the popup.
  tip:string,
  // An optional URL to open when clicking on the More Info button.
  url?:string
}

// Manages a collection of quick tips.
class QuickTipManager {
  quickTips:IQuickTip[] = []

  // Returns a random quick tip.
  randomQuickTip() {
    if (this.quickTips.length == 0) {
      throw "No quick tip found!";
    }
    var index = Math.floor((Math.random() * this.quickTips.length));
    return this.quickTips[index];
  }
}

// VS Code implementation.
export class QuickTipExtension extends vscode.Disposable {
  manager:QuickTipManager = new QuickTipManager();

  // Add a single quick tip in the collection.
  addQuickTip(quickTip:IQuickTip) {
    this.manager.quickTips.push(quickTip);
  }

  // Add a multiple quick tips in the collection.
  addQuickTips(quickTips:IQuickTip[]) {
    this.manager.quickTips.push.apply(this.manager.quickTips, quickTips);
  }

  // Show a random quick tip in a popup.
  showRandomQuickTip() {
    const newTipLabel = 'New Tip';
    const moreInfoLabel = 'More Info';
    var quickTip = this.manager.randomQuickTip();
    var showInfoPromise =
      Object.prototype.hasOwnProperty.call(quickTip, 'tip')
      ? vscode.window.showInformationMessage(quickTip.tip, newTipLabel, moreInfoLabel)
      : vscode.window.showInformationMessage(quickTip.tip, newTipLabel);
    showInfoPromise.then((choice:string) => {
      if (choice === newTipLabel) {
        this.showRandomQuickTip();
      } else if (choice === moreInfoLabel) {
        open(quickTip.url);
      };
    });
  }
}
