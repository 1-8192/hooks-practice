import React, {useState} from 'react'

//Using a custom hook to handle input fields
function useInput() {
    const [value, setValue] = useState('')

    const handleChange = (event) => {setValue(event.target.value)}

    return {
        value,
        handleChange
    }
}

function CustomHookPractice() {
    const { value: name, handleChange: handleNameChange } = useInput()
    const { value: surname, handleChange: handleSurnameChange } = useInput()
    const { value: age, handleChange: handleAgeChange } = useInput()

    return (
        <form>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <input type="text" placeholder="Surname" value={surname} onChange={handleSurnameChange} />
            <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>
        </form>
    )
}

export default CustomHookPractice