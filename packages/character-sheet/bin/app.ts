#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {CharacterSheetStack} from '../stacks/character-sheet-stack';

const app = new cdk.App();
new CharacterSheetStack(app, 'CharacterSheetStack');
