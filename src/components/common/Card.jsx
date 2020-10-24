import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {    
    return (
        <div className={props.class}>
            <Link to={props.link} >
                <div>
                    <img src={props.image} className="img-fluid" alt="" />
                    <span></span>
                </div>
                <div className="details">
                    <h5 className={props.textClass}>{props.price}</h5>
                    <h4 className={props.textClass}>{props.title}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Card;