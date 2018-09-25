import { cognito } from './credentials';

const { userPoolId, appClientId } = coginto;

const config = {
      s3: {
            REGION: 'us-east-1',
            BUCKET: 'notes-bs'
      },
      apiGateway: {
            REGION: 'us-east-1',
            URL: 'https://t8q3ml85wc.execute-api.us-east-1.amazonaws.com/prod'
      },
      cognito: {
            REGION: 'us-east-1',
            USER_POOL_ID: userPoolId,
            APP_CLIENT_ID: appClientId,
            IDENTITY_POOL_ID: 'us-east-1:80546e0c-6893-4e87-a7d8-4d0e9c9dab83'
      }
};

export default {
      Auth: {
            mandatorySignIn: true,
            region: config.cognito.REGION,
            userPoolId: config.cognito.USER_POOL_ID,
            identityPoolId: config.cognito.IDENTITY_POOL_ID,
            userPoolWebClientId: config.cognito.APP_CLIENT_ID
      },
      Storage: {
            region: config.s3.REGION,
            bucket: config.s3.BUCKET,
            identityPoolId: config.cognito.IDENTITY_POOL_ID
      },
      API: {
            endpoints: [{
                  name: "notes",
                  endpoint: config.apiGateway.URL,
                  region: config.apiGateway.REGION
            }
      ]}
}

