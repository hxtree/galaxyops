#!/usr/bin/env node
'use strict';
exports.__esModule = true;
var cdk = require('aws-cdk-lib');
var message_broker_stack_1 = require('../stacks/message-broker-stack');
var app = new cdk.App();
new message_broker_stack_1.MessageBrokerStack(app, 'MessageBrokerStack');
