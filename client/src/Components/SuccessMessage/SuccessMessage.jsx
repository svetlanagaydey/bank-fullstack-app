import React from 'react';

const SuccessMessage = (props) => {
    const action = props.action;
    return <div className="successMesage">
        <p>The {action} was completed successfully</p>
    </div>
}

export default SuccessMessage;