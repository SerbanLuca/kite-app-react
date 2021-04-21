import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Pop from './Pop'
import {Link} from 'react-router-dom';



const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Map()
{

    const [spot, setSpot] = useState([])

    let content = null
    
    let nr = 0;

    useEffect(() => {
       fetch(url)
         .then(res => res.json())
          .then(data => setSpot(data))
    },[])


    return(
            <>
            <nav className="nav">
                <Link to="/">
                    <h1 className="navbar-logo">KYTE</h1>
                </Link>
                <ul className="narbar-ul">
                    <Link to = "/">
                        <li>Home</li>
                    </Link>
                    <Link to = "/dashboard">
                        <li>Table</li>
                    </Link>
                    <Link to = "/profile">
                        <li>Your Profile</li>
                    </Link>
                </ul>
            </nav>

            <MapContainer center={[0.000000, 0.00000]} zoom={5} scrollWheelZoom={true} className="map">
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                
                {spot.map(item => (
                    <Marker
                    key = {item.id}
                    position={[item.lat, item.long]}>

                    <Popup position={[item.lat, item.long]}>
                        <div>
                            <h2>Country: {item.country}</h2>
                            <p>Name: {item.name}</p>
                            <p>Wind Probability: {item.probability}%</p>
                            <p>When to go: {item.month}</p>
                        </div>
                    </Popup>

                    </Marker>
                ))}
                
                
            </MapContainer>
        </>
    )
}

export default Map