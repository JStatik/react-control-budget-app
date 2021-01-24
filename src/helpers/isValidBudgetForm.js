import validator from 'validator';

const isValidBudgetForm = ( budget ) => {
    if( isNaN( budget ) || budget <= 0 || !validator.isInt( budget, { min: 1, allow_leading_zeroes: false } ) || !validator.isNumeric( budget ) ) {
        return {
            msgErrorBudget: 'Ingrese un presupuesto válido.',
            isValid: false
        };
    }

    return {
        msgErrorBudget: null,
        isValid: true
    }
};

export default isValidBudgetForm;
