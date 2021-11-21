import  ReactDOM  from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import "./style.css"
import HotelsGallery from "./componenet/HotelsGallery";
import hotelData from "./Hotels";
import HotelPage from "./componenet/HotelPage";
import Call from "./componenet/Call";

const Hotels =  hotelData.hotelData


ReactDOM.render(
    <Router>
        <Routes>
            <Route path ="/" element={<HotelsGallery HotelData ={Hotels}/>} />
            <Route exect path="/:hotelName" element={<HotelPage HotelsData={Hotels}/>}/>
            <Route path="/:hotelName/Call" element={<Call HotelsData={Hotels}/>}/>
        </Routes>
    </Router>
, document.getElementById("root"));