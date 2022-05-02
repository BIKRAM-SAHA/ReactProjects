
function Counter(props) {
    return (
        <div>
            <button className="changeCounter minus" onClick={()=>props.decreamentCounter(props.counter)}>-</button>
            <button className="counter">{props.counter}</button>
            <button className="changeCounter plus" onClick={()=>props.increamentCounter(props.counter)}>+</button>
        </div>
    )
}
export default Counter
