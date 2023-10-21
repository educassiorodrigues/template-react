import {useHome} from '../../../hooks/home.hook'
import { SideBar } from '../../components'
import { Input } from '../../components/shared/Input/input.component'

export function Home() {
    const { addValue, state, value, addText } = useHome()

    return (
        <div>
            <SideBar />

            <h1>{value}</h1>

            <Input value={value} onChange={addText}/>
            <span>{state}</span>
            <button onClick={addValue}> add value</button>
        </div>
    )
}