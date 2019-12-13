import React, {useState} from 'react'

function ObjectState() {

    const [state, setState] = useState({
        city: '',
        country: ''
    })

    // Another option is to call useState multiple times. 
    // const [city, setCity] = useState('')

    // const [state, setCountry] = useState('')

    //Must use ES6 destructuring of entire object to change key in state object. setState hook does not merge new and old object state like with classes. Can also use useState multiple times.
    const handleCityChange = (event) => {
        setState({
            ...state, city: event.target.value
        })
    }  
    
    const handleCountryChange = (event) => {
        setState({
            ...state, country: event.target.value
        })
    }  

    return (
        <div>
            <p>This example shows using objects with the setState hook</p>
            <form>
                <div>
                    <input type="text" placeholder="City" value={state.city} onChange={handleCityChange}/>
                </div>
                <div>
                    <input type="text" placeholder="Country" value={state.country} onChange={handleCountryChange} />
                </div>
                <div>
                    You live in {`${state.city}, ${state.country}`}
                </div>
            </form>
        </div>
    )
}

export default ObjectState