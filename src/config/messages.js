// [TODO]: Add tooltip to invalid password message for more detailed explanation
export const tooShort = min => `Should be at least ${min} characters long`;
export const requiredField = `Required`;
export const invalidFormat = 'Invalid format';
export const doesNotMatch = type => `Must match the ${type}`;
export const invalidPassword = 'Must contain at least 1 upper case and lower case letter, 1 number and 1 special character';
export const fileTooLarge = max => `Some files are too large, max size allowed: ${ max } kb`;
export const forbiddenFIleType = allowed => `Only  ${ allowed } allowed`
export const hasInvalidCharacters = 'Has some invalid characters'