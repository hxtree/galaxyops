#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cdk = require("aws-cdk-lib");
var design_system_stack_1 = require("../stacks/design-system.stack");
var app = new cdk.App();
new design_system_stack_1.DesignSystemStack(app, 'DesignSystemStack');
