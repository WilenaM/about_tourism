import "./get.scss";
import { useState } from 'react';
import {TG_API_TOKEN, TG_CHAT_ID, TG_ATI_URL} from '../../env';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


function GetInTouch() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [formError, setFormErrorr] = useState(false);

    const resetForm = () => {
        setName("")
        setMail("")
        setSubject("")
        setText("")
    }

    const sendForm = (event) => {
        event.preventDefault();
        if (name && mail && subject && text) {
            
            
            
            const message = {
                name,
                mail,
                subject,
                text
            }

            let urlString = `${TG_ATI_URL}/bot${TG_API_TOKEN}/sendMessage?chat_id=${TG_CHAT_ID}&text=${JSON.stringify(message)}`;
            setFormErrorr(false);

            return fetch(urlString)
            .then(resp=>resp.json())
            .then(resp=>{
                 if (resp.ok) {
            resetForm();
                    toast('Form send successuly!', {
                        type: 'success'
                    })
                 } else {
                    toast('Oops! Something went wrong!', {
                        type: 'error'
                    })
                 }
            })
        } else {
            setFormErrorr(true)
            toast('Please fill all the form fields', {
                type: 'error'
            })
        }
    }



    return (
        <section className="get_in_touch">
            <div className="container">
                <h2 className="with_frame">Get in touch</h2>
                <p className="lugrasimo">Send me your questions, comments, or suggestions! You can contact me using the form below. You can also find <Link href="/about">more info about me here.</Link></p>
                <form className="get_in_touch_form montserat_text" onSubmit={sendForm}>
                    <div className="form_field">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} 
                        style={formError && !name ? {borderColor: 'red'} : {}}
                        ></input>
                        {formError && !name ? (<span  className="error_sms">Please enter your name!</span>) : '' }
                    </div>
                    <div className="form_field">
                        <label htmlFor="mail">Your Email</label>
                        <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)}
                         style={formError && !mail ? {borderColor: 'red'} : {}}
                        ></input>
                        {formError && !mail ? (<span className="error_sms">Please enter your email!</span>) : '' }
                    </div>
                    <div className="form_field span_form">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                        style={formError && !subject ? {borderColor: 'red'} : {}}
                        ></input>
                        {formError && !subject ? (<span className="error_sms">Please enter subject!</span>) : '' }
                    </div>
                    <div className="form_field span_form">
                        <label htmlFor="text">Text</label>
                        <textarea id="text" value={text} onChange={(e) => setText(e.target.value)}
                        style={formError && !text ? {borderColor: 'red'} : {}}
                        />
                        {formError && !text ? (<span className="error_sms">Please enter text!</span>) : '' }
                    </div>
                    <div className="form_submit span_form">
                        <button type="submit" value="submit" className="montserat_text">Send</button>
                    </div>
                    <ToastContainer />
                </form>

            </div>
        </section>
    )
}

export default GetInTouch;