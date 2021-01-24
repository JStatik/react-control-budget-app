import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { msgError } ) => {
    return (
        <p className="error alert alert-danger">{ msgError }</p>
    );
};

Error.propTypes = {
    msgError: PropTypes.string.isRequired
};

export default Error;
