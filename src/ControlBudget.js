import React, { useEffect, useState } from 'react';
import getInfoLocalStorage from './helpers/getInfoLocalStorage';
import GetBudget from './components/GetBudget';
import Expenses from './components/Expenses';
import ExpensesList from './components/ExpensesList';
import MoneyBudget from './components/MoneyBudget';

const ControlBudget = () => {
    const { expensesLS, initialBudgetLS, residualBudgetLS } = getInfoLocalStorage();

    const [ expenses, setExpenses ] = useState( expensesLS );
    const [ initialBudget, setInitialBudget ] = useState( initialBudgetLS );
    const [ residualBudget, setResidualBudget ] = useState( residualBudgetLS );

    useEffect( () => {
        localStorage.setItem( 'ucba', JSON.stringify( { expenses, initialBudget, residualBudget } ) );
    }, [ expenses, initialBudget, residualBudget ] );

    return (
        <div className="container">
            <header>
                <h1>Gastos</h1>

                <div className="contenido-principal">
                    {
                        ( initialBudget === 0 && residualBudget === 0 )
                            ?
                                <GetBudget
                                    setInitialBudget={ setInitialBudget }
                                    setResidualBudget={ setResidualBudget }
                                />
                            :
                                <div className="row">
                                    <div className="one-half column">
                                        <Expenses
                                            setExpenses={ setExpenses }
                                            setInitialBudget={ setInitialBudget }
                                            setResidualBudget={ setResidualBudget }
                                        />
                                    </div>

                                    <div className="one-half column">
                                        <h2>Listado de gastos</h2>

                                        {
                                            expenses.map( expense => (
                                                <ExpensesList key={ expense.id } expense={ expense } />
                                            ) )
                                        }

                                        <MoneyBudget initialBudget={ initialBudget } residualBudget={ residualBudget } />
                                    </div>
                                </div>
                    }
                </div>
            </header>
        </div>
    );
};

export default ControlBudget;
