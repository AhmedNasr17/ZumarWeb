import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { Slider3 } from "../../../services/script"

class BlogSection extends Component {
    render() {

        return (

            <div className="row">
                <div className="col-md-12">
                    <Slider {...Slider3} className="slide-3 no-arrow ">
                        <div className="card_container">
                            <div className="col-md-12 ">
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/product1.svg`} className="img-fluid" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="details">
                                        <h5 className="price">$ 700.00</h5>
                                        <h4 className="title">iphone 12</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="col-md-12">
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/product2.svg`} className="img-fluid" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="details">
                                        <h5 className="price">$ 2000.00</h5>
                                        <h4 className="title">MacBook Pro 2019</h4>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                        <div>
                            <div className="col-md-12">
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/product3.svg`} className="img-fluid" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="details">
                                        <h5 className="price">$ 100.00</h5>
                                        <h4 className="title">Apple watch </h4>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                        <div>
                            <div className="col-md-12">
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/product1.svg`} className="img-fluid" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="details">
                                        <h5 className="price">$ 700.00</h5>
                                        <h4 className="title">iphone 12</h4>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                        <div>
                            <div className="col-md-12">
                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                    <div>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/product2.svg`} className="img-fluid" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="details">
                                        <h5 className="price">$ 700.00</h5>
                                        <h4 className="title">iphone 12</h4>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        )
    }
}

export default BlogSection;