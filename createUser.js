
'use strict';
var AWS = require('aws-sdk'),
    //uuid =  require('uuid'),
    myDocumentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event, context) {
    var params = {
        Item: {
            "user_id": event.user_id, //uuid.v1(),
            "user_name": event.user_name
        },
        TableName: process.env.USER_TABLE_NAME
    };
    myDocumentClient.put(params, function (err, data) {
        if (err) {
            console.log("Error", err);
          } else {
            console.log("Success", data);
          }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(event.user_id + " id inserted into table named " + process.env.USER_TABLE_NAME),
    };
    return response;

};