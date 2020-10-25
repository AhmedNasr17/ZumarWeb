import React from 'react';

const Statusbar = props => {
    return (
        <ul className={props.className}>
            <li className="active">Business and Contacy address</li>
            <li className="active">Mobile or Telephone number </li>
            <li className="active">Payment</li>
            <li className="active">Identity details</li>
        </ul>
    );
};

export default Statusbar;