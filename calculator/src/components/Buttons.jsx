import React from 'react'

function Buttons(props) {

  return (
    <button className={props.type} onClick={props.onClickFunction}>{props.val}</button>
  )
}
export default Buttons