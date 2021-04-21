import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Locatie from './Locatie'
import {Link} from 'react-router-dom';


const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Dashboard()
{
    const [spot, setSpot] = useState([])
    const [query, setQuery] = useState("")

    let content = null
    
    let nr = 0;

    useEffect(() => {
       fetch(url)
         .then(res => res.json())
          .then(data => setSpot(data))
    },[])

    function search(rows)
    {
        return rows.filter(row => row.country.toLowerCase().indexOf(query) > -1)
    }

    return(
        <>
            <table className="dashboard">
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Wind Prob</th>
                    <th>When to go</th>
                </tr>
                    {spot.map((item, index) => {
                        return(
                            <tr>
                                <td>{item.name}</td> 
                                <td>{item.country}</td>
                                <td>{item.lat}</td>
                                <td>{item.long}</td>
                                <td>{item.probability}</td>
                                <td>{item.month}</td>
                            </tr>
                        )
                    })}
            </table>
            <nav className="nav-dashboard">
                 <Link to = "/map">
                    <button className="map-btn">Click for the map</button>
                </Link>
                <div className="filter-dashboard">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..."></input>
                </div>
            </nav>
            
        </>
    )


    

}

export default Dashboard
