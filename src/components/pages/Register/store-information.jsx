import React, {Component} from 'react';

// Component
import Sidebar from '../../../components/Auth/sidebar';
import Statusbar from '../../../components/Auth/status-bar';

class StoreInformation extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        const style = {
            height: '100vh'
        };

        return (
            <div className="auth" style={style}>
                <div className="container">
                    <div className="row ml-5">
                        <div className="col-12 mt-5">
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="Logo" /></a>
                        </div>

                        <div className="billing col-12">
                            <Statusbar className="progressbar mt-5" />

                            <div className="row">
                                <div className="col-12 header__title">
                                    <h6 className="title">Billing Information</h6>
                                    <p>We are not going to charge anything</p>
                                </div>

                                <div className="col-12">
                                    <form action="#" className="form mt-5">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Card holder's name" id="cardHolderName" required />
                                                    <label for="cardHolderName" className="form__label">Card holder's name</label>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Card number" id="cardNumber" required />
                                                    <label for="cardNumber" className="form__label">Card number</label>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Expires on" id="expiryDate" required />
                                                    <label for="expiryDate" className="form__label">Expires on</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-12">
                                                <div className="form__group">
                                                    <input type="text" className="form__input" placeholder="Add billing address" id="address" required />
                                                    <label for="address" className="form__label">Add billing address</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="form__group">
                                                <label for="check" className="form__checkbox">
                                                    <input type="checkbox" className="form__input--checkbox" name="" id="check" />
                                                    <label className="pl-5" for="check">Use Address 1 as Billing addresss <br/><span>House 11, Road 22, uttara nazim uddin ,dhaka 1212</span></label>
                                                </label> 
                                            </div>
                                        </div>

                                        <button className="btn">Next</button>
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

export default StoreInformation;