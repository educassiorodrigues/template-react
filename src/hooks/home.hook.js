import {useState, useCallback} from 'react'

export function useHome() { 
    const [state, setState] = useState(0)
    const [value, setValue] = useState('')

    const addValue = useCallback(() => {
        setState(state + 1)
    }, [state])

    const addText =  useCallback((event) => {
        setValue(event.target.value)
    }, [setValue]) 
    
    return {
        addValue,
        state, 
        value, 
        addText
    }
}