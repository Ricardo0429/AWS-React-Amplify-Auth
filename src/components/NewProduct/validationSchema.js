// [TODO]: Work out the description regex
// [TODO]: Do we need photo name regex?
import * as yup from 'yup';
import { requiredField, hasInvalidCharacters } from '../../config/messages';
import { nameRegex, descriptionRegex } from '../../config';

export default yup.object().shape({
      name: yup
            .string()
            .required(requiredField)
            .min(5)
            .max(40)
            .matches(nameRegex, hasInvalidCharacters),
      description: yup
            .string()
            .required(requiredField)
            .min(20)
            .max(500)
            .matches(descriptionRegex, hasInvalidCharacters),
});