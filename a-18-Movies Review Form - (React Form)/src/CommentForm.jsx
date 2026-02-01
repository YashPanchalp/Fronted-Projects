import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CommentForm({addnewComment}) {
  const [formData, setFromData] = useState({
    username: '',
    remarks: '',
    rating: 5
  }) 

  let handleChange = (e) => {
    setFromData((currentData) => { 
      return {
        ...currentData,
        [e.target.name]: e.target.value
      }
    })
  }

  let handleInputChange = (e) => {
    setFromData((currentData) => {
      return {
        ...currentData,
        [e.target.name]: e.target.value
      }
    })
  }
 
  //whenver the form is submitted the new comment is sent to Comment.jsx using the addnewComment function passed as a prop
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    addnewComment(formData)
    setFromData({
      username: '',
      remarks: '',
      rating: 5
    })
  }

  return (
    <>
      <div>
        <h4>Give a comment</h4>

        <form onSubmit={handleSubmit}>

          <input 
          placeholder="Enter username" 
          type="text" 
          value={formData.username}
          id="username"
          name='username'
          onChange={handleInputChange}/>
          <br /><br />


          <textarea 
          placeholder='Remarks' 
          value={formData.remarks}
          id='remarks'
          name='remarks'
          onChange={handleInputChange}
          ></textarea>
          <br /><br />


          <input 
          type="number" 
          placeholder="Rating" 
          min={1} max={5} 
          value={formData.rating}
          id='rating'
          name='rating'
          onChange={handleInputChange}
          />
          <br /><br />
          <button type="submit">Add Comment</button>

        </form>
      </div>
      
    </>
  )
}

export default CommentForm
