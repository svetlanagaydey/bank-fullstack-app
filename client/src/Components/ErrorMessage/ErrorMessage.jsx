import React from 'react';
import './errorMessage.css'

const ErrorMessage = (props) => {
    const action = props.action;
    return <div className="successMesage">
        <div className="errorMessage"><span className="strong"> NOT FOUND!</span> Try enother one.</div>
    </div>
}

export default ErrorMessage;