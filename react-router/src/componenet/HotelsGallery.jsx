import { Component } from "react";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";


export default class HotelsGallery extends Component{

    createCard = () =>{
        const hotels = this.props.HotelData.map((hotel)=>{
            return <HotelCard key = {hotel.name} hotelImg = {hotel.img} hotelName={hotel.name}/>
        })
        return hotels
    }
    render(){
        return (
           <div>
               <header className="header">
                    <h1>Hotels in Haifa</h1>
               </header>
               <div className="main">{this.createCard()}</div>
           </div>
        )
    }
}