import '../styles/App.css';
import Display from './Display'
import ButtonGrid from './ButtonGrid'
import  { useState }  from 'react'

function App() {

  const [displayVal, setDisplayVal] = useState('')
  const [op, setOp] = useState('')
  const [evalVal, setEvalVal] = useState('')

  const handleOpClick=(operator)=>{
    if(displayVal==='ERROR'){
      setDisplayVal('')
      setOp('')
    }
    if(op===''&&displayVal!=='ERROR'){
      setEvalVal(prevEvalVal=>prevEvalVal+displayVal)
      if(evalVal!==''){
        const result=Function("return (''+parseFloat(("+evalVal+displayVal+").toFixed(10)))")()
      if(result!=='Infinity'){
          setDisplayVal(result)
          setEvalVal(result)
      }else{
        setDisplayVal('ERROR')
        setEvalVal('')
        setOp('')
      }
      }
    }
    if(displayVal!==''&&displayVal!=='ERROR'){
      setOp(operator)
    }
  }
  const handleAlternateSign=()=>{
    if(displayVal==='ERROR'){setDisplayVal('')}
    else{setDisplayVal(Function("return ''+"+(-1*displayVal)))}
  }
  const handlePercent=()=>{
    if(displayVal==='ERROR'){setDisplayVal('')}
    else{setDisplayVal(Function("return (''+parseFloat(("+displayVal/100+").toFixed(10)))"))}
  }
  const handleDecimal=()=>{
    if(displayVal==='ERROR'){setDisplayVal('')}
    else{
      if (displayVal!=='') {
        if (!displayVal.includes(".")) {
          setDisplayVal(displayVal + ".");
        }
      }else{
        setDisplayVal("0.");
      }
    }
  }
  const handleNumClick=(number)=>{
    if(displayVal==='ERROR'){setDisplayVal('')}
    if(op!==''){setDisplayVal('')}
    if(evalVal!==''){setEvalVal(prevEvalVal=>prevEvalVal+op)}
    setOp('')
    setDisplayVal(prevDisplayVal=>prevDisplayVal+number)
  }
  const handleEqual=()=>{
    if(op===''){
      const result=Function("return (''+parseFloat(("+evalVal+displayVal+").toFixed(10)))")()
      if(result!=='Infinity'){
          setDisplayVal(result)
          setEvalVal('')
      }else{
        setDisplayVal('ERROR')
        setEvalVal('')
        setOp('')
      }
    }
  }
  const handleAc=()=>{
    setEvalVal('')
    setOp('')
    setDisplayVal('')
  }
  return (
    <div className='container'>
      <Display displayVal={displayVal}/>
      <ButtonGrid
      handleOpClick={handleOpClick}
      handleNumClick={handleNumClick}
      handleEqual={handleEqual}
      handleAc={handleAc}
      handleAlternateSign={handleAlternateSign}
      handlePercent={handlePercent}
      handleDecimal={handleDecimal}/>
    </div>
  );
}

export default App;
