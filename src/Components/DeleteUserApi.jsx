import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DeleteUserApi = () => {
    const [users, setUsers]= useState([])

    const getUsers = async()=>{
        
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = res.data
    setUsers(data)
    console.log(data)

    }

    const handleDelete =(id)=>{
        const updateData = users.filter((elem,idx)=>{
           return idx !== id;
        })
        setUsers(updateData)
    }
    useEffect(() => {
      getUsers()
    
     
    }, [])
    
  return (
    <>
      <div>
       {/* <button onClick={getUsers}>Get Images</button> */}
     {
       users.map((elem, id)=>{
            return <div key={id} style={{display:"flex" , alignItems:"center", justifyContent:"center",  margin:"10px "}}>
              <div style={{ width:"60rem"}}>

                <h1 style={{background:"lightgrey", padding:"5px 10px", width:"100%" }}>Name : {elem.name}</h1> 
              </div>
              <button onClick={()=>handleDelete(id)} style={{height:"50px", margin:"0px 30px"}}>Delete</button>
                </div>
        })
     }   
      </div>
    </>
  )
}

export default DeleteUserApi
