const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: `hii
    testtt
    indunill`,
            TopicArn: `arn:aws:sns:us-east-1:${process.env.SIGMA_AWS_ACC_ID}:induSNSm26`,
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};