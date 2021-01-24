import validator from 'validator';

const isValidExpensesForm = ( typeExpense, spendMoney ) => {
    if( typeExpense.trim().length < 2 || validator.isEmpty( typeExpense ) || !validator.isAlpha( typeExpense, [ 'es-ES' ] ) ) {
        return {
            msgErrorExpenses: 'Ingrese un tipo de gasto válido.',
            isValid: false
        };
    } else if( isNaN( spendMoney ) || spendMoney <= 0 || !validator.isInt( spendMoney, { min: 1, allow_leading_zeroes: false } ) || !validator.isNumeric( spendMoney ) ) {
        return {
            msgErrorExpenses: 'Ingrese una cantidad de gasto válida.',
            isValid: false
        };
    }

    return {
        msgErrorExpenses: null,
        isValid: true
    }
};

export default isValidExpensesForm;
