import React from 'react';

const Statusbar = props => {
    return (
        <ul className={props.className}>
            <li className="active">Individual Information</li>
            <li className="active">Billing </li>
            <li className="active">Store</li>
            <li className="active">Done</li>
        </ul>
    );
};

export default Statusbar;