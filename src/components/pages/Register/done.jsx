import React, {Component} from 'react';

// Component
import Sidebar from '../../../components/Auth/sidebar';
import Statusbar from '../../../components/Auth/status-bar';

class Done extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div className="auth">
                <div className="container">
                    <div className="row ml-5">
                        <div className="col-12 mt-5">
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/img/logo_pro.svg`} alt="Logo" /></a>    
                        </div>

                        <div className="col-12 mt-5">
                            <Statusbar className="progressbar mt-5" />

                            <div className="done mt-5">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/done.svg`} alt="Logo" />
                                <h2 className="mt-2">You are done!</h2>
                                <p>Your information has been submitted successfully </p>
                                <p>we will notify you as soon as possible and you will get your full access</p>
                            </div>
                        </div>
                    </div>
    

                     
                </div>

                <Sidebar />
            </div>
        ) 
    }
}

export default Done;