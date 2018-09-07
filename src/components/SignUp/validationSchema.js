import * as yup from 'yup';
import { passwordRegex } from '../../config';
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
            .email(invalidFormat)
            .required(requiredField)
            .max(255),
      confirmPassword: yup
            .mixed()
            .required(requiredField)
            .oneOf([ yup.ref('password') ], doesNotMatch('password')),
      password: yup
            .string()
            .required(requiredField)
            .min(8, tooShort(8))
            .max(255)
            .matches(passwordRegex, invalidPassword)
});