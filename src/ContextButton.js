import React, {useContext} from 'react'
import NameContext from './App'

function ContextButton() {
    
    const name = useContext(NameContext)
  
      return (
        <button>{name}</button>
      )
}

export default ContextButton