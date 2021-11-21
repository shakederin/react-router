import { Component } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function HotelPage(props){
    const { hotelName } = useParams()
    const data = props.HotelsData;
    const dateObj = {}
    for (let hotel of data){
        if(hotel.name === hotelName){
            dateObj.number = `${hotel.number}-${hotel.phone}`
            dateObj.img = hotel.img
        }
    }
        return(
            <div>
                <div className="arrow">
                    <Link to="/">	&#8592;</Link>
                <h2 className ="cardName">{hotelName}</h2>
                </div>
                <div className="center">
                    <img className="center" src={dateObj.img} alt="hotel Img" />
                    <p className="center pa"> asdf fda laksf asdfjh ljhsdf  lasjdf hfdl jadsf  fdkljadsf lasdf aksd fja alasdkfdas asdka a ksue jd sd ja</p>
                    <Link to={`/${hotelName}/Call`}>
                        <button className="center pa">Call Now {dateObj.number}</button>
                    </Link>
                </div>
            </div>
        )
    }