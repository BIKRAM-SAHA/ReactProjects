import React, { useState } from 'react'

function Search({ handleSearch }) {

  const [text, setText]=useState('')

  const handleTextChange=(event)=>{
    setText(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <>
        <input type="text" value={text} onChange={handleTextChange} className='search-bar'/>
    </>
  )
}

export default React.memo(Search)