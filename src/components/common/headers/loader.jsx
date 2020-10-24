import React, { Component } from 'react';
import Pace from 'react-pace-progress'

class Loader extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }
    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);

        this.setState({ open: true });
    }	
	render() {

		return (
			<div>
				{this.state.isLoading ? <Pace color="#103042"/> : null}

			</div>
			)
	}
}

export default Loader;