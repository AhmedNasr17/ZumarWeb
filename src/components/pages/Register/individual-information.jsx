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
                <div className="container">
                    <div className="row ml-5">
                        <div className="col-12 mt-5">
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="Logo" /></a>
                        </div>

                        <div className="individual col-12">
                            <Statusbar className="progressbar mt-5" />

                            <div className="row">
                                <div className="col-12 header__title">
                                    <p className="title">Personal Information for</p>
                                    <h5>Custom Mac </h5>
                                </div>

                                <div className="col-12">
                                    <form action="#" className="form mt-5">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="First name" id="firstName" value="Mohamad" required />
                                                    <label for="firstName" className="form__label">*First name</label>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Last name" id="lastName" value="Bitar" required />
                                                    <label for="lastName" className="form__label">*Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Country of citizenship" id="country" value="Bangladesh" required />
                                                    <label for="country" className="form__label">*Country of citizenship</label>
                                                </div>
                                            </div>

                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="City" id="city" value="Dhaka" required />
                                                    <label for="city" className="form__label">*City</label>
                                                </div>
                                            </div>

                                            <div className="col-2">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Zip code" id="zipCode" value="1212" required />
                                                    <label for="zipCode" className="form__label">*Zip code</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mt-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Address 1" id="address1" value="House 11, Road 22, uttara nazim uddin ,dhaka 1212" required />
                                                    <label for="address1" className="form__label">*Address 1</label>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Address 2" id="address2" value="House 11, Road 22, uttara nazim uddin ,dhaka 1212" required />
                                                    <label for="address2" className="form__label">Address 2</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="verification">
                                                <div className="col-12">
                                                    <h6>Verifications</h6>
                                                    <p>Require additional information or documents later</p>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="form__group pr-5">
                                                            <input type="radio" name="verification-code" id="phone" /> Phone number
                                                            <input type="radio" name="verification-code" id="email" /> Email
                                                        </div>

                                                        <div className="form__group pl-5">
                                                            <input type="email" className="form__input" placeholder="Email" id="verification__email" value="shadhinarafat@gmail.com" required />
                                                            <label for="verification__email" className="form__label">Email</label>
                                                        </div>
                                                        
                                                        <button className="btn btn-success">Send code</button>
                                                    </div>

                                                    <div className="row mt-5">
                                                        <div className="form__group pl-5">
                                                            <input type="date" className="form__input" placeholder="Date of birth" id="date" required />
                                                            <label for="date" className="form__label">*Date of birth</label>
                                                        </div>

                                                        <div className="form__group pr-5">
                                                            <input type="radio" name="verification-code" id="phone" /> Phone number
                                                            <input type="radio" name="verification-code" id="email" /> Email
                                                        </div>

                                                        <div className="form__group pl-5">
                                                            <input type="text" className="form__input" placeholder="Passport" id="passport" required />
                                                            <label for="passport" className="form__label">*Passport</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="row mt-5">
                                                        <label for="document">Identity document</label>
                                                        <div>
                                                            
                                                        </div>
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar />
            </div>
        )
    }
}

export default IndividualInformation;