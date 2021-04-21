import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Locatie from './Locatie'

const url = 'https://607d664c184368001769da4b.mockapi.io/spot'

function Dashboard()
{
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        fetch(url)
         .then(res => res.json)
          .then(data => setProduct(data.country))
    },[])

    if(product){
        content = <div>
            <h1>{product.map(locatie => (<Locatie country={product.country}/>))}</h1>
        </div>
    }

    return(
        <div>{product}</div>
    )

}

export default Dashboard
