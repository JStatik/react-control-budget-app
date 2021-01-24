import React from 'react';
import PropTypes from 'prop-types';
import verifyResidualBudget from '../helpers/verifyResidualBudget';

const MoneyBudget = ( { initialBudget, residualBudget } ) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto inicial: $ { initialBudget }
            </div>

            <div className={ `alert ${ verifyResidualBudget( initialBudget, residualBudget ) }` }>
                Presupuesto restante: $ { residualBudget }
            </div>
        </>
    );
};

MoneyBudget.propTypes = {
    initialBudget: PropTypes.number.isRequired,
    residualBudget: PropTypes.number.isRequired
};

export default MoneyBudget;
