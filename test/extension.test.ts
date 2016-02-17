import * as assert from 'assert';

import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

suite("Extension Tests", () => {

  test("API", () => {
    var ext = vscode.extensions.getExtension('bbenoist.quicktips');
    ext.activate().then(() => {
      var extExports = ext.exports;
      extExports.addQuickTip({tip: 'It works!'});
      extExports.addQuickTips([
        {tip: 'It'},
        {tip: 'also'},
        {tip: 'works'},
        {tip: 'with'},
        {tip: 'arrays'},
        {tip: '!'}
      ]);
    });
  });
});
