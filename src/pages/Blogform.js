import React from 'react'
import { useState } from 'react'

function Blogform({addBlog}) 
{
    
    const [ id, setId ] = useState(5)
    const [ img, setImg ] = useState('')
    const [ heading, setHeading ] = useState('')
    const [ info, setInfo ] = useState('')
    const [ para, setPara ] = useState('')
    const [ link, setLink ] = useState('')

    const submitForm = (e) => 
    {
        const newBlog = {
            id,
            img,
            heading,
            info,
            para,
            link,
        }

        addBlog(newBlog)

        setId(id+1)

        alert("Blog submited")
        e.preventDefault()
    }

  return (
    <div>
        <form className='container' onSubmit={submitForm}> 
            <div className='blogform'> 

                <label>Blog Heading:</label>
                <input type='text' value={heading} onChange={(e) => setHeading(e.target.value)}/>

                <label>Date:</label>
                <input type='text' value={info} onChange={(e) => setInfo(e.target.value)}/>

                <label>Image Link:</label>
                <input type='text' value={img} onChange={(e) => setImg(e.target.value)}/>

                <label>Medium Link:</label>
                <input type='text' value={link} onChange={(e) => setLink(e.target.value)}/>

                <label>Content</label>
                <textarea type='text' value={para} onChange={(e) => setPara(e.target.value)}/>

                <button type='submit' >Submit</button> 

            </div> 
        </form>
    </div>
  )
}

export default Blogform
