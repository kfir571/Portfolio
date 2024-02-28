import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [formCange, setFormCange] = useState(false);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormeUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
        console.log("form cange");
        setFormCange(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formCange) {
            setButtonText("Sending...");
            let response = await fetch("http://localhost:5000/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = await response.json();
            setFormDetails(formInitialDetails);
            if (result.code === 200) {
              setStatus({ succes: true, message: 'Message sent successfully'});
            } else {
              setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            }
        } 
        else {
            setStatus({ succes: false, message: 'Please fill in all fields...'});
        }
      };

      
    return (
        <section className='contact' id="connect">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us'/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormeUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormeUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormeUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone' onChange={(e) => onFormeUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                <textarea id="formTextarea" row="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormeUpdate('message', e.target.value)} />
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                                <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
