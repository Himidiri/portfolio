import React from 'react';
import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from './ContactStyle';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
            .then((result) => {
                setOpen(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact</Title>
                <Description>Get in touch with me effortlessly using the contact form below. I'm eager to connect and discuss opportunities.</Description>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>📫  Get in touch with me</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" />
                    <ContactInput placeholder="Your Name" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact