import { aws } from "./credentials";

const { cognito, apiGateway, s3 } = aws;

export default {
      Auth: {
            mandatorySignIn: true,
            region: cognito.region,
            userPoolId: cognito.userPoolId,
            identityPoolId: cognito.identityPoolId,
            userPoolWebClientId: cognito.appClientId
      },
      Storage: {
            region: s3.region,
            bucket: s3.bucket,
            identityPoolId: cognito.identityPoolId
      },
      API: {
            endpoints: [
                  {
                        name: "notes",
                        region: apiGateway.region,
                        endpoint: apiGateway.url
                  }
            ]
      }
};
