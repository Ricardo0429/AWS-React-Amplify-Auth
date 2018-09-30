
export const filePreviewDim = '80px' ;
export const maxFileSize= 100000;
export const allowedFileTypes = [ 'image/png', 'image/jpeg' ];

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
export const nameRegex = /^[a-zA-Z0-9_-]{5,40}$/;
// [TODO]: Work out the regex for product description
export const descriptionRegex = /.*/;

export const aws = {
      cognito: {
            region: 'us-east-1',
            userPoolId: 'us-east-1_dafnkxBjp',
            appClientId: '35l4j9i02kctlm54fnvg0b7eft',
            identityPoolId: 'us-east-1:80546e0c-6893-4e87-a7d8-4d0e9c9dab83'
      },
      s3: {
            region: 'us-east-1',
            bucket: 'notes-bs'
      },
      apiGateway: {
            region: 'us-east-1',
            url: 'https://t8q3ml85wc.execute-api.us-east-1.amazonaws.com/prod'
      }
};