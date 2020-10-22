import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import { changeCurrency } from '../../../actions'
import { connect } from "react-redux";
import LogoImage from "./common/logo";

class HeaderFour extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		}
	}

	/*=====================
		 Pre loader
		 ==========================*/
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}

	changeLanguage(lang) {
		store.dispatch(IntlActions.setLocale(lang))
	}

	openNav() {
		var openmyslide = document.getElementById("mySidenav");
		if (openmyslide) {
			openmyslide.classList.add('open-side')
		}
	}
	openSearch() {
		document.getElementById("search-overlay").style.display = "block";
	}

	closeSearch() {
		document.getElementById("search-overlay").style.display = "none";
	}

	load = () => {
		this.setState({ isLoading: true });
		fetch().then(() => {
			// deal with data fetched
			this.setState({ isLoading: false })
		})
	};

	render() {

		return (
			<div>
				<header >
					{this.state.isLoading ? <Pace color="#27ae60" /> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="brand-logo">
											<LogoImage logo={this.props.logoName} />
										</div>
									</div>
									<div>
							{/* TODO CREATE SEARCH Component */}
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										<NavBar />
										<div className="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div className="bar-style"><img src={`${process.env.PUBLIC_URL}/assets/images/img/burger.png`} alt="Burger" className="burger-button" /> </div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<div id="search-overlay" className="search-overlay">
					<div>
						<span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
						<div className="overlay-content">
							<div className="container">
								<div className="row">
									<div className="col-xl-12">
										<form>
											<div className="form-group">
												<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
											</div>
											<button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null,
	{ changeCurrency }
)(HeaderFour);