import React from 'react'
import Buttons from './Buttons'

function ButtonGrid(props) {
  

  return (
    <div className='buttons'>
        <Buttons val='AC' type='primary' onClickFunction={()=>props.handleAc()}/>
        <Buttons val='+/-' type='primary' onClickFunction={()=>props.handleAlternateSign()}/>
        <Buttons val='%' type='primary' onClickFunction={()=>props.handlePercent()}/>
        <Buttons val='/' type='secondary' onClickFunction={()=>props.handleOpClick('/')}/>

        <Buttons val='7' type='primary' onClickFunction={()=>props.handleNumClick('7')}/>
        <Buttons val='8' type='primary' onClickFunction={()=>props.handleNumClick('8')}/>
        <Buttons val='9' type='primary' onClickFunction={()=>props.handleNumClick('9')}/>
        <Buttons val='X' type='secondary' onClickFunction={()=>props.handleOpClick('*')}/>

        <Buttons val='4' type='primary' onClickFunction={()=>props.handleNumClick('4')}/>
        <Buttons val='5' type='primary' onClickFunction={()=>props.handleNumClick('5')}/>
        <Buttons val='6' type='primary' onClickFunction={()=>props.handleNumClick('6')}/>
        <Buttons val='-' type='secondary' onClickFunction={()=>props.handleOpClick('-')}/>

        <Buttons val='1' type='primary' onClickFunction={()=>props.handleNumClick('1')}/>
        <Buttons val='2' type='primary' onClickFunction={()=>props.handleNumClick('2')}/>
        <Buttons val='3' type='primary' onClickFunction={()=>props.handleNumClick('3')}/>
        <Buttons val='+' type='secondary' onClickFunction={()=>props.handleOpClick('+')}/>

        <Buttons val='0' type='zero' onClickFunction={()=>props.handleNumClick('0')}/>
        <Buttons val='.' type='primary' onClickFunction={()=>{props.handleDecimal()}}/>
        <Buttons val='=' type='secondary' onClickFunction={()=>props.handleEqual()}/>
    </div>
  )
}

export default ButtonGrid