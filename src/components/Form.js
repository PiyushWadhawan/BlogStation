import React from 'react'
import { useState } from 'react'

function Form() {

    const [form, setusername] = useState(
        {
            user: '',
            message: '',
        
    })

    const handleUsername = (event) =>
    {
        setusername((prevform) => {
            return { ...prevform, user: event.target.value}
        })
    }

    const handleMessage = (event) =>
    {
        setusername((prevform) => {
            return { ...prevform, message: event.target.value}
        })
    }

    const handleSubmit = (event) =>
    {
        alert(`${form.user} says ${form.message}`)
        event.preventDefault()
    }

    return (
        <div>
            <form className='formstyle' onSubmit={handleSubmit}>
                <div>
                    <p>Did you like the website?</p>
                    <p>Tell me here</p>
                </div>
                <div className='form-content'>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input type='text' value={form.user} onChange={handleUsername}/>
                    </div>
                </div>
                <div className='form-content'>
                    <div>
                        <label>Message</label>
                    </div>
                    <div>
                        <textarea type='text' value={form.message} onChange={handleMessage}></textarea>
                    </div>
                </div>    
                <button type='submit' className='form-btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
