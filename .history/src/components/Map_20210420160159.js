import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Pop from './Pop'


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
        <MapContainer center={[0.000000, 0.00000]} zoom={5} scrollWheelZoom={true}>
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
    )
}

export default Map