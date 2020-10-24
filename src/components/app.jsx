import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import Loader from './common/headers/loader';

class App extends Component {

    render() {
        return (
            <div>
                <Loader logoName={'logo.png'} />
                {this.props.children}
            </div>
        );
    }
}

export default withTranslate(App);
