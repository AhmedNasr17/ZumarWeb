import React, { Component } from 'react';

// Component
import Sidebar from '../../../components/Auth/sidebar';
import Statusbar from '../../../components/Auth/status-bar';

class IndividualInformation extends Component {

    constructor(props) {
        super(props)

    }

    render() {


        return (
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__content--header mt-5 ml-5">
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="Logo" /></a>
                    </div>

                     <div className="auth__form center">
                        <div className="header__title">
                            <h6 className="pr-2">Before starting, please ensure you have the following handy</h6>
                            <p>We may require additional information or documents later</p>
                        </div>

                        <Statusbar className="mt-5" />

                        {/* <form action="#" className="form mt-5 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form__group mb-5">
                                        <input type="text" className="form__input" placeholder="First name" id="firstName" required />
                                        <label for="firstName" className="form__label">First name</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form__group mb-5">
                                        <input type="text" className="form__input" placeholder="First name" id="firstName" required />
                                        <label for="firstName" className="form__label">First name</label>
                                    </div>
                                </div>
                            </div>
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
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/facebook.svg`} alt="Facebook" />
                            </a>
                            <a href="#" className="btn social__google">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/google.svg`} alt="Google" />
                            </a>
                        </div> */}
                    </div> 
                </div>

                <Sidebar />
            </div>
        )
    }
}

export default IndividualInformation;