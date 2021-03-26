const google = require('googleapis').google;
const _auth = require('./Authorizer');
const pubsub = google.pubsub('v1');
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
    pubsub.projects.topics.subscriptions.list({
        topic: `projects/${process.env.GCP_PROJECT}/topics/cloud-builds`,
        pageSize: 10
    })
        .then(response => {
            console.log(response.data);  // successful response
            /*
            response.data = {
                "subscriptions": [
                    "projects/<project>/subscriptions/<subscription-1>",
                    "projects/<project>/subscriptions/<subscription-2>",
                    ...
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    return { "message": "Successfully executed 11" };
};