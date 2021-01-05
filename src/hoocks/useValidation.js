import { useState } from 'react';

export const useValidation = regexp => {

    const [value, setValue] = useState('');
    const [color, setColor] = useState('red');
    const [error, setError] = useState(false)
    const [reg] = useState(regexp);


    const changeHandler = event => {
        
        if (event.target.value.match(new RegExp(reg, 'i'))) {

            setColor('green')
            setValue(event.target.value)
        } else {

            setValue(event.target.value)
            setColor('red')
            setError(true)
        }
    }

    return {
        value, color, changeHandler, error
    }
}
