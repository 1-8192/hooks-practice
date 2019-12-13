import React, {Component} from 'react'
import './App.css'

class ComponentClass extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log("This is component did mount")
    }

    componentDidUpdate() {
        console.log('this is component did update')
    }

    componentWillUnmount() {
        console.log('This is unmount')
    }

    render() {
        console.log('rendering')
        const { count } = this.state

        return (
            <div>
                <p>This is a standard class component for review</p>
                <button onClick={() => this.setState({count: count + 1})}>Increase</button>
                <button onClick={() => this.setState({count: count - 1})}>Decrease</button>
                <h3>{count}</h3>
            </div>
        )
    }
}

export default ComponentClass