import React from 'react'
import {useState} from 'react'

export default function Form() {

    const [input, setInput] = useState ({
        firstName: '',
        email: '',
    });

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value });
        e.preventDefault()
        console.log(input);

        };
        const handleSubmit = (event) => {
        event.preventDefault();
        if (input.firstName && input.email) {
            alert('thank you' + ' ' + input.firstName)
        } else {
            alert('please fill the form correctly');
        }
        };

    return (
        <div>
            <form>
            <input type="text" onChange={(e) => handleChange (e) } name="firstName"/>
            <input type="email" onChange={(e) => handleChange (e) } name="email"/>
            <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}
