import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Locatie from './Locatie'

const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Dashboard()
{
    const [spot, setSpot] = useState(null)

    let content = null
    
    let nr = 0;

    useEffect(() => {
       fetch(url)
         .then(res => res.json())
          .then(data => setSpot(spot.keys(data).map((e) => {
              return(
                  <div>{e.country}</div>
              )
          })))
    },[])

    return(null)

    

}

export default Dashboard
