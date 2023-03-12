'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null',
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.MessageBrokerStack = void 0;
var constructs_1 = require('@cats-cradle/constructs');
var cdk = require('aws-cdk-lib');
var aws_s3_1 = require('aws-cdk-lib/aws-s3');
var MessageBrokerStack = /** @class */ (function (_super) {
  __extends(MessageBrokerStack, _super);
  function MessageBrokerStack(scope, id, props) {
    var _this = _super.call(this, scope, id, props) || this;
    // provision data-lake-bucket to store published messages
    var dataLakeBucket = new aws_s3_1.Bucket(
      _this,
      ''.concat(id, '-data-lake-bucket'),
      {
        bucketName: ''.concat(_this.account, '-data-lake-bucket'),
        encryption: aws_s3_1.BucketEncryption.S3_MANAGED,
        enforceSSL: true,
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      },
    );
    // deploy lambda
    var microservice = new constructs_1.Microservice(
      _this,
      'message-broker-stack',
      {
        path: 'message-broker',
      },
    );
    // add permissions to send message to data lake
    var nodeJsFunction = microservice.getNodeJsFunction();
    dataLakeBucket.grantPut(nodeJsFunction);
    new cdk.CfnOutput(_this, 'AWS_BUCKET', {
      value: dataLakeBucket.bucketName,
    });
    return _this;
  }
  return MessageBrokerStack;
})(cdk.Stack);
exports.MessageBrokerStack = MessageBrokerStack;
