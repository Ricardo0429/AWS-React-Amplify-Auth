
export const filePreviewDim = '80px' ;
export const maxFileSize= 100000;
export const allowedFileTypes = [ 'image/png', 'image/jpeg' ];

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
export const nameRegex = /^[a-zA-Z0-9_-]{5,40}$/;
// [TODO]: Work out the regex for product description
export const descriptionRegex = /.*/;