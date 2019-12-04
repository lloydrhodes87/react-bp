const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-1' });
const SSM = require('aws-sdk/clients/ssm');

const lambdaEnvironment = process.env.LAMBDA_ENVIRONMENT;

const salesForceUrl = `/${lambdaEnvironment}/global-secrets/salesforce/salesforce-url`;
const salesForceClientId = `/${lambdaEnvironment}/global-secrets/salesforce/client-id`;
const salesForceClientSecret = `/${lambdaEnvironment}/global-secrets/salesforce/client-secret`;
const salesForceUsername = `/${lambdaEnvironment}/global-secrets/salesforce/username`;
const salesForcePassword = `/${lambdaEnvironment}/global-secrets/salesforce/password`;

async function getSFParams() {
    
    const ssmParameters = await getParams();

    return {
        
        sfUrl: ssmParameters.find(x => x.Name === salesForceUrl).Value,
        sfClientId: ssmParameters.find(x => x.Name === salesForceClientId).Value,
        sfClientSecret: ssmParameters.find(x => x.Name === salesForceClientSecret).Value,
        sfUsername: ssmParameters.find(x => x.Name === salesForceUsername).Value,
        sfPassword: ssmParameters.find(x => x.Name === salesForcePassword).Value,
    }
}

async function getParams() {
    return new Promise((res, rej) => {
        const query = {
            'Names': [
                salesForceUrl,
                salesForceClientId,
                salesForceClientSecret,
                salesForceUsername,
                salesForcePassword
            ],
            'WithDecryption': true,
        };

        new SSM().getParameters(query, (err, data) => {
            if (err) {
                rej(err);
                return;
            }

            res(data.Parameters);
        });
    });
}

module.exports = getSFParams;