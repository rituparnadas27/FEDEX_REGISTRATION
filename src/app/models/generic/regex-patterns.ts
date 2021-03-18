export const RegexPatterns = {
    alphaNumeric: '^[A-Za-z0-9]+(?:[A-Za-z0-9]+)*$',
    onlyNumber: '^[0-9]*$',
    atleastContainOneUpperOrLowerCase: '^(?=.*[A-Z])(?=.*[a-z])^.{8,}$',
    onlyCharValue: '^[a-zA-Z]+$',
    properEmailValidators: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
};  