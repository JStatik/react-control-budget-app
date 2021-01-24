const verifyResidualBudget = ( initialBudget, residualBudget ) => {
    if( ( residualBudget / initialBudget ) * 100 >= 75 ) {
        return 'alert-success';
    } else if( ( residualBudget / initialBudget ) * 100 >= 50 ) {
        return 'alert-warning';
    } else {
        return 'alert-danger';
    }
};

export default verifyResidualBudget;
