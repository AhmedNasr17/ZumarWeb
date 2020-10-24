import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div className="login">
                <div className="login__hero">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/img/auth_background.svg`} alt="" className="login__hero--img" />
                </div>

                <div className="login__form mt-5">

                    <div className="login__form--header">
                        <h2 className="pr-2">Sign up to</h2>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="" />
                    </div>

                    <form action="#" className="form mt-5 mb-5">
                        <div className="form__group mb-5">
                            <input type="email" className="form__input" placeholder="Email" id="email" required />                        
                            <label for="emails" className="form__label">Email</label>
                        </div>

                        <div className="form__group mb-5">
                            <input type="password" className="form__input" placeholder="Password" id="password" required />
                            <label for="password" className="form__label">Password</label>
                        </div>

                        <div className="form__group">
                            <label for="check" className="form__checkbox">
                                <input type="checkbox" className="form__input--checkbox" name="" id="check" />
                                <label className="pl-5" for="check">Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.</label>
                            </label> 
                        </div>

                        <button type="submit" className="btn">Sign in</button>
                    </form>

                    <label className="mt-2">Or connect using a social account.</label>
                    
                    <div className="social mt-2">
                        <a href="#" className="btn social__facebook">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/facebook.svg`} alt="Facebook"/>
                        </a>
                        <a href="#" className="btn social__google">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/google.svg`} alt="Google"/>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Register