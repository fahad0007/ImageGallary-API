import React, { useState } from 'react'

const Dropdown = () => {
  const [options, setOptions] = useState("Options")
  const select = ["Red", "Black", "Blue", "White"]
  const [hide, setHide] = useState(false)
  const handleClick = () => {
    console.log("HoverHua")
    setHide(!hide)
}
const handleSelectClick =(elem)=>{
setOptions(elem)
setHide(false)
}

  return (
    <>
      <div onClick={handleClick} style={{ padding: "10px 10px", background: "lightgrey", fontFamily: "monospace", margin: "10px 2px", fontSize: "25px", cursor: "pointer" }}>
        {options} ⬇️
      </div>


      {


        select.map((elem, id) => {
          return hide? <div onClick={()=>handleSelectClick(elem)} key={id} style={{cursor:"pointer", margin: "-10px 2px", padding: "10px 15px", background: "red", width: "200px", display: "block" }}>{elem}</div>
          : <div key={id} style={{  display: "none" }}>{elem}</div>
        })
      }

    </>
  )
}

export default Dropdown
