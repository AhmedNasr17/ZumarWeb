import React from 'react';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <ul className="mt-5 mr-5">
                    <li className="pl-5">
                        <a href="#">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/burger.svg`} alt="" className="Menu icon" />
                        </a>
                    </li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

            <div className="sidebar__content">
                <h4 className="pb-3">FAQ</h4>
                <ul>
                    <li><a href="#">What if my country is not listed?</a></li>
                    <li><a href="#">Why do I need to provide my 'Business Type'?</a></li>
                    <li><a href="#">Why should I register for multiple regions?</a></li>
                    <li><a href="#">Do I need to open an account for multiple stores at the same time?</a></li>
                    <li><a href="#">What are the terms and conditions I am agreeing to?</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;