import React from 'react'
import Loading from './Loading'
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";

const FlatDetail = ({flat, loading}) => {
    if(loading){
        return <Loading/>
    }
  return (
    <div>
      <StyledHero img={defaultBcg}>
          <Banner title={`${flat.locality} room`}>
            <Link to="/rooms" className="btn-primary">
              back to flats
            </Link><br></br><br></br>
            <Link to={`/bookflat/${flat.houseId}`} className="btn-primary">
              book flat
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
              <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg" />
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{flat.description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price : Rs {flat.rent}</h6>
              <h6>Size : {flat.area} SQFT</h6>
              <h6>Locality : {flat.locality}</h6>
              <h6>City : {flat.city}</h6>
              <h6>State : {flat.state}</h6>
            </article>
          </div>
        </section>
    </div>
  )
}

export default FlatDetail
