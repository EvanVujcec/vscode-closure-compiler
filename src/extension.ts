'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { IGenericObject } from './functions/igeneric';

enum Commands {
    WHITESPACE,
    SIMPLE,
    ADVANCED
  }
  
  const OPTIONS: IGenericObject<number> = {
    'Whitespace Only': Commands.WHITESPACE,
    'Simple Optimizations': Commands.SIMPLE,
    'Advanced Optimizations': Commands.ADVANCED
  }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "closure-compiler" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.closureCompile', () => {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        vscode.window.showQuickPick(Object.keys(OPTIONS)).then(response => {
            // switching selected option
            switch(OPTIONS[response]) {
              case Commands.WHITESPACE:
              break;
              case Commands.SIMPLE:
              break;
              case Commands.ADVANCED:
              break;
            }
          });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}