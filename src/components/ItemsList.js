import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';

export default function SellingItems(props){
    console.log("home", props)
    return(
        <>
            <section className="ui-body">
                <Container>
                    <Row className="row-cols-1 row-cols-3">
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/713SsA7gftL._AC_UY218_.jpg" alt="phone" />
                                </figure>
                                <span>Iphone 16</span>
                                <span className="price">$255</span>
                                <div className="btn">
                                    <button 
                                        onClick={()=>props.addtocardHandler(
                                            {price: 1000, name: "iPhone"}
                                        )}
                                    >Add to cart</button>
                                    <button onClick={()=>{props.removetocardHandler()}}>Remove to cart</button>
                                </div>
                            </div>                    
                        </Col>
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg" alt="phone" />
                                </figure>
                                <span>Iphone 16</span>
                                <span className="price">$255</span>
                                <div className="btn">
                                    <button 
                                        onClick={()=>props.addtocardHandler(
                                            {price: 1000, name: "iPhone"}
                                        )}
                                    >Add to cart</button>
                                    <button onClick={()=>{props.removetocardHandler()}}>Remove to cart</button>
                                </div>
                            </div>                    
                        </Col>
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg" alt="phone" />
                                </figure>
                                <span>Iphone 16</span>
                                <span className="price">$255</span>
                                <div className="btn">
                                    <button 
                                        onClick={()=>props.addtocardHandler(
                                            {price: 1000, name: "iPhone"}
                                        )}
                                    >Add to cart</button>
                                    <button onClick={()=>{props.removetocardHandler()}}>Remove to cart</button>
                                </div>
                            </div>                    
                        </Col> 
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY218_.jpg" alt="phone" />
                                </figure>
                                <span>Iphone 16</span>
                                <span className="price">$255</span>
                                <div className="btn">
                                    <button>Add to cart</button>
                                </div>
                            </div>                    
                        </Col>
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/61lLjrvDEkL._AC_UY218_.jpg" alt="phone" />
                                </figure>
                                <span>Iphone 13</span>
                                <span className="price">$255</span>
                                <div className="btn">
                                    <button>Add to cart</button>
                                </div>
                            </div>                    
                        </Col>
                        <Col>
                            <div className="item">
                                <figure>
                                    <img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY218_.jpg" alt="iPad" />
                                </figure>
                                <span>iPade</span>
                                <span className="price">$500</span>
                                <div className="btn">
                                    <button>Add to cart</button>
                                </div>
                            </div>                    
                        </Col>
                    </Row> 
                </Container>   
            </section>
        </>
    )
}