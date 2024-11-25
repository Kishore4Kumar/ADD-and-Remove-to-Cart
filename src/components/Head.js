import React from "react";
import "../style.css";

export default function Heading(props){
    // console.log("header11", typeof(props.cardData))

    return(
        <>
            <div className="header-top" style={{textAlign:"center", marginBottom:"40px", backgroundColor:"pink", padding: "30px 15px"}}>
                <h1>tEXT hEADING</h1>
                    <div className="addtocart">
                        <span className="cart-num">{props.cardData.length}</span>
                        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=Z3Qy1_NQNpXKAYgfmbgSJrNFqRzUrzY-5kUtGTkf29Q=" alt="" />
                    </div>
            </div>
        </>
    )
}