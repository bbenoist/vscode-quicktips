'use strict';

import * as quicktips from './quicktips';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path'

export function activate(context: vscode.ExtensionContext) {
  var ext = new quicktips.QuickTipExtension(() => {});
  context.subscriptions.push(ext);

  // Load quick tips from resource.json file to simplify its maintaining.
  ext.addQuickTips(
    JSON.parse(
      fs.readFileSync(
        path.join(context.extensionPath, 'src', 'resource.json')
      ).toString()
    ).quickTips
  );

  // Expose the quickTips command to VS Code.
  let disposable = vscode.commands.registerCommand('extension.quickTips', () => {
    ext.showRandomQuickTip();
  });
  context.subscriptions.push(disposable);

  // Expose the public API to other extensions.
  return {
    // Add a single quick tip in the collection.
    addQuickTip(quickTip:quicktips.IQuickTip) {
      ext.addQuickTip(quickTip);
    },

    // Add a multiple quick tips in the collection.
    addQuickTips(quickTips:quicktips.IQuickTip[]) {
      ext.addQuickTips(quickTips);
    }
  }
}

export function deactivate() {
}
