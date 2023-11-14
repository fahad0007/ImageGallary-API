import React, { useEffect, useState } from 'react'
import "./PhotosApi.css"
import axios from 'axios'
import Spinner from '../spinner/Spinner'

const PhotosApi = () => {
  const imgTitle = ["Laptop & Tea", "Work", "Pending Work", "Mobile", "Time Management", "Office", "Tea Break", "Meet Up", "Coffee", "Water", "Lake", "Nature", "Sand Beach", "Rock Beach", "Ocean", "Waterfall", "Rock Ocean", "Road ", "Gross", " Yellow Tree", "Study", "Sandles", "Walk", "Folks", "Book", "Spring Season", "Accessories", "Flood", "Beautiful valley", "Ice Mountain"]
  const [inputVal, setInputVal] = useState("")
  const [datas, setDatas] = useState([])
  const [spinner, setSpinner] = useState(false)
  // const [description, setDescription] = useState([imgTitle])


  const handleChange = (e) => {
    setInputVal(e.target.value)
  }

  const getApiData = async () => {
    setSpinner(true)
    const res = await axios.get("https://picsum.photos/v2/list")
    const data = res.data
    setDatas(data)
    setSpinner(false)

    //  console.log(data)
  }

  const newData = datas.map((item,index)=>{
    return {
      ...item,
      title:imgTitle[index]
    }
  })
  console.log(newData,'New Dataaaaa')

  const searchUpdate = newData.filter((elem) => {
    // return elem.title.toLowerCase().includes(inputVal.toLowerCase())
    const smallName = elem.title.toLowerCase()
    const smallInput = inputVal.toLowerCase()

    return (
      smallName.startsWith(smallInput)||
    //  smallName.includes(inputValue)||
      elem.title.includes(inputVal)||
      elem.title.startsWith(smallInput)
    )
  })
 

  useEffect(() => {
    getApiData()


  }, [])


  return (

    <div className='main'>
      <div className='logo'>Image Gallary</div>
      <input onChange={handleChange} type="text" value={inputVal} placeholder='Search' />

      {
        spinner ? <Spinner /> :
          <div className='photosApi'>
            {
              searchUpdate.map((elem, id) => {
                return <div className="box" key={id}>
                  <img src={elem.download_url} alt='images' />
               
                  <p>{elem.title}</p>
                </div>
              })

            }

          </div>
      }

    </div>
  )
}

export default PhotosApi
