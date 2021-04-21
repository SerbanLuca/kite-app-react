import React from 'react'

const BASE_URL = "https://607d664c184368001769da4b.mockapi.io";

export default class Dashboard extends React.Component {

    state = {
        loading: true
    };

    componentDidMount() {
        const url = 'https://607d664c184368001769da4b.mockapi.io/GET/spot';
        const response = fetch(url);
        const data = async response.json();
        console.log(data);
    }

    render() {
        return(
            <div>
                {this.state.loading ? <div>loading...</div> : <div>spot...</div>}
            </div>
        )
    }
}
