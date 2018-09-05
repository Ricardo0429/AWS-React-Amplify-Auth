import * as yup from 'yup';
import {
      tooShort,
      requiredField,
      invalidFormat,
      doesNotMatch,
      invalidPassword
} from '../../config/messages';

export default yup.object().shape({
      email: yup
            .string()
            .email()
            .required(requiredField)
            .max(255)
            .email(invalidFormat),
      confirmPassword: yup
            .mixed()
            .required(requiredField)
            .oneOf([ yup.ref('password') ], doesNotMatch('password')),
      password: yup
            .string()
            .required(requiredField)
            .min(8, tooShort(8))
            .max(255)
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/, invalidPassword)
});