import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


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
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            
            {spot.map(item => (
                <Marker
                key = {item.id}
                position={[item.lat, item.long]}
                >
                </Marker>
            ))}
            
             
        </MapContainer>
    )
}

export default Map