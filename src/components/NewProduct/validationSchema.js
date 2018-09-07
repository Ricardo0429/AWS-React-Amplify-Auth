// [TODO]: Work out the description regex
// [TODO]: Do we need photo name regex?
import * as yup from 'yup';
import { requiredField, hasInvalidCharacters } from '../../config/messages';
import { descriptionRegex } from '../../config';

export default yup.object().shape({
      description: yup
            .string()
            .required(requiredField)
            .max(500)
            .matches(descriptionRegex, hasInvalidCharacters),
});