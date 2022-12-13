#!/usr/bin/env node
'use strict';
exports.__esModule = true;
var cdk = require('aws-cdk-lib');
var character_sheet_stack_1 = require('../stacks/character-sheet-stack');
var app = new cdk.App();
new character_sheet_stack_1.CharacterSheetStack(app, 'CharacterSheetStack');
