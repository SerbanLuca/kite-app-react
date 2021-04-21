/*import React, {useState, useEffect} from 'react'

const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Dashboard()
{
    const [spot, setSpot] = useState(null)
    

    useEffect(() => {
       fetch(url)
         .then(res => res.json())
          .then(data => setSpot(data))
    },[url])

    return(
        <div>
            {spot.map((item, index) => {
                return(
                    <>
                        <h1>{item.month}</h1>
                        <h2>{item.country}</h2>
                    </>
                )
            })}
        </div>
    )


    

}

export default Dashboard
*/