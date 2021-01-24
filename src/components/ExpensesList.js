import React from 'react';
import PropTypes from 'prop-types';

const ExpensesList = ( { expense } ) => {
    const { type, money } = expense;

    return (
        <ul className="gastos-realizados">
            <li className="gastos">
                <p>{ `${ type }:` } <span className="gasto">{ `$ ${ money }` }</span></p>
            </li>
        </ul>
    );
};

ExpensesList.propTypes = {
    expense: PropTypes.object.isRequired
};

export default ExpensesList;
