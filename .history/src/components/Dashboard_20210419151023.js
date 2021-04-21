import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dashboard()
{
    const url = 'https://607d664c184368001769da4b.mockapi.io/spot'
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
                console.log(response.data)
              })
    },[url])

    return(
        <div>
            <h1>Spot</h1>
        </div>
    )

}

export default Dashboard
