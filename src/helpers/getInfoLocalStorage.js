const getInfoLocalStorage = () => {
    const infoExpenses = JSON.parse( localStorage.getItem( 'ucba' ) );

    return {
        expensesLS: infoExpenses?.expenses || [],
        initialBudgetLS: infoExpenses?.initialBudget || 0,
        residualBudgetLS: infoExpenses?.residualBudget || 0
    };
};

export default getInfoLocalStorage;
