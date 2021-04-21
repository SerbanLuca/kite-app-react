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
          .then(data => setSpot(data))
    },[])

    return(
        <div>
            {spot.map((item, index) => {
                return(
                    <table>
                        <tr>
                            <th>Month</th>
                        </tr>
                        <tr>
                            <td>{item.month}</td>   
                        </tr>
                        
                    </table>
                )
            })}
        </div>
    )


    

}

export default Dashboard
