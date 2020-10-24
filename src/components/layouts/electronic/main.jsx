import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import BlogSection from "../common/blogsection"
// Import custom components
import HeaderFour from "../../common/headers/header-four"
import Card from "../../../components/common/Card";
import FooterOne from "../../common/footers/footer-one";

class Electronic extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color7.css`);
    }

    render() {

        return (
            <div className="container-fluid layout-8">
                <Helmet>
                    <title>Zumar | Electronic Store</title>
                </Helmet>
                <HeaderFour logoName={'logo/3.png'} />
                <section className="p-0 padding-bottom-cls">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home15">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>save 30%</h4>
                                                    <h1>electronic</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home16">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>save upto 30%</h4>
                                                    <h1>headphone</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                <section className="">
                    <h4>Discover Zumar</h4>
                    <p className="pt-2">Whether you’ve already got an established ecommerce business, a great idea for a new product, or you just have a passion for selling, here’s how to take that next step with Zumar.</p>
                    <div className="productContainer">

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p1.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p2.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p3.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p4.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p5.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p6.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p1.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p2.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p3.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p4.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p5.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p6.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p1.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p2.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p3.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p4.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p5.svg`} alt="" />
                        </div>

                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/img/p6.svg`} alt="" />
                        </div>

                    </div>

                </section>

                <section className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <a href="#">
                                <div class="collection-banner p-left text-center">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/img/apple.svg`} class="img-fluid" alt="" />
                                    <div class="contain-banner">
                                        <div>
                                            <h3>Apple</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="/left-sidebar/collection">
                                <div class="collection-banner p-left text-center">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/img/soney.svg`} class="img-fluid" alt="" />
                                    <div class="contain-banner">
                                        <div>
                                            <h3>Soney</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="why_zumar">
                    <h4>Why Zumar</h4>
                    <p className="pt-2">Whether you’ve already got an established ecommerce business, a great idea for a new product, or you just have a passion for selling, here’s how to take that next step with Zumar.</p>


                    <div class="row partition3 pt-4 pb-4">
                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/globe.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/shield_user.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/briefcase.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>
                    </div>

                    <div class="row partition3 banner-top-cls">
                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/target.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/flag.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>

                        <div class="col-sm-12 col-lg-4 service-block1">
                            <div className="why_img_container">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/img/graph.png`} className="img-fluid" alt="" />
                            </div>
                            <div className="why_caption_container ml-4">
                                <h6>Global B2B Business</h6>
                                <p>Whether you’ve already got an established ecommerce business, a great idea</p>
                            </div>
                        </div>
                    </div>

                </section>

                {/*deals wrapper*/}
                <section className="deals">
                    <div className="pb-3">
                        <h4>Best deals</h4>
                    </div>

                    {/* Slider Section*/}
                    <div className="row">
                        <div className="col-md-12">
                            <BlogSection />
                        </div>
                    </div>
                    {/* Slider End*/}
                </section>

                <section className="sellers mt-5">
                    <div className="sellers__content">
                        <h4>Check out best seller from your country</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className="btn">View Details</button>
                    </div>
                    <div className="sellers__hero">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/img/seller.svg`} alt="
                        seller" className="sellers__img" />
                    </div>
                </section>

                <section className="offer mt-5">
                    <h4>Flash sell offer for you</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="container-fluid lookbook-section lookbook">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row lookbook-img">
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp1.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="text-white" />
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp2.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row lookbook-img">
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp1.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="text-white" />
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp1.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row lookbook-img">
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp3.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="" />
                                    <Card class="col-12" image={`${process.env.PUBLIC_URL}/assets/images/img/pp4.svg`} link="#" title="Sports watch" price="$ 100.00" textClass="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="footer-white">
                    <FooterOne logoName={'logo/3.png'} />
                </div>
            </div>
        )
    }
}


export default Electronic;