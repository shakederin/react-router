import { Component } from "react";
import { Link } from "react-router-dom";


export default class HotelCard extends Component{

    render(){
        return (
            <div className = "hotelCard">
                <Link to = {`/${encodeURIComponent(this.props.hotelName)}`} >
                    <img className="hotelImg" src = {this.props.hotelImg} alt="hotel bed"/>
                    <h3>{this.props.hotelName}</h3>
                </Link>
            </div>
             )
    }
}