import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Locatie from './Locatie'

const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Dashboard()
{
    const [spot, setSpot] = useState([])

    let content = null
    
    let nr = 0;

    useEffect(() => {
       fetch(url)
         .then(res => res.json())
          .then(data => setSpot(console.log(data)))
    },[])

    return(
        <table >
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
                {spot.map((item, index) => {
                    return(
                        <tr>
                            <td>{item.name}</td> 
                            <td>{item.country}</td>
                            <td>{item.lat}</td>
                            <td>{item.longitude}</td>
                        </tr>
                    )
                })}
        </table>
    )


    

}

export default Dashboard