import React, {Component} from 'react'
import './App.css'

class ComponentClass extends Component {
    state = {
        activated: false
    }

    handleClick = (event) => {
        this.setState({
            activated: !this.state.activated
        })
    }

    render() {
        const buttonText = this.state.activated ? this.props.active : this.props.inactive
        return (
            <button onClick={this.handleClick}>
                {buttonText}
            </button>
        )
    }
}

export default ComponentClass