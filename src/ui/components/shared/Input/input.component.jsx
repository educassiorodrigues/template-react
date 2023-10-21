import './input.styles.css'

export function Input(props) { 
    return (
        <input type="text" {...props} className='input'/>
    )
}