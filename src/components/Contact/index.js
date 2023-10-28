import React from 'react';
import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from './ContactStyle';
import { useRef } from 'react';
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        emailjs.sendForm('service_na1sa1j', 'template_ru44km8', form.current, 'OhTi_0QOJFEpz64fF')
            .then((result) => {
                setOpen(true);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email send error:', error);
            });
    };

    const validateForm = () => {
        const email = form.current['user_email'].value;
        const name = form.current['user_name'].value;
        const subject = form.current['subject'].value;
        const message = form.current['message'].value;

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        if (name.trim() === '') {
            alert('Name is required');
            return false;
        }
        if (subject.trim() === '') {
            alert('Subject is required');
            return false;
        }
        if (message.trim() === '') {
            alert('Message is required');
            return false;
        }

        return true;
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact</Title>
                <Description>Get in touch with me effortlessly using the contact form below. I'm eager to connect and discuss opportunities.</Description>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>📫  Get in touch with me
                    </ContactTitle>
                    <ContactInput placeholder="Your Email" name="user_email" type="email" required />
                    <ContactInput placeholder="Your Name" name="user_name" required />
                    <ContactInput placeholder="Subject" name="subject" required />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" required />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={9000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact