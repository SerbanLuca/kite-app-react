import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dashboard()
{
    const url = 'https://607d664c184368001769da4b.mockapi.io/spot'
    const [product, setProduct] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
                console.log(response.data)
              })
    },[url])

    if(product){
        content = <div>
            <h1>{product.map(locatie => (<Locatie country={product.country}/>))}</h1>
        </div>
    }

    return(
        <div>{content}</div>
    )

}

export default Dashboard
