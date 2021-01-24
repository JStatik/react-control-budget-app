import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import uniqid from 'uniqid';
import useForm from '../hooks/useForm';
import isValidExpensesForm from '../helpers/isValidExpensesForm';
import Error from './Error';

const Expenses = ( { setExpenses, setInitialBudget, setResidualBudget } ) => {
    const [ formValues, handleInputChange, reset ] = useForm( { typeExpense: '', spendMoney: '' } );
    const { typeExpense, spendMoney } = formValues;

    const [ msgError, setMsgError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const typeExpenseEscaped = validator.escape( typeExpense );
        const { msgErrorExpenses, isValid } = isValidExpensesForm( typeExpenseEscaped, spendMoney );
        setMsgError( msgErrorExpenses );

        if( isValid ) {
            const expense = {
                id: uniqid(),
                type: typeExpenseEscaped,
                money: parseInt( spendMoney )
            };

            setResidualBudget( ( residualBudget ) => residualBudget - spendMoney );
            setExpenses( ( expenses ) => [ ...expenses, expense ] );
            reset();
        }

        setDisabled( false );
    };

    const handleClick = () => {
        setExpenses( [] );
        setInitialBudget( 0 );
        setResidualBudget( 0 );
    };

    return (
        <>
            <h2>Agrega tus gastos</h2>

            { msgError && <Error msgError={ msgError } /> }

            <form autoComplete="off" onSubmit={ handleSubmit }>
                <div className="campo-form">
                    <label>Tipo de gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej: Transporte"
                        name="typeExpense"
                        value={ typeExpense }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="campo-form">
                    <label>Dinero a gastar</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej: 100"
                        name="spendMoney"
                        value={ spendMoney }
                        onChange={ handleInputChange }
                    />
                </div>

                <button
                    type="submit"
                    className="button-primary u-full-width"
                    disabled={ disabled }
                >
                    Agregar gasto
                </button>
            </form>

            <button
                className="button-reset u-full-width"
                onClick={ handleClick }
            >
                Reiniciar presupuesto
            </button>
        </>
    );
};

Expenses.propTypes = {
    setExpenses: PropTypes.func.isRequired,
    setInitialBudget: PropTypes.func.isRequired,
    setResidualBudget: PropTypes.func.isRequired
};

export default Expenses;
