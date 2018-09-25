import * as yup from 'yup';
import {passwordRegex} from '../../config';
import {tooShort, requiredField, invalidFormat, doesNotMatch, invalidPassword } from '../../config/messages';

export default yup.object().shape({
      confirmationCode: yup
            .number()
            .required(requiredField),
      confirmNewPassword: yup
            .mixed()
            .required(requiredField)
            .oneOf([ yup.ref('newPassword') ], doesNotMatch('password')),
      newPassword: yup
            .string()
            .required(requiredField)
            .min(8, tooShort(8))
            .max(255)
            .matches(passwordRegex, invalidPassword)
});