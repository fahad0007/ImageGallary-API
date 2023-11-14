import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './spinner/Spinner'

const Search = () => {
  // const initialArray = ["Steve Smith", "Babar Azam", "Maxwell", "Aron Finch", "Joe Root", "Tim David", "Shaheen Afridi", "Naseem Shah", "Amir", "Haris Rauf", "Mitchel Start", "Trent Boult", "Abdullah Shafeeq"]
  // const [array, setArray] = useState (initialArray)

  const [inputValue, setInputValue] = useState("")
  
  const [users, setUsers]= useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const getData = async ()=>{
    setIsLoading(true)

   const res = await axios.get("https://jsonplaceholder.typicode.com/users")
   const data = res.data
   setUsers(data)
   setIsLoading(false)
   console.log(data)
  } 

  useEffect(() => {
   getData()
  
  }, [])
  

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const updateSearch = users.filter((elem)=>{
    // return elem.name.toLowerCase().includes(inputValue.toLowerCase())
    const smallName = elem.name.toLowerCase()
    const smallInput = inputValue.toLowerCase()

    return (
      smallName.startsWith(smallInput)||
    //  smallName.includes(inputValue)||
      elem.name.includes(inputValue)||
      elem.name.startsWith(smallInput)

    )



   })
 


 

  return (
    
      <div className='mainDev'  style={{ height:"100vh"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>Search</h1>
        <input onChange={handleChange} value={inputValue} type="text" style={{ width: "300px", padding: "10px", outline:"none" }} placeholder='Search Here' />
        </div>

{
  isLoading ? <Spinner/> :
         <div style={{ margin: "20px auto", width: "325px"}}>
          {
             
            updateSearch.map((elem, id) => {
              return <div style={{ marginTop:"20px", background: "lightGrey", padding: "10px" }} key={id}> {elem.name}</div>
            })
          }
        
        </div>
}

        
      
      </div>
   
  )
}

export default Search
