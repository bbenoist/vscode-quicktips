'use strict';

import * as quicktips from './quicktips';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path'

export function activate(context: vscode.ExtensionContext) {
  var quickTipsExt = new quicktips.QuickTipExtension(() => {});
  context.subscriptions.push(quickTipsExt);

  // Loop over vscode extensions to find quick tips.
  vscode.extensions.all.forEach((ext) => {
    if (Object.prototype.hasOwnProperty.call(ext.packageJSON, 'quickTips')) {
      quickTipsExt.addQuickTips(ext.packageJSON.quickTips);
    }
  });

  // Expose the quickTips command to VS Code.
  let disposable = vscode.commands.registerCommand('extension.quickTips', () => {
    quickTipsExt.showRandomQuickTip();
  });
  context.subscriptions.push(disposable);

  // Expose the public API to other extensions.
  return {
    // Add a single quick tip in the collection.
    addQuickTip(quickTip:quicktips.IQuickTip) {
      quickTipsExt.addQuickTip(quickTip);
    },

    // Add a multiple quick tips in the collection.
    addQuickTips(quickTips:quicktips.IQuickTip[]) {
      quickTipsExt.addQuickTips(quickTips);
    }
  }
}

export function deactivate() {
}
