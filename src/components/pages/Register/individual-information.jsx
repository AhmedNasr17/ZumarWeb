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

            <div class="row h-100">
                <div class="col-xl-9 col-lg-8 col-md-7 ">

                    <div className="container">
                        <div className="col-12">
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="Logo" /></a>
                        </div>

                        <Statusbar className="progressbar mt-5" />

                        <div className="container individual mt-4">
                            <div className="row">
                                <div className="col-12 header__title">
                                    <p className="title">Personal Information for</p>
                                    <h5 className="ml-2">Custom Mac </h5>
                                </div>

                                <div className="col-12 form">
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
                                                    <select name="country" className="form__input" id="country">
                                                        <option>India</option>
                                                        <option>South Africa</option>
                                                        <option>United State</option>
                                                        <option>Australia</option>
                                                    </select>
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

                                        <div className="verification row mt-5">
                                            <div className="col-12">
                                                <h6>Verifications</h6>
                                                <p>Require additional information or documents later</p>
                                            </div>

                                            <div className="col-12 mt-5">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <div className="form__group pr-5 radio-group">
                                                            <p>
                                                                <input type="radio" name="verification-code" id="phone" />
                                                                <label for="phone">Phone number</label>
                                                            </p>

                                                            <p className="ml-3">
                                                                <input type="radio" name="verification-code" id="email" />
                                                                <label for="email">Email</label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="form__group col-6">
                                                                <input type="email" className="form__input" placeholder="Email" id="verification__email" value="shadhinarafat@gmail.com" required />
                                                                <label for="verification__email" className="form__label">Email</label>
                                                            </div>

                                                            <div className="col">
                                                                <button className="button light-green">Send code</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-5">
                                                    <div className="col-3">
                                                        <div className="form__group">
                                                            <input type="date" className="form__input" placeholder="Date of birth" id="date" required />
                                                            <label for="date" className="form__label">*Date of birth</label>
                                                        </div>
                                                    </div>

                                                    <div className="col-3">
                                                        <div className="form__group pr-5 radio-group">
                                                            <p>
                                                                <input type="radio" name="verification-code" id="nid" />
                                                                <label for="nid">NID</label>
                                                            </p>

                                                            <p className="ml-3">
                                                                <input type="radio" name="verification-code" id="passport" />
                                                                <label for="passport">Passport</label>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="form__group pl-5">
                                                            <input type="text" className="form__input" placeholder="Passport" id="passport" required />
                                                            <label for="passport" className="form__label">*Passport</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-5">
                                                    <div className="col-8">
                                                        <div className="d-flex align-items-center upload-file">
                                                            <label for="document">Identity document</label>
                                                            <div class="button-wrapper">
                                                                <span class="label">
                                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/img/union.svg`} alt="Card" className="mr-2" />
                                                                    Upload File
                                                                </span>
                                                                <input type="file" name="upload" id="document" class="upload-box" placeholder="Upload File" />
                                                            </div>
                                                            <label>you may have this for later</label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <button className="button dark-blue">Next</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5">

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>
                <div class="col-xl-3 col-lg-4 col-md-5">
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default IndividualInformation;