import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/useForm';
import isValidBudgetForm from '../helpers/isValidBudgetForm';
import Error from './Error';

const GetBudget = ( { setInitialBudget, setResidualBudget } ) => {
    const [ formValues, handleInputChange, reset ] = useForm( { budget: '' } );
    const { budget } = formValues;

    const [ msgError, setMsgError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const { msgErrorBudget, isValid } = isValidBudgetForm( budget );
        setMsgError( msgErrorBudget );

        if( isValid ) {
            setInitialBudget( parseInt( budget ) );
            setResidualBudget( parseInt( budget ) );

            reset();
        }

        setDisabled( false );
    };

    return (
        <>
            <h2>Indica tu presupuesto</h2>

            { msgError && <Error msgError={ msgError } /> }

            <form autoComplete="off" onSubmit={ handleSubmit }>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Presupuesto..."
                    name="budget"
                    value={ budget }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="button-primary u-full-width"
                    disabled={ disabled }
                >
                    Enviar presupuesto
                </button>
            </form> 
        </>
    );
};

GetBudget.propTypes = {
    setInitialBudget: PropTypes.func.isRequired,
    setResidualBudget: PropTypes.func.isRequired
};

export default GetBudget;
