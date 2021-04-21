import React from 'react'
import axios from 'axios'

function Dashboard()
{
    const url = 'https://607d664c184368001769da4b.mockapi.io/spot'
    const [product, setProduct] = useState("")

    axios.get(url)
        .then(response => {

        })

}

export default Dashboard
