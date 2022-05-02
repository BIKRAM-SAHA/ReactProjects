import Counter from "./Counter"
import {useState} from 'react'
function App() {
    const [counter, setCounter]=useState(0)
    const increamentCounter=(counter)=>{
        counter=counter+1
        setCounter(counter)
    }
    const decreamentCounter=(counter)=>{
        counter-=1
        setCounter(counter)
    }
    return (
        <div className="container">
        <Counter counter={counter} increamentCounter={increamentCounter} decreamentCounter={decreamentCounter}/>
        </div>
    )
}
export default App