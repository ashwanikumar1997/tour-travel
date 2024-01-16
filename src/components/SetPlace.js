import Axios from 'axios'
import React, { useState } from 'react'

const SetPlace = () => {
const [city, setCity]=useState('')
const [distance, setDistance]=useState('')
const [info, setInfo]=useState('')
const [time, setTime]=useState('')
const [file, setFile] =useState(null)

const onDataSubmit =async()=>{
    try {
        const formData = new FormData();
       
        formData.append('city',city);
        formData.append('distance',distance);
        formData.append('info',info);
        formData.append('time',time);
        formData.append('image', file);


        await Axios.post('http://localhost:4000/api/set-place', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Refresh the page or update the image list to show the newly uploaded image.
      } catch (error) {
        console.error('Error uploading image:', error);
      }
}

  return (
    <div style={{margin:"30px"}}>
        <h1>Hello</h1>
     <div style={{margin:"30px"}}>
    <form >
    <input type='text' placeholder='city name' onChange={(e)=>setCity(e.target.value)}/><br/>
      <input type='text' placeholder='city temperature' onChange={(e)=>setDistance(e.target.value)}/><br/>
      <input type='text' placeholder='city info' onChange={(e)=>setInfo(e.target.value)}/><br/>
      <input type='text' placeholder='city best time to visit' onChange={(e)=>setTime(e.target.value)}/><br/>
      <input type='file' onChange={(e)=>setFile(e.target.files[0])} />
      <button type='button' onClick={onDataSubmit}>Submit</button>
    </form>
     </div>

    </div>
  )
}

export default SetPlace
